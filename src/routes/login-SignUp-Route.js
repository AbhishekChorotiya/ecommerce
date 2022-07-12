const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const jwt= require("jsonwebtoken")
const cookieParser= require("cookie-parser")
const JWT_Secret= "defrtgyh1123456dfghdfv"


// Connecting to MongoDB Database
mongoose.connect("mongodb://localhost:27017/ECommerce")
var db = mongoose.connection
db.on('error', console.log.bind(console, "Connection Error"))

db.once("open", () => {
    console.log("Connection Successful");
})

// 1. Sign Up Router
const signUpRouter = express.Router()
signUpRouter.post("/signUp", (req, res) => {
    console.log(req.body);

    var fName = req.body.first_name
    var lName = req.body.last_name
    var email = req.body.Email
    var password = req.body.Password
    var phone = req.body.Phone
    var city = req.body.City
    var country = req.body.Country
    var address = req.body.Address

    var data = {
        "Name": fName+ " "+ lName,
        "Email": email,
        "Password": password,
        "Phone": phone,
        "City": city,
        "Country": country,
        "Address": address,
        "imageURL": "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg"
    }

    db.collection("Login_SignUp").insertOne(data, (err, collection) => {
        if (err) {
            throw err
        }
        else {
            console.log("Record Inserted Succesfully");
        }

        return res.redirect('/')
    })

    // res.json(data)
})

// // // 2. Login Router
// const LoginRouter = express.Router()
// LoginRouter.post("/login", async function (req, res) {
    
//     console.log(req.body);

//     var email = req.body.Email
//     var password = req.body.Password

//     db.collection("Login_SignUp").find({ Email: email, Password: password }).toArray((err, result) => {
//         if (err) {
//             throw err;
//         }

//         if (result.length == 0) {
//             console.log("Invalid Credentials!");
//             return res.redirect('/')
//         }

//         else {
//             console.log("User login Successful");
//             const userID = result[0]._id;
//             console.log(result);

//             const token= jwt.sign(
//                 {
//                     id: result._id
//                 }, 
//                 JWT_Secret
//             )

//             console.log("Token: "+ token);


//             // Saving the token in cookie
//             res.cookie("jwtToken", token)

//             // return res.json({data: token})
//             res.redirect("/home")
//         }
//     })
//     // return res.redirect('/home')

// })

module.exports = signUpRouter
// module.exports = LoginRouter