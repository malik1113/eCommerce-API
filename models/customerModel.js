const mongoose = require("mongoose")
const customerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
        unique: true
    },
    customerAddress: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: true
    }
},
{
    timestamps: true

})
const Customer = mongoose.model("Customer", customerSchema)
module.exports = Customer