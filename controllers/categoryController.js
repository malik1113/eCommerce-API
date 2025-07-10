const Category = require("./categoryModel");

// create a product
const createCategory = async (categoryData) => {
    try {
        // mongooses user.create() adds data to database... creates user and adds to the database
        const newCategory = await Category.create(categoryData)
        return newCategory   
    } catch (error) {
        throw error
    }

}





module.exports = {
    createCategory,

}