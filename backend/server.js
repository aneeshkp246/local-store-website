const express = require("express");
const app = express();
const cors = require("cors");
const {connectToProductsDB } = require("./db")
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth");
const mongoose = require('mongoose');

connectToProductsDB()


app.use(express.json());
app.use(cors());
// Define endpoints
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

// Define the schema for the "test" collection
const testSchema = new mongoose.Schema({
  title: String,
  imageURL: String,
  price: Number,
  rating: Number,
});

// Define the Test model for the "test" collection
const TestModel = mongoose.model('Test', testSchema, 'test');

// Define your routes
app.get('/', async (req, res) => {
  try {
      // Retrieve data from the "test" collection in the "products" database
      const docs = await TestModel.find({});
      console.log("Retrieved data:", docs);
      res.json(docs);
  } catch (err) {
      console.error("Error retrieving data from database: ", err);
      res.status(500).send('Error retrieving data from database');
  }
});
// Start the server
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
