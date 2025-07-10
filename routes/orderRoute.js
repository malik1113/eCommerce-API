const express = require("express")
const router = express.Router();
const { createOrder, getOrder } = require("../controllers/orderController")
router.post("/", async (req,res) => {
    try {
        const order = await createOrder(req.body)
        res.json({
            message: "success", payload: order
        });
        
    } catch (error) {
        res.json({
            message: "failure", payload: error 
        })
    }
})
router.get("/", async (req,res) => {

    try {
        const orders = await getOrder()
        res.json({message: 'success', payload: orders})
    } catch (error) {
        res.json({ message: "failure" , payload: error.message})
    }
    })
    
module.exports = router;