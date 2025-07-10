const ShoppingCart = require("../models/shoppingCartModel");

// create a product
const createShoppingCart = async (shoppingCartData) => {
    try {
        // mongooses user.create() adds data to database... creates user and adds to the database
        const newShoppingCart = await ShoppingCart.create(shoppingCartData)
        return newShoppingCart   
    } catch (error) {
        throw error
    }

}
const getAllCart = async () => {
    try {
        const shoppingCart = await ShoppingCart.find().populate("customer").populate("product")
        return shoppingCart
    } catch (error) {
        throw error
    }
}
const updateShoppingCart = async (productId, data) => {
    try {
        const updatedShoppingCart = await ShoppingCart.findByIdAndUpdate(productId, data, {new: true})  // you have to or it won't return updated data
        return updatedShoppingCart;
    } catch (error) {
        throw error
    }
}
const clearCart = async () => {
    try {
        const clearingCart = await ShoppingCart.findAndDelete()
        return clearingCart
    } catch (error) {
        throw error.message
    }
}
const deleteCart = async (orderId) => {
    try {
        await ShoppingCart.findByIdAndDelete(orderId)
        return message
    } catch (error) {
        throw error
        
    }
}


module.exports = {
    createShoppingCart,
    getAllCart,
    deleteCart,
    updateShoppingCart,
    clearCart
}