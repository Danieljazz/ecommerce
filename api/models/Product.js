const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, require: true },
    category: { type: Array, require: true },
    img: { type: String },
    inStock: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", ProductSchema);
