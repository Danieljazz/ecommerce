const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
dotenv.config()
mongoose.connect(process.env.v3n4rSH9uXW).then(() => console.log('DB Connection success')).catch((err) => console.log('There is error with DB connection', err))

dotenv.config();
mongoose
  .connect(process.env.v3n4rSH9uXW)
  .then(() => console.log("DB Connection success"))
  .catch((err) => console.log("There is error with DB connection", err));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.listen("5000", () => console.log("Server is running"));

app.listen('5000', () => (console.log('Server is running')))