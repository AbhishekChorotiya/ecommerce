const express= require("express")
// We dont require app here, since we are not creating server here.

// We require router here, since we are creating routes.
const homeRouter= express.Router()

homeRouter.get("/", (req, res) =>{
    // res.json will send 'json' file as response
    res.json({"message": "Backend Here"})
})

module.exports= homeRouter