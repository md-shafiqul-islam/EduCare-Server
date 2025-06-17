// Importing required modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

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
    const database = client.db("edu-care-DB");
    const serviceCollection = database.collection("services");
    const bookingCollection = database.collection("booking");

    // Service API's

    // POST endpoint
    app.post("/add-service", async (req, res) => {
      const service = req.body;
      service.price = parseInt(service.price);
      const result = await serviceCollection.insertOne(service);
      res.send(result);
    });

    // GET endpoint
    app.get("/all-services", async (req, res) => {
      const searchParams = req.query.searchParams;

      let query = {};
      if (searchParams) {
        query = { name: { $regex: searchParams, $options: "i" } };
      }

      const allServices = await serviceCollection.find(query).toArray();
      res.send(allServices);
    });

    // GET endpoint - Specific Service
    app.get("/service/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const serviceById = await serviceCollection.findOne(filter);
      res.send(serviceById);
    });

    // GET endpoint - Specific Email All Services
    app.get("/my-added-services", async (req, res) => {
      const email = req.query.email;
      const query = email ? { serviceProviderEmail: email } : {};
      const result = await serviceCollection.find(query).toArray();
      res.send(result);
    });

    // PUT endpoint - Update Specific Service
    app.put("/update-service/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };

      const updatedService = req.body;
      const updateDoc = { $set: updatedService };

      const options = { upsert: true };

      const result = await serviceCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // DELETE endpoint - Delete Specific Service
    app.delete("/delete-service/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await serviceCollection.deleteOne(filter);
      res.send(result);
    });

    // Booking API's

    // POST endpoint
    app.post("/booking-service", async (req, res) => {
      const bookingService = req.body;
      const result = await bookingCollection.insertOne(bookingService);
      res.send(result);
    });

    // GET endpoint - Specific Email
    app.get("/booked-services/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { currentUserEmail: email };
      const result = await bookingCollection.find(filter).toArray();
      res.send(result);
    });

    // GET endpoint - Services Booked From My Email
    app.get("/bookings/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { providerEmail: email };
      const bookedServices = await bookingCollection.find(filter).toArray();
      res.send(bookedServices);
    });

    // PATCH endpoint - Service Status Update
    app.patch("/service-to-do/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };

      const updatedStatus = req.body;
      const updateDoc = {
        $set: {
          serviceStatus: updatedStatus.serviceStatus,
        },
      };

      const result = await bookingCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Successfully connected to MongoDB!");
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
