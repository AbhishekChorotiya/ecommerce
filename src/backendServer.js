const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// Getting the routes
// All the data saving & retriving is done in the routes
const homeRoute = require("./routes/homeRoute")
const signUpRoute = require("./routes/login-SignUp-Route")
const LoginRouter = require("./routes/login-SignUp-Route")
const getImage = require("./routes/Image-Routes")
const saveImage = require("./routes/Image-Routes")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
var ObjectId = require('mongodb').ObjectId;
var cors = require('cors')
const { Email } = require("@mui/icons-material")
const port = process.env.PORT || 8000

// Creating Backend Server
var app = express()
app.use(express.static("public"))
app.use(cookieParser())

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// Connecting to MongoDB Database
mongoose.connect("mongodb://localhost:27017/ECommerce")
var db = mongoose.connection

db.on('error', console.log.bind(console, "Connection Error"))

db.once("open", () => {
    console.log("Connection Successful");
})
const JWT_Secret = "defrtgyh1123456dfghdfv"


// 2. Login Router
app.post("/login", async function (req, res) {

    res.set({
        'Access-Control-Allow-Origin': '*'
    });

    // console.log(req.body);

    var email = req.body.Email
    var password = req.body.Password

    db.collection("Login_SignUp").find({ Email: email, Password: password }).toArray((err, result) => {
        if (err) {
            throw err;
        }

        if (result.length == 0) {
            console.log("Invalid Credentials!");
            return res.redirect('/')
        }

        else {
            console.log("\n\n(Login Route) User login Successful");
            const userID = result[0]._id;
            // console.log(result);

            // const token = jwt.sign(
            //     {
            //         id: result._id
            //     },
            //     JWT_Secret
            // )

            // console.log("Token: " + token);

            if (typeof localStorage === "undefined" || localStorage === null) {
                var LocalStorage = require('node-localstorage').LocalStorage;
                localStorage = new LocalStorage('./scratch');
            }

            localStorage.setItem('userToken', userID);

            var data = localStorage.getItem('userToken')
            console.log("(Login Route) The token id of the user is: " + data);

            // // Saving the token in cookie
            // res.cookie("jwtToken", token)
            // res.cookie("myName", "PiyushP")

            // console.log("Token using cookie is: " + JSON.stringify(req.cookies.jwtToken));

            // // return res.json({data: token})
            res.redirect("/home")
        }
    })

})


// Creating an async function for updateDetails route to get the old user details
async function getOldData(userDetails) {
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    var data = localStorage.getItem('userToken')
    console.log("\n\nIn getOldData function");

    // console.log("The token id of the user in different route is: " + data);

    db.collection('Login_SignUp').find({ _id: ObjectId(data) }).toArray(function (err, result) {
        if (err) {
            throw err
        }
        else {
            console.log("Old Data is: " + result)

            if (userDetails.fName === "") {
                console.log("true here")
                userDetails.fName = result[0].Fname
                console.log("New fName: " + fName)
            }

            if (userDetails.lName === "") {
                userDetails.lName = result[0].Lname
            }

            if (userDetails.email === "") {
                userDetails.email = result[0].Email
            }

            if (userDetails.password === "") {
                userDetails.password = result[0].Password
            }

            if (userDetails.phone === "") {
                userDetails.phone = result[0].Phone
            }

            if (userDetails.city === "") {
                userDetails.city = result[0].City
            }

            if (userDetails.country === "") {
                userDetails.country = result[0].Country
            }

            if (userDetails.address === "") {
                userDetails.address = result[0].Address
            }
        }
    })

    // updateUserDetails(data)
    return await userDetails
}

function updateUserDetails(myUserID) {

    console.log("\n\nIn updateUserDetails function");

    console.log("After Updating fields, the fName is: " + fName)

    db.collection("Login_SignUp").updateOne({ _id: ObjectId(myUserID) }, { $set: { Fname: fName, Lname: lName, Email: email, Password: password, Phone: phone, City: city, Country: country, Address: address } })

}

app.post("/updateDetails", async (req, res) => {
    res.set({
        "Access-Control-Allow-Origin": "*"
    })

    // console.log(req.body);

    var fName = req.body.first_name
    var lName = req.body.last_name
    var email = req.body.Email
    var password = req.body.Password
    var phone = req.body.Phone
    var city = req.body.city
    var country = req.body.country
    var address = req.body.address


    console.log("\n\nIn Update Details Route.");
    console.log("fName: " + fName);

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    var data = localStorage.getItem('userToken')
    console.log("The token id of the user in different route is: " + data);

    if (fName != "") {
        db.collection("Login_SignUp").updateOne({ _id: ObjectId(data) }, { $set: { Fname: fName} })
    }

    if (lName != "") {
        db.collection("Login_SignUp").updateOne({ _id: ObjectId(data) }, { $set: { Lname: lName} })
    }

    if (email != "") {
        db.collection("Login_SignUp").updateOne({ _id: ObjectId(data) }, { $set: { Email: email} })
    }

    if (password != "") {
        db.collection("Login_SignUp").updateOne({ _id: ObjectId(data) }, { $set: { Password: password} })
    }

    if (phone != "") {
        db.collection("Login_SignUp").updateOne({ _id: ObjectId(data) }, { $set: { Phone: phone} })
    }

    if (city != "") {
        db.collection("Login_SignUp").updateOne({ _id: ObjectId(data) }, { $set: { City: city} })
    }

    if (country != "") {
        db.collection("Login_SignUp").updateOne({ _id: ObjectId(data) }, { $set: { Country: country} })
    }

    if (address != "") {
        db.collection("Login_SignUp").updateOne({ _id: ObjectId(data) }, { $set: { Address: address} })
    }
  
    res.redirect("/profile")

})

// Using the routes created in the routes folder, so as to keep the database.js file clean
app.use(homeRoute)
app.use(signUpRoute)
app.use(LoginRouter)
// app.use(getImage)

app.get('/getProfile', async (req, res) => {

    // Access-Control-Allow-Origin will allow response to be send b/w different ports, since our server is running on different port (8000) & our frontend is running on different port (3000).
    res.set({
        'Access-Control-Allow-Origin': '*'
    });


    console.log("\n\nIn getProfile Route");

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    var data = localStorage.getItem('userToken')
    // console.log("The token id of the user in different route is: " + data);


    db.collection('Login_SignUp').find({ _id: ObjectId(data) }).toArray(function (err, result) {
        if (err) {
            throw err;
        }
        else {
            // console.log(result);
        }

        res.json(result)

    })
})

app.post("/saveImage", (req, res) => {
    var myImageURL = req.body.mySelectedImage

    var newImage = {
        "imageURL": myImageURL
    }

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    var data = localStorage.getItem('userToken')
    console.log("The token id of the user in different route is: " + data);

    console.log(newImage);

    db.collection("Login_SignUp").updateOne({ _id: ObjectId(data) }, { $set: { imageURL: myImageURL } })

    res.redirect("/profile")
})

app.listen(port)
console.log("Server Listening on port: " + port);