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
    owner: "66f1703f56642d599967f39e",
  }));
  await listing.insertMany(initdata.data);
  console.log("data was initialize");
};

initDb();
