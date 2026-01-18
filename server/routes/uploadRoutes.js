const express = require('express');
const router = express.Router();
const upload = require('../config/cloudinary');

router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'Please upload a file.' });
  }
  res.status(200).json({
    message: 'Image uploaded successfully',
    path: req.file.path,
    public_id: req.file.filename
  });
});

module.exports = {
  router: router,
  upload: upload
};