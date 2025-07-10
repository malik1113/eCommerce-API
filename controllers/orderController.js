const Order = require("../models/orderModel");

// create a product
const createOrder = async (orderData) => {
    try {
        // mongooses user.create() adds data to database... creates user and adds to the database
        const newOrder = await Order.create(orderData)
        return newOrder   
    } catch (error) {
        throw error
    }

}
const getOrder = async () => {
    try {
        const order = await Order.find()
        return order;
    } catch (error) {
        throw error
    }
}
const getOrderById = async (orderId) => {
    try {
        const order = await Order.findById(orderId)
        return order;
    } catch (error) {
        
    }
}




module.exports = {
    createOrder,
    getOrder,
    getOrderById 
}