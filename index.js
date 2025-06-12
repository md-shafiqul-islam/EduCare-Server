// Importing required modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// App initialization
const app = express();

// Define port
const port = process.env.PORT || 3000;

// Environment configuration
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("Server is getting educated!!");
});

// Port listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
