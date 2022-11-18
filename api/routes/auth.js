const router = require("express").Router();
const User = require("../models/User");

router.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    mail: req.body.mail,
    password: req.body.password,
  });
  newUser
    .save()
    .then((value) => res.status(200).json(value))
    .catch((error) => res.status(500).json(error));
  // try {
  //   const user = await newUser.save();
  //   res.send(user);
  // } catch (error) {
  //   res.send(error);
  // }
});

module.exports = router;
