const express = require("express");
const router = express.Router();

const userModel = require("../models/userSchema");

router.post("/createUser", (req, res) => {
  const newUser = new userModel({
    name: req.body.name,
    email: req.body.email,
    cellphone: req.body.cellphone,
    id: req.body.id
  })

  newUser.save((err) =>{
    if (err) console.error(err);

    res.send("User created succesfully!");
  })
});

module.exports = router;
