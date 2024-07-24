const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    rooms: { type: Number, required: true },
    stars: { type: Number, min: 1, max: 5, required: true },
    amenities: [{ type: String }],
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);
