const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    mail: req.body.mail,
    password: req.body.password,
  });
  try {
    const user = await newUser.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
