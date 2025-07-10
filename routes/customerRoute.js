
const express = require("express")
const router = express.Router();
const { createCustomer,deleteCustomer,
    updateCustomer,
    getCustomer } = require("../controllers/customerController")

router.get("/", async (req,res) => {
    const customers = await getCustomer(req.body)   // wrong
    try {
        res.json({
            message: "success", payload: customers
        })
    } catch (error) {
        throw error.message
    }
})
router.post("/", async (req,res) => {
    try {
        const customer = await createCustomer(req.body)
        res.json({
            message: "success", payload: customer
        })

    } catch (error) {
        res.status(500).json({
            message: "failure",
            payload: error
        });
    }
});

router.put("/:customerId", async (req, res) => {
    try {
        const { customerId } = req.params;
        const updatedCustomer = await updateCustomer(customerId, req.body);
        res.json({
            message: "success",
            payload: updatedCustomer
        });
    } catch (error) {
        throw error.message;
    }
});

router.delete("/:customerId", async (req, res) => {
    try {
        const { customerId } = req.params;
        await deleteCustomer(customerId);
        res.json({
            message: "success"
           
        });
    } catch (error) {
        throw error.message;
    }
});
module.exports = router;