const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');
const router = express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to upload file to Cloudinary and attach URL to req.file.path
const cloudinaryUpload = (req, res, next) => {
  if (!req.file) {
    return next(); // No file, go to next middleware
  }

  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: 'phoolishlove' },
    (error, result) => {
      if (error) {
        console.error('Cloudinary Upload Error:', error);
        return res.status(500).json({ message: 'Failed to upload image.' });
      }
      // Attach cloudinary url to the request file object
      req.file.path = result.secure_url;
      next();
    }
  );

  // Use streamifier to pipe the buffer to the upload stream
  streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
};

// Standalone upload route
router.post('/', upload.single('image'), cloudinaryUpload, (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded.' });
  }
  res.status(200).send({ path: req.file.path });
});

module.exports = {
  router,
  upload: upload, // multer instance
  cloudinaryUpload: cloudinaryUpload // cloudinary upload middleware
};