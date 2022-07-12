const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
const cookieParser= require("cookie-parser")

// Connecting to MongoDB Database
mongoose.connect("mongodb://localhost:27017/ECommerce")
var db = mongoose.connection
db.on('error', console.log.bind(console, "Connection Error"))

db.once("open", () => {
    console.log("Connection Successful");
})

// 1. Save Image route
const saveImage = express.Router();
// saveImage.post("/saveImage", (req, res) => {
//     var myImageURL = req.body.mySelectedImage

//     var data = {
//         "imageURL": myImageURL
//     }

//     console.log(data);
//     db.collection("User_Details").insertOne(data, (err, collection) => {
//         if (err) {
//             throw err
//         }
//         else {
//             console.log("Image Saved Successfully");
//         }

//         return res.redirect('/update')
//     })

//     res.json(data)
// })


// 2. Get Image Route
const getImage = express.Router()
//  1. Hum database se saara data pehle api me fetch kar rahe hai.
//  (Refer point 2 from UserDetails component)
// getImage.get('/getImage', auth, (req, res) => {

//     // Access-Control-Allow-Origin will allow response to be send b/w different ports, since our server is running on different port (8000) & our frontend is running on different port (3000).
//     res.set({
//         'Access-Control-Allow-Origin': '*'
//     });

//     const userID= req.id

//     console.log("User ID is: "+ userID);

//     db.collection('Login_SignUp').findOne({ _id: userID}).toArray(function (err, result) {
//         if (err) {
//             throw err;
//         }
//         else {
//             // console.log("Sending Image Data");
//             // console.log(result);
//         }

//         res.json(result)
//     })
// })

module.exports = saveImage
// module.exports= getImage