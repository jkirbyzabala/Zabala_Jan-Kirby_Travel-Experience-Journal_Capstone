// backend/models/Entry.js
const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  photo: { // Changed from photos to photo
    type: String, // Single photo URL
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Entry', entrySchema);
