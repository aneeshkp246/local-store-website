const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    title: String,
    imageURL: String,
    price: Number,
    rating: Number,
    unit: String
  });
  
  
  const TestModel = mongoose.model("Test", testSchema, "test");

  module.exports = {TestModel}