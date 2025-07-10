const express = require("express")
const router = express.Router();
const { createShoppingCart, getAllCart, updateShoppingCart} = require("../controllers/shoppingCartController");
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

router.put("/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        const updatedShoppingCart = await updateShoppingCart(productId, req.body);
        res.json({
            message: "success",
            payload: updatedShoppingCart
        });
    } catch (error) {
        throw error.message;
    }
});
router.delete("/", async (req, res) => {
    try{
        const shoppingCart = await deleteShoppingCart()
        res.json({message: "success", payload: shoppingCart})
    } catch (error) {
        res.json( {message: "failure", payload: error.message} )
    }
})
router.delete("/:orderId", async (req, res) => {
    try {
        const { orderId } = req.params;
        await deleteCustomer(orderId);
        res.json({
            message: "success"
           
        });
    } catch (error) {
        throw error.message;
    }
});
module.exports = router;