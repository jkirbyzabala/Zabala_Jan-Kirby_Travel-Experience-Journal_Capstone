// controllers/entryController.js
const Entry = require('../models/Entry');

// Get all entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find({});
    res.json({count:entries.length,data:entries}); //made changes here 
    // res.status(200).send(entries)
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// // Create a new entry
// exports.createEntry = async (req, res) => {
//   try {
//     const newEntry = new Entry(req.body);
//     const savedEntry = await newEntry.save();
//     res.status(201).json(savedEntry);
//   } catch (error) {
//     res.status(400).json({ message: 'Bad request' });
//   }
// };

exports.createEntry = async (req, res) => {
  const { location, startDate, endDate, duration, photo, notes} = req.body

  const newEntry = {
      location,
      startDate,
      endDate,
      duration,
      photo,
      notes
  }

  const entry = await Entry.create(newEntry)
  return res.status(201).send(entry)
}

// Get an entry by ID
exports.getEntryById = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an entry by ID
exports.updateEntryById = async (req, res) => {
  try {
    const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

// Delete an entry by ID
exports.deleteEntryById = async (req, res) => {
  try {
    const deletedEntry = await Entry.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json({ message: 'Entry deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
