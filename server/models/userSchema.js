const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  cellphone: Number,
  id: String,
})

module.exports = model("userModel", userSchema);
