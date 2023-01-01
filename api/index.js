const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const checkoutRoute = require("./routes/stripe");
const cors = require("cors");
dotenv.config();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://neobonk.onrender.com"],
  }),
);
mongoose
  .connect(process.env.v3n4rSH9uXW, { useNewUrlParser: true })
  .then(() => console.log("DB Connection success"))
  .catch((err) => console.log("There is error with DB connection", err));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", checkoutRoute);
app.listen("5000" || process.env.PORT, () => console.log("Server is running"));
