const express = require("express");
const router = express.Router();

const userModel = require("../models/userSchema");

// Create a user
router.post("/createUser", (req, res) => {

  const newUser = new userModel({
    name: req.body.name,
    email: req.body.email,
    cellphone: req.body.cellphone,
    id: req.body.id
  });

  newUser.save((err) =>{
    if (err){
      res.send(err);
    } else {
      res.send("User created succesfully!");
    };
  });
});

// Get all users
router.get("/allUsers", (req, res) => {
  userModel.find({}, (docs, err) => {
    if (err){
      res.send(err);
    } else {
    res.send(docs);
    };
  });
});

// Get user data by ID
router.post("/getUserData", (req, res) => {
  userModel.find({ _id: req.body._id }, (docs, err) => {
    if (err){
      res.send(err);
    } else {
    res.send(docs);
    };
  });
});

// Update user data by ID
router.post("/updateUserData", (req, res) => {
  userModel.findOneAndUpdate({_id: req.body._id}, {
    name: req.body.name,
    email: req.body.email,
    cellphone: req.body.cellphone
  },
  (err) => {
    if (err){
      res.send(err);
    } else {
      res.send("User updated succesfully!");
    };
  });
});

// Delete user by ID
router.post("/deleteUser", (req, res) => {
  userModel.findOneAndDelete({_id: req.body._id}, (err) => {
    if (err){
      res.send(err);
    } else {
      res.send("User deleted succesfully!");
    };
  });
});

module.exports = router;
