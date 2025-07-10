const Product = require("../models/productModel");

// create a product
const createProduct = async (productData) => {
  try {
    // mongooses user.create() adds data to database... creates user and adds to the database
    const newProduct = await Product.create(productData);
    return newProduct;
  } catch (error) {
    throw error;
  }
};

const getProduct = async (filterQueries) => {
  try {
    //const product = await Product.find().populate("customer")
    const queryObject = {};
    const sortObject = {};
    // if we have category query
    if (filterQueries.category) {
      queryObject.category = filterQueries.category;
    }
    //if we have a stock query
    if (filterQueries.stock === "true") {
      queryObject.stock = { $gte: 0 };
    }

    // if we have a price range query
    if (filterQueries.minPrice && filterQueries.maxPrice) {
      queryObject.price = {
        $gte: Number(filterQueries.minPrice),
        $lte: Number(filterQueries.maxPrice),
      };
      if (filterQueries.sortBy) {
        if (filterQueries.sortOrder === "desc") {
          sortObject[filterQueries.sortBy] = -1;
        } else {
          // sortBy = 1
          // adds price key to our sort object
          sortObject[filterQueries.sortBy] = 1; // 1 for ascending
        }
      }
    }
    const product = await Product.find(queryObject).sort(sortObject);
    return product;
  } catch (error) {
    throw error.message;
  }
};
// Get All
// const getProduct = async (filterQueries) => {
//     try {
// keep track of filters
//const queryObject = {};
// keep track of sorts and sort order
//         const sortObject = {};
//         // if we have a category query
//         if(filterQueries.category) {
//             queryObject.category = filterQueries.category
//         }
//         // if we have a stock query
//         if(filterQueries.stock) {
//             queryObject.stock = filterQueries.stock
//         }
//         // if we have a price range query
//         if(filterQueries.minPrice && filterQueries.maxPrice) {

//             queryObject.price = {
//                 $gte: Number(filterQueries.minPrice),
//                 $lte: Number(filterQueries.maxPrice)

//             };
//         }
//         if (filterQueries.sortBy) {
//             if (filterQueries.sortOrder === "desc") {
//               sortObject[filterQueries.sortBy] = -1;
//             } else {
//             // sortBy = 1
//             // adds price key to our sort object
//             sortObject[filterQueries.sortBy] = 1; // 1 for ascending

//         }
//     }

//         const product = await Product.find(queryObject).sort(sortObject)
//         return product
//     } catch (error) {
//         throw error
//     }
// };

const getProductById = async (id) => {
  try {
    const product = Product.findById(id);
    return product;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProductById,
};