# Project Summary: Phoolishh Loveee

Here is a one-page summary of the "Phoolishh Loveee" project, perfect for explaining it to a friend.

---

### **1. What is this project?**

At its heart, this is a complete e-commerce website built for a real small business called **"Phoolishh Loveee"** that sells handmade pipe cleaner art. It's a full-stack application, meaning it has both a frontend (what you see in the browser) and a backend (the "engine" that runs on a server).

The goal is to provide a beautiful and functional online store where customers can browse products, add them to a cart, and make a purchase.

### **2. What are the main features?**

A user visiting the site can:
- **View Products:** See all the handmade art pieces in a clean, grid-based catalog.
- **User Accounts:** Register for a new account or log in with an existing one.
- **Shopping Cart:** Add items to a cart. The cart is saved in the browser for guest users and synced to their account if they log in.
- **Checkout:** Go through a payment process to buy the items in their cart.
- **Responsive Design:** Use the website on both desktop and mobile devices.

### **3. How is it built? (The Tech Stack)**

The project uses a standard and popular set of web technologies:

- **Frontend (The Storefront):**
  - **HTML, CSS, and vanilla JavaScript:** It's built with the fundamental building blocks of the web, without relying on a heavy framework like React or Angular. This keeps it fast and simple.
  - The cart is managed locally in the browser's `localStorage` and synced with the backend for logged-in users.

- **Backend (The "Back Office"):**
  - **Node.js & Express:** The backend is a JavaScript-based API built with Node.js and the Express framework. It handles all the business logic.
  - **MongoDB:** A NoSQL database used to store all the data, including users, products, and orders. `Mongoose` is used to model the data in the code.
  - **JWT (JSON Web Tokens):** Used for handling user authentication securely. When a user logs in, they get a token that verifies who they are for future requests.
  - **Razorpay Integration:** Includes the setup for processing real payments through the Razorpay payment gateway.

### **4. How does it all work together? (Architecture)**

It's a classic **Client-Server architecture**:

1.  **The Server (`server/` folder):** You run this first. It connects to the MongoDB database and starts listening for API requests. It's the single source of truth for all data.

2.  **The Client (`client/` folder):** This is just a set of files you open in your web browser.

3.  **Communication:** When you open `index.html`, the JavaScript on the page makes **API calls** to the backend server. For example, it sends a request to `/api/products` to get the list of all items to display. When you add an item to your cart, it sends another request to `/api/cart`.

This separation is great because you could easily create a mobile app that uses the exact same backend API.

### **5. How do you run it?**

1.  **Start the Backend:** Navigate into the `server` directory, install dependencies (`npm install`), and start the server (`npm run dev`). This requires a `.env` file with a connection string to a MongoDB database.
2.  **Start the Frontend:** Simply open the `client/index.html` file in a web browser. The site is designed to gracefully handle cases where the backend isn't running by showing hardcoded product data.
