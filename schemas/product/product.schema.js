const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },
    introduce: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    detailImage: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
