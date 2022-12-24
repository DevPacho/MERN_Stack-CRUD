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
  })

  newUser.save((err) =>{
    if (err){
      res.send(err)
    } else {
      res.send("User created succesfully!");
    };
  })
});

// Get all users
router.get("/allUsers", (req, res) => {
  userModel.find({}, (docs, err) => {
    if (err){
      res.send(err)
    } else {
    res.send(docs)
    };
  })
})

module.exports = router;
