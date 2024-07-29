// backend/controllers/imageController.js
const Image = require('../models/Image');

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (image) {
      res.json(image);
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createImage = async (req, res) => {
  const { location, startDate, endDate, duration, photo, notes } = req.body;
  
  const newImage = new Image({
    location,
    startDate,
    endDate,
    duration,
    photo,
    notes
  });
  
  try {
    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateImageById = async (req, res) => {
  try {
    const updatedImage = await Image.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedImage) {
      res.json(updatedImage);
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteImageById = async (req, res) => {
  try {
    const deletedImage = await Image.findByIdAndDelete(req.params.id);
    if (deletedImage) {
      res.json({ message: 'Image deleted' });
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
