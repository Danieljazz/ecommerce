const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    productId: { type: String, required: true },
    description: { type: String, require: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, require: true },
    category: { type: Array, require: true },
    img: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema);
