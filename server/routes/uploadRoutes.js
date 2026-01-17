const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const router = express.Router();

const upload = multer({ storage });

router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.send(req.file.path);
});

module.exports = { router, upload };
