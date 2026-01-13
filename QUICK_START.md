# ⚡ QUICK START - Deliver Today!

## 🎯 5-Minute Setup (Do This NOW!)

### Step 1: MongoDB (2 minutes) ⚡

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up (FREE)
3. Click "Build a Database" → "FREE" (M0)
4. Choose region → Create Cluster (wait 1-2 min)
5. Click "Connect" → **Select "Connect your application"** (NOT Compass, VS Code, or Shell)
6. Choose: Node.js driver, Version 5.5+ (default is fine)
7. Copy the connection string
8. Replace `<username>` and `<password>` with your database credentials
9. Add database name: Insert `/phoolishlove` before `?retryWrites`

**Example:**
```
mongodb+srv://myuser:mypass123@cluster0.abc123.mongodb.net/phoolishlove?retryWrites=true&w=majority
```

### Step 2: Create .env File (1 minute) ⚡

1. Go to `server` folder
2. Create file named `.env` (no extension!)
3. Copy this:

```env
MONGO_URI=YOUR_CONNECTION_STRING_HERE
JWT_SECRET=phoolishlove_secret_2026_random_string_12345
RAZORPAY_KEY_ID=rzp_test_skip_for_now
RAZORPAY_KEY_SECRET=skip_for_now
PORT=5000
```

**Replace:**
- `YOUR_CONNECTION_STRING_HERE` with your MongoDB URI from Step 1
- `phoolishlove_secret_2026_random_string_12345` with any random string (32+ characters)

### Step 3: Install & Run (2 minutes) ⚡

```bash
cd server
npm install
npm run dev
```

**You should see:**
```
Server running on port 5000
MongoDB Connected...
```

✅ **SUCCESS!** If you see both messages, you're done!

### Step 4: Seed Products (30 seconds) ⚡

```bash
# In the server folder, run:
node seedProducts.js
```

### Step 5: Open Frontend (10 seconds) ⚡

1. Open `client/index.html` in your browser
2. Done! 🎉

---

## 🔥 Common Errors & Fixes

### ❌ "URI must include hostname"
**Fix:** Check `.env` file - make sure MONGO_URI is correct (no extra spaces, no quotes)

### ❌ "MongoDB connection failed"
**Fix:** 
- Go to MongoDB Atlas → Network Access → Add IP Address → Add Current IP Address
- Check username/password in connection string

### ❌ "JWT_SECRET is required"
**Fix:** Add `JWT_SECRET=any_random_string_here` to `.env` file

### ❌ "Failed to fetch" on Login
**Fix:** The backend server is likely not running. See the `FIX_LOGIN_ERROR.md` file in the root directory for a step-by-step guide to fix this.

---

## ✅ Checklist Before Delivery

- [ ] Server runs (`npm run dev` shows "MongoDB Connected...")
- [ ] Can open `client/index.html` in browser
- [ ] Can register a user at `register.html`
- [ ] Can login at `login.html`
- [ ] Products show on homepage
- [ ] Can add to cart
- [ ] Cart works

---

## 🎁 Optional: Razorpay (Skip for Now)

You can add Razorpay later. The app works without it!

1. Go to: https://razorpay.com/
2. Sign up (FREE)
3. Dashboard → Settings → API Keys
4. Copy Key ID and Secret
5. Add to `.env` file

---

## 📞 Need Help?

See `SETUP_GUIDE.md` for detailed instructions.

**Good luck! 🚀**
