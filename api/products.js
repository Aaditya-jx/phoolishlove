import dbConnect from './dbConnect.js';
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const products = await Product.find({});
      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json({ message: 'Failed to fetch products' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { name, description, price, image, category, inStock } = req.body;
      const product = new Product({ name, description, price, image, category, inStock });
      await product.save();
      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({ message: 'Failed to create product' });
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
}
