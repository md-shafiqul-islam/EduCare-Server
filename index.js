// Importing required modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");

// App initialization
const app = express();

// Define port
const port = process.env.PORT || 3000;

// Environment configuration
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

// Root route
app.get("/", (req, res) => {
  res.send("Server is getting educated!!");
});

// Port listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
