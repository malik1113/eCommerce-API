const express = require("express")
const router = express.Router();
const { createShoppingCart, getAllCart } = require("../controllers/shoppingCartController");
//const ShoppingCart = require("../models/shoppingCartModel");
router.post("/", async (req,res) => {
    try {
        const shoppingCart = await createShoppingCart(req.body)
        res.json({
            message: "success", payload: shoppingCart
        });
        
    } catch (error) {
        res.json({
            message: "failure", payload: error
        })
    }
})

// shopping carts part: retrieving the cart(get all)
router.get("/", async (req,res) => {
    const cart = await getAllCart()

    try {
        res.json({
            message: "success", payload: cart
        })

    } catch (error) {
        throw error.message
    }
})


module.exports = router;