import dbConnect from './dbConnect.js';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const users = await User.find({}, '-password');
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ message: 'Failed to fetch users' });
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
}
