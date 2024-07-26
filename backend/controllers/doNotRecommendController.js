// controllers/doNotRecommendController.js
const DoNotRecommend = require('../models/DoNotRecommend');

// Get all "do not recommend" entries
exports.getAllDoNotRecommendEntries = async (req, res) => {
  try {
    const entries = await DoNotRecommend.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new "do not recommend" entry
exports.createDoNotRecommendEntry = async (req, res) => {
  try {
    const newEntry = new DoNotRecommend(req.body);
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

// Get a "do not recommend" entry by ID
exports.getDoNotRecommendEntryById = async (req, res) => {
  try {
    const entry = await DoNotRecommend.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a "do not recommend" entry by ID
exports.updateDoNotRecommendEntryById = async (req, res) => {
  try {
    const updatedEntry = await DoNotRecommend.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

// Delete a "do not recommend" entry by ID
exports.deleteDoNotRecommendEntryById = async (req, res) => {
  try {
    const deletedEntry = await DoNotRecommend.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json({ message: 'Entry deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
