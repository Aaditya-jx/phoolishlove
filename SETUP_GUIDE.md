# 🚀 Complete Setup Guide - Phoolishh Loveee

## Quick Start (For Today's Delivery!)

### Step 1: MongoDB Database Setup (5 minutes)

#### Option A: MongoDB Atlas (Cloud - Recommended, FREE)
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Click "Try Free" or "Sign Up"
3. Create an account (free tier available)
4. Choose "Build a Database" → "FREE" (M0 Sandbox)
5. Choose a Cloud Provider (AWS is fine) and region closest to you
6. Create Cluster (takes 1-3 minutes)
7. Click "Connect" → "Connect your application"
8. Copy the connection string (looks like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`)
9. Replace `<username>` with your database username
10. Replace `<password>` with your database password (set during cluster creation)
11. Add a database name at the end: `...mongodb.net/phoolishlove?retryWrites=true&w=majority`

**Example final URI:**
```
mongodb+srv://myuser:mypassword123@cluster0.abc123.mongodb.net/phoolishlove?retryWrites=true&w=majority
```

#### Option B: Local MongoDB (If you have it installed)
```
mongodb://localhost:27017/phoolishlove
```

---

### Step 2: Get JWT Secret (30 seconds)

Generate a random string for JWT_SECRET. You can use any random string:

**Quick Options:**
- Use: `phoolishlove_secret_key_2026_secure_random_string`
- Or generate online: https://www.random.org/strings/
- Or use Node.js: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

---

### Step 3: Razorpay API Keys (5 minutes - Optional for now)

**Note:** You can skip Razorpay for now and add it later. The app will work without it, just payment won't process.

1. Go to https://razorpay.com/
2. Sign up for an account (free)
3. Go to Dashboard → Settings → API Keys
4. Click "Generate Key" if you don't have one
5. Copy the **Key ID** and **Key Secret**

**Test Keys (for development - works without real payment):**
```
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_secret_key_here
```

---

### Step 4: Create .env File (2 minutes)

1. Go to `server` folder
2. Create a file named `.env` (no extension!)
3. Copy this content and fill in your values:

```env
# MongoDB Connection String
MONGO_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/phoolishlove?retryWrites=true&w=majority

# JWT Secret (any random string, at least 32 characters)
JWT_SECRET=phoolishlove_secret_key_2026_secure_random_string_change_this

# Razorpay API Keys (optional - can use test keys)
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# Port (default is 5000)
PORT=5000
```

**IMPORTANT:**
- Replace `yourusername`, `yourpassword`, and the cluster URL with your MongoDB Atlas connection string
- Replace the JWT_SECRET with a random string
- For Razorpay, you can use test keys or leave placeholder values for now

---

### Step 5: Install Dependencies (2 minutes)

```bash
cd server
npm install
```

---

### Step 6: Start the Server (1 minute)

```bash
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB Connected...
```

**If you see "URI must include hostname" error:**
- Check your `.env` file - make sure MONGO_URI is correct
- Make sure there are no spaces around the `=` sign
- Make sure the connection string is in quotes if it has special characters

---

### Step 7: Seed Products (Optional - 2 minutes)

Create a file `server/seedProducts.js`:

```javascript
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

connectDB();

const products = [
  {
    name: 'Pink Flower',
    description: 'Beautiful handmade pink flower',
    price: 199,
    image: 'assets/p1.jpeg',
    category: 'Flower',
    inStock: true
  },
  {
    name: 'Bear Keychain',
    description: 'Adorable bear keychain',
    price: 249,
    image: 'assets/p2.jpeg',
    category: 'Keychain',
    inStock: true
  },
  {
    name: 'Flower Bouquet',
    description: 'Colorful flower bouquet',
    price: 299,
    image: 'assets/p3.jpeg',
    category: 'Bouquet',
    inStock: true
  },
  {
    name: 'Custom Gift',
    description: 'Custom made gift',
    price: 349,
    image: 'assets/p5.jpeg',
    category: 'Gift',
    inStock: true
  },
  {
    name: 'Colorful Tulips',
    description: 'Beautiful colorful tulips',
    price: 399,
    image: 'assets/p6.jpeg',
    category: 'Flower',
    inStock: true
  }
];

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
```

Then run:
```bash
node seedProducts.js
```

---

### Step 8: Test the Frontend

1. Open `client/index.html` in your browser
2. Or use a local server:
   ```bash
   # In the client folder, run any of these:
   python -m http.server 8000
   # OR
   npx serve
   # OR just open index.html in browser (for testing)
   ```
3. Try registering a new user at `register.html`
4. Try logging in at `login.html`
5. Browse products and add to cart

---

## 📋 Complete Checklist

- [ ] MongoDB Atlas account created
- [ ] Database connection string obtained
- [ ] JWT_SECRET generated
- [ ] Razorpay account created (optional)
- [ ] `.env` file created in `server` folder
- [ ] All dependencies installed (`npm install` in server folder)
- [ ] Server runs without errors
- [ ] Products seeded (optional)
- [ ] Frontend opens in browser
- [ ] Can register a user
- [ ] Can login
- [ ] Can add products to cart
- [ ] Cart syncs when logged in

---

## 🔧 Troubleshooting

### Error: "URI must include hostname, domain name, and tld"
- **Solution:** Check your MONGO_URI in `.env` file. Make sure it's the full connection string from MongoDB Atlas.

### Error: "MongoDB connection failed"
- **Solution:** 
  - Check your internet connection
  - Verify MongoDB Atlas cluster is running (not paused)
  - Check username/password in connection string
  - Make sure you added your IP to MongoDB Atlas whitelist (Network Access → Add IP Address → Add Current IP Address)

### Error: "JWT_SECRET is required"
- **Solution:** Add JWT_SECRET to your `.env` file

### Products not loading from backend
- **Solution:** 
  - Check if server is running on port 5000
  - Check browser console for errors
  - Make sure products are seeded in database
  - Frontend will fall back to hardcoded products if backend unavailable

### Authentication not working
- **Solution:**
  - Make sure server is running
  - Check browser console for errors
  - Verify `.env` file has JWT_SECRET
  - Try registering a new user first

---

## 📝 API Keys Summary

| Key | Where to Get | Required? |
|-----|-------------|-----------|
| **MongoDB URI** | MongoDB Atlas → Connect → Connection String | ✅ **YES** |
| **JWT_SECRET** | Generate random string (32+ chars) | ✅ **YES** |
| **RAZORPAY_KEY_ID** | Razorpay Dashboard → API Keys | ⚠️ Optional |
| **RAZORPAY_KEY_SECRET** | Razorpay Dashboard → API Keys | ⚠️ Optional |

---

## 🎯 Quick Test Commands

```bash
# 1. Check if .env file exists
cd server
ls -la .env  # or dir .env on Windows

# 2. Start server
npm run dev

# 3. Test API endpoint (in another terminal)
curl http://localhost:5000/api/products
```

---

## 💡 Pro Tips

1. **For today's delivery:** Focus on getting MongoDB working first. Razorpay can be added later.
2. **Use MongoDB Atlas:** It's free, cloud-based, and easier than local setup.
3. **Test keys work fine:** Razorpay test keys don't process real payments.
4. **Keep .env safe:** Never commit `.env` file to git (it should be in `.gitignore`).

---

## ✅ You're Done!

Once you see "Server running on port 5000" and "MongoDB Connected...", you're good to go! 🎉

Good luck with your delivery! 🚀
