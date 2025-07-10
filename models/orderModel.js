
const { ObjectId } = require("bson")
const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({
    customer: {
        type: ObjectId,
        required: true,
    },
    items: {
        type: ObjectId,
        required: true
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: false
    } 
},
{
    timestamps: true
})
const Order = mongoose.model("Order", orderSchema)
module.exports = Order