const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    product: {
        type: String,
    },
    category: {
        type: String
    },
    price: {
        type: String
    },
    ratings: {
        type: String
    },
    offers: {
        type: String
    },
    image: {
        type: String
    },
    desc: {
        type: String
    }

})

productSchema.statics.getAllproducts = async ()=>{
    const products = await Product.find()
    return products
}


const Product = mongoose.model('Product', productSchema)

module.exports = Product