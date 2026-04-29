import { API_BASE_URL } from '../config/api';

// Admin Service
export const adminService = {
  // Admin Authentication
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('adminData', JSON.stringify(data.admin));
        return { success: true, data: data.admin };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  register: async (username, email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, email, password }),
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

  logout: async () => {
    try {
      await fetch(`${API_BASE_URL}/api/admin/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      localStorage.removeItem('adminData');
      return { success: true };
    } catch (error) {
      localStorage.removeItem('adminData');
      return { success: true };
    }
  },

  // Video Management
  createVideo: async (videoData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/videos`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(videoData),
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

  getAllVideos: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/videos`, {
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  deleteVideo: async (videoId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/videos/${videoId}`, {
        method: 'DELETE',
        credentials: 'include',
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

  // Quiz Management
  createQuiz: async (quizData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/quizzes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(quizData),
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

  getAllQuizzes: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/quizzes`, {
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  deleteQuiz: async (quizId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/quizzes/${quizId}`, {
        method: 'DELETE',
        credentials: 'include',
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

  // Test Management
  createTest: async (testData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/tests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(testData),
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

  getAllTests: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/tests`, {
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  deleteTest: async (testId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/tests/${testId}`, {
        method: 'DELETE',
        credentials: 'include',
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

  // LMS Content Management
  createLMSContent: async (contentData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/lms-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(contentData),
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

  getAllLMSContent: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/lms-content`, {
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  deleteLMSContent: async (contentId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/lms-content/${contentId}`, {
        method: 'DELETE',
        credentials: 'include',
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

  // Helper methods
  getCurrentAdmin: () => {
    const adminData = localStorage.getItem('adminData');
    return adminData ? JSON.parse(adminData) : null;
  },

  isAuthenticated: () => {
    return localStorage.getItem('adminData') !== null;
  },
};

export default adminService;
