const express = require("express");
const app = express();
const port = 5000;

// MongoDB Connection
const databaseConnection = require("./database");

// Body parser to get the sent data
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:true} ));

// Routes
const userRoutes = require("./routes/userRoutes");

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the MERN Stack CRUD backend server running...");
})

app.listen(port, () => {
  console.log("Server running correctly on port", port);
})
