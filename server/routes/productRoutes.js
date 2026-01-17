const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');
const { upload, cloudinaryUpload } = require('./uploadRoutes');

router.route('/').get(getProducts).post(protect, admin, upload.single('image'), cloudinaryUpload, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, upload.single('image'), cloudinaryUpload, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router;
