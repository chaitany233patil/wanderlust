const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log(req.originalUrl);
    if (req.originalUrl === "/payment/create-checkout-session") {
      req.session.redirectUrl = `/listings/${req.body.listingId}`;
    } else {
      req.session.redirectUrl = req.originalUrl;
    }
    req.flash("error", "You must be login to do any changes!");
    res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser.id)) {
    req.flash("error", "you are not the author of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
