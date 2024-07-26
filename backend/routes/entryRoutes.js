// routes/entryRoutes.js
const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryController');

// Define the routes for managing entries

// GET /api/entries - Retrieve all entries
router.get('/', entryController.getAllEntries);

// POST /api/entries - Create a new entry
router.post('/', entryController.createEntry);

// GET /api/entries/:id - Retrieve a single entry by ID
router.get('/:id', entryController.getEntryById);

// PUT /api/entries/:id - Update an existing entry by ID
router.put('/:id', entryController.updateEntryById);

// DELETE /api/entries/:id - Delete an entry by ID
router.delete('/:id', entryController.deleteEntryById);

module.exports = router;
