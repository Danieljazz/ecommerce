const Order = require("../models/Order");
const router = require("express").Router();
const {
  verifyTokenAndAuthenticate,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE ORDER
router.post("/", verifyTokenAndAuthenticate, (req, res) => {
  const newOrder = new Order(req.body);
  newOrder
    .save()
    .then((value) => res.status(200).json(value))
    .catch((err) => res.status(500).json(err));
});

//GET USER ORDERS
router.get("/:userId", verifyTokenAndAuthenticate, (req, res) => {
  Order.find({ userId: req.params.userId })
    .then((value) => res.status(200).json(value))
    .catch((err) => res.status(500).json(err));
});

// GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, (req, res) => {
  Order.find()
    .then((value) => res.status(200).json(value))
    .catch((err) => res.status(500).json(err));
});

// UPDATE ORDER
router.put("/:id", verifyTokenAndAdmin, (req, res) => {
  Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((value) => res.status(200).json(value))
    .catch((err) => res.status(500).json(err));
});

// DELETE ORDER
router.delete("/:id", verifyTokenAndAdmin, (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then((value) => res.status(200).json("Order deleted!"))
    .catch((err) => res.status(500).json(err));
});

// GET INCOME

module.exports = router;
