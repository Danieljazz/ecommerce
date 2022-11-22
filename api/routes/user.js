const cryptoJs = require("crypto-js");
const User = require("../models/User");
const {
  verifyTokenAndAuthenticate,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//UserEdit
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
    const { password, ...others } = updatedUser._doc;
    res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//get user by id
router.get("/:id", verifyTokenAndAdmin, (req, res) => {
  User.findById(req.params.id)
    .then((value) => {
      const { password, ...others } = value._doc;
      res.status(200).json(others);
    })
    .catch((err) => res.status(500).json(err));
});

//GetAllUsers
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  const usercount = req.query.usercount ? req.query.usercount : 2;
  try {
    const data = query
      ? await User.find().sort({ createdAt: -1 }).limit(usercount)
      : await User.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }

  //not available for query only for all users
  // User.find()
  //   .then((value) => res.status(200).json(value))
  //   .catch((err) => res.status(500).json(err));
});

//DeleteUsers
router.delete("/:id", verifyTokenAndAuthenticate, (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("User deleted"))
    .catch((error) => res.status(500).json(error));
});

//GET USER STATS

module.exports = router;
