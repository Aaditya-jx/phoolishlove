// Authentication Functions

// Check if user is authenticated
function isAuthenticated() {
  return localStorage.getItem('authToken') !== null;
}

// Get current user from localStorage
function getCurrentUser() {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (e) {
      return null;
    }
  }
  return null;
}

// Register user
async function registerUser(name, email, password) {
  try {
    const response = await apiRequest(getAPIUrl(API_CONFIG.endpoints.auth.register), {
      method: 'POST',
      body: {
        name,
        email,
        password
      }
    });
    
    // Store token and user data
    localStorage.setItem('authToken', response.token);
    localStorage.setItem('user', JSON.stringify({
      _id: response._id,
      name: response.name,
      email: response.email,
      isAdmin: response.isAdmin
    }));
    
    return { success: true, user: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Login user
async function loginUser(email, password) {
  try {
    const response = await apiRequest(getAPIUrl(API_CONFIG.endpoints.auth.login), {
      method: 'POST',
      body: {
        email,
        password
      }
    });
    
    // Store token and user data
    localStorage.setItem('authToken', response.token);
    localStorage.setItem('user', JSON.stringify({
      _id: response._id,
      name: response.name,
      email: response.email,
      isAdmin: response.isAdmin
    }));
    
    return { success: true, user: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Logout user
function logoutUser() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}
