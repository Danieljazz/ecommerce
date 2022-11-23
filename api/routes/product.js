const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE PRODUCT
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((value) => res.status(200).json(value))
    .catch((err) => res.status(500).json(err));
});

//GET PRODUCT
router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((value) => res.status(200).json(value))
    .catch((err) => res.status(500).json(err));
});

//GET ALL PRODUCT by name or category
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  let products = "";
  try {
    if (qNew) {
      products = await Product.find().sort({ _id: -1 }).limit(5);
      res.status(200).json(products);
    } else if (qCategory) {
      products = await Product.find({ category: qCategory }).sort({
        _id: -1,
      });
      res.status(200).json(products);
    } else {
      products = await Product.find().sort({ _id: -1 });
      res.status(200).json(products);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin, (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((value) => res.status(200).json(value))
    .catch((error) => res.status(500).json(error));
});

// DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Product deleted"))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
