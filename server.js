const express = require("express");
const dotenv = require("dotenv");

const connection = require("./Helper/db"); 

dotenv.config();
const config = require("./Config/config");

const app = express();
const PORT = process.env.PORT || config.PORT || 4000;


// Routes
app.get("/", (req, res) => {
  res.send("Hello, this is your backend server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
