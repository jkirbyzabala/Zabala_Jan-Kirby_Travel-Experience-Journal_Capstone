// backend/routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// GET /api/images - Retrieve all images
router.get('/', imageController.getAllImages);

// POST /api/images - Create a new image
router.post('/', imageController.createImage);

// GET /api/images/:id - Retrieve a single image by ID
router.get('/:id', imageController.getImageById);

// PUT /api/images/:id - Update an image by ID
router.put('/:id', imageController.updateImageById);

// DELETE /api/images/:id - Delete an image by ID
router.delete('/:id', imageController.deleteImageById);

module.exports = router;
