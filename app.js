require("dotenv").config();
const express = require("express");
const app = express();
const engine = require("ejs-locals");
const path = require("path");
const Listings = require("./models/listing");
const Review = require("./models/review.js");
const UserCart = require("./models/usercart.js");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const {
  sendEmail,
  varifyEmail,
  sendPaymentReceiptEmail,
} = require("./public/js/mail.js");
const multer = require("multer");
const { storage } = require("./cloudConfig.js");
const upload = multer({ storage });
const {
  isLoggedIn,
  saveRedirectUrl,
  isReviewAuthor,
} = require("./middleware.js");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/img")));
app.use(express.static(path.join(__dirname, "public/icons")));
app.use(methodOverride("_method"));

const port = 8080;

const MONGO_URL = "mongodb://127.0.0.1:27017/PropertyHubDB";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const sessionOptions = {
  secret: "mysupersecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.get("/", (req, res) => {
  res.send("hello i am root");
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user || null;
  next();
});
// payement related
app.post(
  "/payment/create-checkout-session",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const {
      listingId,
      amount,
      checkIn,
      checkOut,
      userEmail,
      propertyName,
      userName,
      url,
    } = req.body;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const timeDifference = checkOutDate - checkInDate;
    const numberOfDays = timeDifference / (1000 * 60 * 60 * 24);

    const totalAmount = numberOfDays * parseFloat(amount);

    req.session.userEmailDetails = {
      totalAmount,
      checkIn,
      checkOut,
      userEmail,
      propertyName,
      userName,
      url,
    };

    try {
      // Create a Stripe Checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "inr",
              product_data: {
                name: `Booking for Listing Id: ${listingId}
                       Booking Days: ${numberOfDays}`,
              },
              unit_amount: totalAmount * 100, // Amount in cents
            },
            quantity: 1,
          },
        ],
        success_url: `http://localhost:8080/payment/success`,
        cancel_url: `http://localhost:8080/payment/cancel`,
      });

      res.redirect(303, session.url);
    } catch (error) {
      console.error(error);
      res.status(500).render("cancel.ejs");
    }
  })
);

app.get("/payment/success", async (req, res) => {
  let {
    userEmail,
    userName,
    totalAmount,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    propertyName,
    url,
  } = req.session.userEmailDetails;
  console.log();
  sendPaymentReceiptEmail(
    userEmail,
    userName,
    totalAmount,
    checkInDate,
    checkOutDate,
    propertyName
  );

  let cardItem = new UserCart({
    title: propertyName,
    checkInDate,
    checkOutDate,
    url,
  });

  let { id } = res.locals.currUser;

  let user = await User.findById(id);
  user.userCart.push(cardItem.id);

  await cardItem.save();
  await user.save();

  res.render("success.ejs");
});

app.get("/payment/cancel", (req, res) => {
  res.render("cancel.ejs");
});

// payement end

// user profile

app.get("/user/profile", async (req, res) => {
  const { id } = res.locals.currUser;
  const user = await User.findById(id).populate("userCart");
  console.log(user);
  const listings = await Listings.find({ owner: user.id });
  const userCart = user.userCart;
  res.render("profile.ejs", { userCart, listings, user });
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.get("/bfuoeuofnancsnajkcnowidnqndndalkxsk", (req, res) => {
  res.render("verify.ejs");
});

app.post("/bfuoeuofnancsnajkcnowidnqndndalkxsk", (req, res) => {
  let { username, email, password } = req.body;
  const code = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");
  req.session.tempUser = { username, email, password, code };
  varifyEmail(email, code);
  res.render("verify.ejs", { email });
});

app.post("/verify-code", (req, res) => {
  const { code } = req.body;
  const { username, email, password, code: sessionCode } = req.session.tempUser;
  if (code === sessionCode) {
    res.redirect("/complete-signup");
  } else {
    req.flash("error", "Invalid verification code. Please try again.");
    return res.redirect("/bfuoeuofnancsnajkcnowidnqndndalkxsk");
  }
});

// signup route
app.get(
  "/complete-signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.session.tempUser;

      const newUser = new User({ email, username });
      const registerUser = await User.register(newUser, password);
      console.log(registerUser);
      sendEmail(registerUser.email, registerUser.username);
      req.login(registerUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", `Welcome to Wanderlust, ${username}`);
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  })
);

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// login route
app.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome back to wanderlust!");
    res.redirect(res.locals.redirectUrl ?? "/listings");
  }
);

// logout route
app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out!");
    res.redirect("/listings");
  });
});

app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    let listing = await Listings.find();
    res.render("index.ejs", { listings: listing });
  })
);

app.get("/listings/new", isLoggedIn, (req, res) => {
  res.render("new.ejs");
});

app.get(
  "/listings/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listings.findById(id);
    res.render("edit.ejs", { listing });
  })
);

// app.put(
//   "/listings/:id",
//   wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     let updatedListing = await Listings.findByIdAndUpdate(
//       id,
//       req.body.listing,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     if (req.body.Imageurl) {
//       updatedListing.images = req.body.Imageurl.map((url) => ({
//         url: url,
//         filename: "listingImage",
//       }));
//     }
//     await updatedListing.save();
//     req.flash("success", "Listing Updated Successfully");
//     res.redirect(`/listings/${id}`);
//   })
// );

app.put(
  "/listings/:id",
  upload.array("Imageurl[]"),
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let updatedListing = await Listings.findByIdAndUpdate(
      id,
      req.body.listing,
      {
        new: true,
        runValidators: true,
      }
    );
    if (req.files.length >= 2) {
      updatedListing.images = req.files.map((file) => ({
        url: file.path,
        filename: file.filename,
      }));
    }

    await updatedListing.save();
    req.flash("success", "Listing Updated Successfully");
    res.redirect(`/listings/${id}`);
  })
);

app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listings.findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner");
    res.render("show.ejs", { listing });
  })
);

app.post(
  "/listings",
  isLoggedIn,
  upload.array("Imageurl[]", 3),
  wrapAsync(async (req, res) => {
    let newListing = new Listings({
      ...req.body.listing,
      owner: req.user._id,
      images: req.files.map((file) => ({
        url: file.path,
        filename: file.filename || "listingImage",
      })),
    });

    // Save the listing to the database
    await newListing.save();

    // Flash message and redirect
    req.flash("success", "New Listing Added");
    res.redirect("/listings");
  })
);

app.delete(
  "/listings/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listings.findByIdAndDelete(id);
    req.flash("success", "listing deleted succefully!");
    res.redirect("/listings");
  })
);

//Reviews
app.post(
  "/listings/:id/review",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listings.findById(id);
    let newReview = new Review(req.body.review);

    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("new review saved!");
    req.flash("success", "New Review Added");
    res.redirect(`/listings/${listing.id}`);
  })
);

// delete review
app.delete(
  "/listings/:id/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listings.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    console.log("review Deleted");
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error" } = err;
  res.render("error.ejs", { err });
  // res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
