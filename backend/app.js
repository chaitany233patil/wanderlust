const express = require("express");
const app = express();
const engine = require("ejs-locals");
const path = require("path");
const Listings = require("./models/listing");
const mongoose = require("mongoose");
const { log } = require("console");

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public/css")));

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

app.get("/", (req, res) => {
  res.send("hello i am root");
});

app.get("/listings", async (req, res) => {
  let listing = await Listings.find();
  res.render("index.ejs", { listings: listing });
});

app.get("/listings/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listings.findById(id);
  res.render("show.ejs", { listing });
});

app.post("/listings/add", async (req, res) => {
  let newListing = new Listings(req.body.listing);
  newListing.image = {
    url: req.body.Imageurl,
    filename: "listingImage",
  };
  newListing.image.url.push(req.body.Imageurl, req.body.Imageurl);
  newListing.owner = "66f1703f56642d599967f39e";
  newListing.country = "India";
  console.log(newListing);
  await newListing.save();
  res.redirect("/listings");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
