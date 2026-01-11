document.addEventListener('DOMContentLoaded', () => {
  let cart = [];
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Payment elements
  const paymentSection = document.querySelector('.payment-section');
  const paymentOptionBtns = document.querySelectorAll('.payment-option-btn');
  const paymentForms = document.querySelectorAll('.payment-form');

  // Progress bar elements
  const progressSteps = document.querySelectorAll('.progress-step');

  // Modal elements
  const confirmationModal = document.getElementById('confirmation-modal');
  const continueShoppingBtn = document.getElementById('continue-shopping-btn');

  // --- Cart Functions ---

  function loadCart() {
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
      localStorage.removeItem('cart');
    }
    updateCart();
  }

  function removeFromCart(id) {
    const productIndex = cart.findIndex(item => item.id === id);
    if (productIndex > -1) {
      cart.splice(productIndex, 1);
    }
    updateCart();
  }
  
  function clearCart() {
    cart = [];
    updateCart();
  }

  function updateCart() {
    renderCartItems();
    renderCartSummary();
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function renderCartItems() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
      cartItems.innerHTML = '<div class="empty-cart-message">Your cart is empty. <a href="index.html#products">Continue Shopping</a></div>';
      if (paymentSection) {
        paymentSection.classList.add('hidden');
      }
      updateProgressBar(1);
      return;
    }
    
    if (paymentSection) {
      paymentSection.classList.remove('hidden');
    }
    updateProgressBar(2);

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    const tbody = table.querySelector('tbody');
    cart.forEach(item => {
      const tr = document.createElement('tr');
      tr.classList.add('cart-item-row');
      tr.innerHTML = `
        <td class="cart-item-prod" data-label="Product">
            <img src="${item.image}" alt="${item.name}" />
            <span>${item.name}</span>
        </td>
        <td data-label="Price">₹${item.price}</td>
        <td data-label="Quantity">${item.quantity}</td>
        <td data-label="Total">₹${item.price * item.quantity}</td>
        <td data-label="Remove"><button class="remove-from-cart" data-id="${item.id}">&times;</button></td>
      `;
      tbody.appendChild(tr);
    });
    cartItems.appendChild(table);
  }

  function renderCartSummary() {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotal.textContent = `₹${total.toFixed(2)}`;
    if (cartCount) {
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    }
  }

  // --- Progress Bar Functions ---
  function updateProgressBar(currentStep) {
    progressSteps.forEach(step => {
      const stepNumber = parseInt(step.dataset.step, 10);
      if (stepNumber === currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }

  // --- Payment Functions ---
  
  function handlePaymentSwitch(e) {
    const selectedPayment = e.target.dataset.payment;
    
    paymentOptionBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    paymentForms.forEach(form => {
        if (form.id === `${selectedPayment}-payment-form`) {
            form.classList.remove('hidden');
        } else {
            form.classList.add('hidden');
        }
    });
  }
  
  function handlePaymentSubmit(e) {
      e.preventDefault();
      confirmationModal.classList.remove('hidden');
      updateProgressBar(3);
      clearCart();
  }

  // --- Event Listeners ---
  cartItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart')) {
      removeFromCart(e.target.dataset.id);
    }
  });

  paymentOptionBtns.forEach(btn => btn.addEventListener('click', handlePaymentSwitch));

  paymentForms.forEach(form => form.addEventListener('submit', handlePaymentSubmit));

  continueShoppingBtn.addEventListener('click', () => {
    confirmationModal.classList.add('hidden');
    window.location.href = 'index.html';
  });

  // --- Initialize ---
  loadCart();
});
