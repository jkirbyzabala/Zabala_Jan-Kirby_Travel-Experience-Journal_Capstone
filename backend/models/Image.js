const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
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
  photo: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Image', imageSchema);
