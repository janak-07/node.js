const express = require("express")

const dashbordRouter =express.Router()


dashbordRouter.get("/", (req , res)=>{
    res.render("dashbordRoutes")
})


dashbordRouter.get("/singup",(req,res)=>{
    res.render("signup")
})

dashbordRouter.post("/in")
module.exports = dashbordRouter