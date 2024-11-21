const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userCartSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  checkInDate: String,
  checkOutDate: String,
  url: String,
});

module.exports = mongoose.model("UserCart", userCartSchema);
