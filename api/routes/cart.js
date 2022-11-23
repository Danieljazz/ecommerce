const Cart = require("../models/Cart");
const router = require("express").Router();
const {
  verifyTokenAndAuthenticate,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// CREATE CART
router.post("/", verifyTokenAndAuthenticate, (req, res) => {
  const newCart = new Cart(req.body);
  newCart
    .save()
    .then((value) => res.status(200).json(value))
    .catch((err) => res.status(500).json(err));
});

// UPDATE
router.put("/:id", verifyTokenAndAuthenticate, (req, res) => {
  Cart.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true },
  )
    .then((value) => res.status(200).json(value))
    .catch((err) => res.status(500).json(err));
});

// GET USER CART
router.get("/:userId", verifyTokenAndAuthenticate, (req, res) => {
  Cart.findOne({ userId: req.params.userId })
    .then((value) => res.status(200).json(value))
    .catch((err) => res.status(500).json(err));
});

// GET ALL
router.get("/", verifyTokenAndAdmin, (req, res) => {
  const query = req.query.new;
  query
    ? Cart.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .then((value) => res.status(200).json(value))
        .catch((err) => res.status(500).json(err))
    : Cart.find()
        .sort({ createdAt: -1 })
        .then((value) => res.status(200).json(value))
        .catch((err) => res.status(500).json(err));
});

// DELETE
router.delete("/:id", verifyTokenAndAuthenticate, (req, res) => {
  Cart.findByIdAndRemove(req.params.id)
    .then(res.status(200).json("Cart deleted!"))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;
