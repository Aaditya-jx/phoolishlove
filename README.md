# 🌸 Phoolishh Loveee - E-commerce Platform

A beautiful e-commerce platform for handmade pipe cleaner art with full authentication and payment integration.

## 🚀 Quick Start

**For complete setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)**

### Quick Setup (5 minutes):

1. **MongoDB Setup** (2 min)
   - Sign up at https://www.mongodb.com/cloud/atlas (FREE)
   - Create a cluster and get connection string
   - See SETUP_GUIDE.md for detailed steps

2. **Create .env file** (1 min)
   ```bash
   cd server
   cp .env.example .env
   # Edit .env and add your MongoDB URI and JWT_SECRET
   ```

3. **Install & Run** (2 min)
   ```bash
   cd server
   npm install
   npm run dev
   ```

4. **Seed Products** (optional)
   ```bash
   node seedProducts.js
   ```

5. **Open Frontend**
   - Open `client/index.html` in your browser
   - Or use a local server: `python -m http.server 8000`

## 📁 Project Structure

```
phoolishlove/
├── client/              # Frontend files
│   ├── index.html      # Main page
│   ├── cart.html       # Cart page
│   ├── login.html      # Login page
│   ├── register.html   # Registration page
│   ├── styles.css      # Styles
│   ├── script.js       # Main JavaScript
│   ├── cart.js         # Cart functionality
│   ├── auth.js         # Authentication
│   └── api-config.js   # API configuration
│
├── server/             # Backend files
│   ├── server.js       # Main server file
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── controllers/    # Business logic
│   ├── middleware/     # Auth middleware
│   ├── config/         # Database config
│   └── seedProducts.js # Seed script
│
└── SETUP_GUIDE.md      # Complete setup guide
```

## 🔑 Required API Keys

| Key | Where to Get | Required? |
|-----|-------------|-----------|
| **MongoDB URI** | MongoDB Atlas → Connect → Connection String | ✅ **YES** |
| **JWT_SECRET** | Generate random string (32+ chars) | ✅ **YES** |
| **RAZORPAY_KEY_ID** | Razorpay Dashboard → API Keys | ⚠️ Optional |
| **RAZORPAY_KEY_SECRET** | Razorpay Dashboard → API Keys | ⚠️ Optional |

## ✨ Features

- ✅ User Authentication (Register/Login)
- ✅ Product Catalog
- ✅ Shopping Cart
- ✅ Payment Integration (Razorpay)
- ✅ Order Management
- ✅ Responsive Design
- ✅ Backend API Integration

## 📝 API Endpoints

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/cart` - Get user cart (Auth required)
- `POST /api/cart` - Add to cart (Auth required)
- `DELETE /api/cart/:productId` - Remove from cart (Auth required)
- `POST /api/orders` - Create order (Auth required)

## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript
- LocalStorage for cart (syncs to backend when authenticated)

**Backend:**
- Node.js, Express
- MongoDB, Mongoose
- JWT Authentication
- Razorpay Payment Gateway

## 📖 Documentation

- **Complete Setup Guide**: [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Backend README**: [server/README.md](./server/README.md)

## 🐛 Troubleshooting

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for common issues and solutions.

## 📄 License

This project is for educational purposes.

---

Made with 💖 by Phoolishh Loveee
