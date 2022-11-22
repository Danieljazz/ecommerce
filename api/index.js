const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

dotenv.config();
mongoose
  .connect(process.env.v3n4rSH9uXW)
  .then(() => console.log("DB Connection success"))
  .catch((err) => console.log("There is error with DB connection", err));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen("5000", () => console.log("Server is running"));
