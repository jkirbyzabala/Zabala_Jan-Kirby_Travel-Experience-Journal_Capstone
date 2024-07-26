// routes/doNotRecommendRoutes.js
const express = require('express');
const router = express.Router();
const doNotRecommendController = require('../controllers/doNotRecommendController');

// Define the routes for managing "do not recommend" entries

// GET /api/donotrecommend - Retrieve all "do not recommend" entries
router.get('/', doNotRecommendController.getAllDoNotRecommendEntries);

// POST /api/donotrecommend - Create a new "do not recommend" entry
router.post('/', doNotRecommendController.createDoNotRecommendEntry);

// GET /api/donotrecommend/:id - Retrieve a single "do not recommend" entry by ID
router.get('/:id', doNotRecommendController.getDoNotRecommendEntryById);

// PUT /api/donotrecommend/:id - Update an existing "do not recommend" entry by ID
router.put('/:id', doNotRecommendController.updateDoNotRecommendEntryById);

// DELETE /api/donotrecommend/:id - Delete a "do not recommend" entry by ID
router.delete('/:id', doNotRecommendController.deleteDoNotRecommendEntryById);

module.exports = router;
