const cryptoJs = require("crypto-js");
const User = require("../models/User");
const { verifyTokenAndAuthenticate } = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthenticate, async (req, res) => {
  if (req.body.password) {
    req.body.password = cryptoJs.AES.encrypt(
      req.body.password,
      process.env.YWQ39Usa,
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
