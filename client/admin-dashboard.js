// This file will contain the admin dashboard and order management logic for the admin panel.
// It will provide dashboard metrics, order management, and customer management features.

// Admin Dashboard Logic: Fetch and display metrics and recent orders

document.addEventListener('DOMContentLoaded', () => {
  fetchDashboardMetrics();
  fetchRecentOrders();
});

async function fetchDashboardMetrics() {
  try {
    // Fetch all orders and users
    const [orders, users] = await Promise.all([
      apiRequest(getAPIUrl(API_CONFIG.endpoints.orders)),
      apiRequest(getAPIUrl('/auth/users')) // You may need to implement this endpoint
    ]);
    // Calculate metrics
    const totalRevenue = orders.reduce((sum, o) => sum + (o.totalPrice || 0), 0);
    const totalOrders = orders.length;
    const totalCustomers = users.length;
    // Update UI
    document.getElementById('dashboard-total-revenue').textContent = `₹${totalRevenue.toLocaleString()}`;
    document.getElementById('dashboard-total-orders').textContent = totalOrders;
    document.getElementById('dashboard-total-customers').textContent = totalCustomers;
  } catch (err) {
    // Fallback: show 0s
    document.getElementById('dashboard-total-revenue').textContent = '₹0';
    document.getElementById('dashboard-total-orders').textContent = '0';
    document.getElementById('dashboard-total-customers').textContent = '0';
  }
}

async function fetchRecentOrders() {
  try {
    const orders = await apiRequest(getAPIUrl(API_CONFIG.endpoints.orders));
    const sorted = orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const recent = sorted.slice(0, 5);
    const tbody = document.getElementById('recent-orders-list');
    tbody.innerHTML = '';
    recent.forEach(order => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${order._id}</td>
        <td>${order.user?.name || 'N/A'}</td>
        <td>₹${order.totalPrice}</td>
        <td><span class="status-${order.isDelivered ? 'delivered' : order.isPaid ? 'paid' : 'unpaid'}">${order.isDelivered ? 'Delivered' : order.isPaid ? 'Paid' : 'Unpaid'}</span></td>
        <td>${new Date(order.createdAt).toLocaleDateString()}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (err) {
    document.getElementById('recent-orders-list').innerHTML = '<tr><td colspan="5">No recent orders</td></tr>';
  }
}
