//  REQUIRING MODULES -------------------------------------------------------------------------------
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
var ObjectId = require('mongodb').ObjectId;
var cors = require('cors')
const port = process.env.PORT || 8000
// Using UserModels ---------------------------------------------------------------------------------
const User = require('./userModels/User')
const Product = require('./userModels/product')

// CREATING SERVER ----------------------------------------------------------------------------------
var app = express()

//  USING MODULES -----------------------------------------------------------------------------------
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// CONNECTING SERVER TO MONGODB DATABASE ----------------------------------------------------------------
mongoose.connect("mongodb://127.0.0.1:27017/ECommerce")
var db = mongoose.connection

db.on('error', console.log.bind(console, "Connection Error"))
db.once("open", () => {
    console.log("Connection Successful");
})


// ROUTES HERE ----------------------------------------------------------------------------------------------

//  1. Home Route
app.get("/", (req, res) =>{
    res.json({"message" : "Backend Here"})
})

//  2. Login Route
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

//  3. SignUp Route
app.post("/signUp", (req, res) => {
    console.log(req.body);
    
    const user = new User({
        fname : req.body.first_name,
        lname : req.body.last_name,
        email : req.body.Email,
        password : req.body.Password,
        phone : req.body.Phone,
        city : req.body.City,
        country : req.body.Country,
        address : req.body.Address,
        imageURL: "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000000) + ".svg"
    })

    user.save().then(()=>{
        console.log(user);
        res.redirect('/')
    }).catch((e)=>{
        console.log(e);
        res.send(e)
    })


})

//  4. Get Profile Route
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

//  5. Update User Details Route
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

//  6. Save Image Route
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

app.post('/addProducts',(req,res)=>{
    const products = new Product({
        product: req.body.product,
        category: req.body.category,
        price: req.body.price,
        ratings: req.body.ratings,
        offers: req.body.offers,
        image: req.body.image,
        desc: req.body.desc,
    })
    products.save().then(()=>{
        res.send('product Added!')
    }).catch((e)=>{
        res.send(e)
    })
})

app.get('/get',async(req,res)=>{
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    const products = await Product.getAllproducts();
    console.log(products);
    res.json(products)

})

// ROUTES ENDS HERE ----------------------------------------------------------------------------------------

app.listen(port)
console.log("Server Listening on port: " + port);