const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProduct,
} = require("../controllers/productController");

router.post("/", async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.json({
      message: "success",
      payload: product,
    });
  } catch (error) {
    res.json({
      message: "failure",
      payload: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await getProduct(req.query);
    res.json({ message: "success", payload: products });
  } catch (error) {
    res.json({ message: "failure", payload: error.message });
  }
});
module.exports = router;
