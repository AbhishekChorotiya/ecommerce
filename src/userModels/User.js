const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    email: {
        type: String,
    },
    password: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    phone: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    address: {
        type: String
    },
    imageURL: {
        type: String
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

})


const User = mongoose.model('User', userSchema)

module.exports = User