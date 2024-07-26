// models/DoNotRecommend.js
const mongoose = require('mongoose');

// Define the schema for "Do Not Recommend" entries
const doNotRecommendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // The name of the place must be provided
  },
  reason: {
    type: String,
    required: true, // A reason must be provided for the recommendation
  },
  dateVisited: {
    type: Date,
    required: true, // Date of the visit must be provided
  },
});

// Create a model from the schema
const DoNotRecommend = mongoose.model('DoNotRecommend', doNotRecommendSchema);

// Export the model for use in other parts of the application
module.exports = DoNotRecommend;
