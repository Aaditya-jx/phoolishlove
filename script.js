document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  let cart = [];
  const cartCount = document.getElementById('cart-count');
  const grid = document.querySelector('.grid');

  // --- Event Listeners ---

  // Add to cart
  if (grid) {
    grid.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        const card = e.target.closest('.card');
        const id = card.dataset.id;
        const name = card.dataset.name;
        const price = parseInt(card.dataset.price, 10);
        const image = card.dataset.image;
        addToCart({ id, name, price, image });
      }
    });
  }

  // --- Cart Functions ---

  function addToCart(product) {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalCount;
    }
  }

  // --- Initialize ---
  
  function init() {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          cart = parsedCart;
        }
      }
    } catch (error) {
      console.error('Failed to parse cart from localStorage', error);
      localStorage.removeItem('cart'); // Clear corrupted data
    }
    updateCartCount();
  }

  init();
});