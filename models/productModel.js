
const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    images: {
        type: [String],
       
    }


},
{
    timestamps: true
})
const Product = mongoose.model("Product", productSchema)
module.exports = Product