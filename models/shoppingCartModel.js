
const { ObjectId } = require("bson")
const mongoose = require("mongoose")
const shoppingCartSchema = new mongoose.Schema({
    customer: {
        type: ObjectId, //customerName
        required: true,
        quantity: 1
    },
    items: {
        type: Array,
        productId: Number,
        quantity: Number
    }
},
{
    timestamps: true
})
const shoppingCart = mongoose.model("shoppingCart", shoppingCartSchema)
module.exports = shoppingCart