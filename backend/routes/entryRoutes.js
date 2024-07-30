const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryController');

// GET /entries - Retrieve all entries
router.get('/', entryController.getAllEntries);

// POST /entries - Create a new entry
router.post('/', entryController.createEntry);

// GET /entries/:id - Retrieve a single entry by ID
router.get('/:id', entryController.getEntryById);

// PUT /entries/:id - Update an existing entry by ID
router.put('/:id', entryController.updateEntryById);

// DELETE /entries/:id - Delete an entry by ID
router.delete('/:id', entryController.deleteEntryById);

module.exports = router;
