const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  cellphone: Number,
})

module.exports = model("userModel", userSchema);
