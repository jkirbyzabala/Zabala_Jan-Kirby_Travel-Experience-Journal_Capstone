// backend/models/Entry.js
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
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
  photos: {
    type: [String], // Array of photo URLs
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Entry', entrySchema);
