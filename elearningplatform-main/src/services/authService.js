import { API_BASE_URL } from '../config/api';

// User Authentication Service
export const authService = {
  // User Login
 /* login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(data.user));
        return { success: true, data: data.user };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  }*/ login: async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include", 
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // ✅ USER STORE
      localStorage.setItem('userData', JSON.stringify(data.user));

      // ✅ TOKEN STORE (IMPORTANT)
      localStorage.setItem('token', data.token);

      return { success: true, data: data.user };
    }

    return { success: false, error: data.error };

  } catch (error) {
    return { success: false, error: 'Unable to connect to server' };
  }
},

  // User Registration
  register: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (response.ok) {
        return { success: true, message: data.message };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  // Get User by ID
  getUserById: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/user/${userId}`);
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('userData');
    return { success: true };
  },

  // Get Current User
  getCurrentUser: () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  },

  // Check if user is logged in
  isAuthenticated: () => {
    return localStorage.getItem('userData') !== null;
  },
};

export default authService;
