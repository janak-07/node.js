 const express = require("express");
const dashbordRouter = require("./routes/dashbordRoutes");

 const path = require("path")
 const PORT = 9000;
 const app = express();
 app.set("view engine" ,"ejs")

 app.use("/" ,dashbordRouter )
app.use("/assets",express.static(path.join(__dirname,"/assets")))
 app.listen(PORT, (err)=>{
    if(err){
        console.log("error")

    }
    console.log(`server run ${PORT}`)
 })
