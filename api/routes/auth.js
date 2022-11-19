const router = require("express").Router();
const User = require("../models/User");
const cryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();

// REGISTER
router.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    mail: req.body.mail,
    password: cryptoJS.AES.encrypt(req.body.password, process.env.YWQ39Usa),
  });
  newUser
    .save()
    .then((value) => res.status(201).json(value))
    .catch((error) => res.status(500).json(error));
  // try {
  //   const user = await newUser.save();
  //   res.send(user);
  // } catch (error) {
  //   res.send(error);
  // }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // this solution instead of && due to header sent problem
    if (!user) {
      return res.status(404).json("Wrong credentials");
    }
    const hashedPassword = cryptoJS.AES.decrypt(
      user.password,
      process.env.YWQ39Usa,
    );
    const OriginalPassword = hashedPassword.toString(cryptoJS.enc.Utf8);
    if (OriginalPassword !== req.body.password)
      return res.status(401).json("Wrong credentials");
    const { password, ...others } = user._doc; // prevent password send, getting only document so doc
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
