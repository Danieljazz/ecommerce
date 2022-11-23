const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
          require: true,
        },
        quantity: {
          type: Number,
          defalut: 1,
        },
        size: {
          type: String,
        },
        color: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Cart", CartSchema);
