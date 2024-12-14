const express = require("express");
const dashbordrouter = require("./router/dashboard");
const connection = require("./cofig/db");
var cookieParser = require('cookie-parser');
const path = require("path");

const app = express();
let port = 8080;

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing cookies
app.use(cookieParser());

// Use the dashboard router
app.use("/", dashbordrouter);

// Start the server
app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    connection();
    console.log("server is running on port", port);
});
