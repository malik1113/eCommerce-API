
const express = require("express");
const logger = require("morgan");
const connectToMongoDB = require("./database/connectToMongoDB");

const app = express();
const PORT = 3000;

//Middleware
app.use(logger("dev"))
app.use(express.json())

//Routes
const shoppingRouter = require("./routes/shoppingCartRoute")
app.use("/api/shopping", shoppingRouter)

const productRouter = require("./routes/productRoute")
app.use("/api/product", productRouter)

const orderRouter = require("./routes/orderRoute")
app.use("/api/order", orderRouter)

const customerRouter = require("./routes/customerRoute")
app.use("/api/customer", customerRouter)

//exports
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
    connectToMongoDB();
})