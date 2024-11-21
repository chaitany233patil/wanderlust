const mongoose = require("mongoose");
const initdata = require("./data.js");
const listing = require("../models/listing.js");

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

const initDb = async () => {
  await listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "672dbb7b3122498e80d1f4dc",
    images: obj.images.map((url) => ({
      url,
      filename: "listingImage",
    })),
  }));
  await listing.insertMany(initdata.data);
  console.log("data was initialize");
};

initDb();
