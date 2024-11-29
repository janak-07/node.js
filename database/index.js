const express = require("express");
const connection = require("./config/db");
const UserModel = require("./model/userModal");
const path = require("path");
const fs = require("fs");
let port = 8080;
const app = express();

app.set("view engine", "ejs");
// app.use("/uploads", express.static(path.join(__dirname), "/uploads"));
app.use("/uploads", express.static(path.join(__dirname, "/uploads"))); // correct syntax

app.use(express.urlencoded());

app.get("/", async (req, res) => {
  try {
    const userData = await UserModel.find({});

    res.render("addData", { userData });
  } catch (err) {
    console.log(err);
  }
});

app.post("/insertAddData", UserModel.imageUpload, async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  // const { userName, password } = req.body;
  // console.log(userName, password);
  try {
    if (req.file) {
      // req.body.image = path.join(
      //   __dirname,
      //   UserModel.imagePath+
      //   req.file.filename
      // );
      req.body.image = UserModel.imagePath + "/" + req.file.filename; // correct syntax
    }
    await UserModel.create(req.body);
    console.log("Data inserted successfully");
  } catch (err) {
    console.log(err);
  }

  res.redirect("back");
});

app.get("/deleteData/:id", async (req, res) => {
  // console.log(req.params.id);
  try {
    const getDataUser = await UserModel.findById(req.params.id);
    console.log(getDataUser);
    if (getDataUser) {
      fs.unlinkSync(path.join(__dirname, getDataUser.image));
      
    }
    await UserModel.findByIdAndDelete(req.params.id);
    console.log("Data deleted successfully");
    res.redirect("back");
  } catch (err) {
    console.log(err);
  }
});

app.get("/update/:id", async (req, res) => {
  const storeData = await UserModel.findById(req.params.id);
  console.log(storeData);
  res.render("updateData", { storeData });
});

app.post("/editData/:id", UserModel.imageUpload, async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  console.log(req.file);
  try {
    if (req.file) {
      const getDataUser = await UserModel.findById(req.params.id);
      fs.unlinkSync(path.join(__dirname, getDataUser.image));
    }
    req.body.image = UserModel.imagePath + "/" + req.file.filename;
    await UserModel.findByIdAndUpdate(req.params.id, req.body);
    console.log("Data updated successfully");
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log(`Server is running on port ${port}`);
});