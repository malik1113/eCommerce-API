const Customer = require("../models/customerModel");

// create a product
const createCustomer = async (customerData) => {
    try {
        // mongooses user.create() adds data to database... creates user and adds to the database
        const newCustomer = await Customer.create(customerData)
        return newCustomer   
    } catch (error) {
        throw error
    }

}
const getCustomer = async () => {
    try {
        const customer = await Customer.find()
        return customer;
    } catch (error) {
        throw error
    }
}
const updateCustomer = async (customerId, data) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(customerId, data, {new: true})  // you have to or it won't return updated data
        return updatedCustomer;
    } catch (error) {
        throw error
    }
}
const deleteCustomer = async (customerId) => {
    try {
        await Customer.findByIdAndDelete(customerId)
        return message
    } catch (error) {
        throw error
        
    }
}



module.exports = {
    createCustomer,
    deleteCustomer,
    updateCustomer,
    getCustomer
}