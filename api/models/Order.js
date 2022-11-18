const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
    address: { type: Object, require: true },
    orderStatus: { type: String, default: "pending" },
  },
  { timestap: true },
);

module.exports = mongoose.model("Order", OrderSchema);
