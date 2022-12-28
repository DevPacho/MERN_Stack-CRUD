const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/mern_crud")
  .catch(db => console.log("❌ Error connecting to the database!"))
  .then(db => console.log("✅ Database connected succesfully!"));

module.exports = mongoose;
