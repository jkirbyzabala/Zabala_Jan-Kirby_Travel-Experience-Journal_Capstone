// models/Entry.js
const mongoose = require('mongoose');

// Define the schema for travel entries
const entrySchema = new mongoose.Schema({
  location: {
    type: String,
    required: true, // The location name must be provided
  },
  description: {
    type: String,
    required: true, // A description of the location must be provided
  },
  dateVisited: {
    type: Date,
    required: true, // Date of the visit must be provided
  },
  duration: {
    type: Number, // Duration of the visit in hours
  },
  favorite: {
    type: Boolean,
    default: false, // Indicates if the location is marked as a favorite
  },
  doNotRecommend: {
    type: Boolean,
    default: false, // Indicates if the location is marked as "do not recommend"
  },
  imageUrl: {
    type: String, // URL of the image associated with the entry
  },
});

// Create a model from the schema
const Entry = mongoose.model('Entry', entrySchema);

// Export the model for use in other parts of the application
module.exports = Entry;
