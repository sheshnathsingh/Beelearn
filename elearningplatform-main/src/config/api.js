// API Configuration
// For production, set VITE_API_BASE_URL to your backend URL.
// Local development still falls back to http://localhost:5000.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://personalized-learning-1.onrender.com/";

// API Endpoints
export const API_ENDPOINTS = {
  // User Authentication
  LOGIN: `${API_BASE_URL}/api/login`,
  REGISTER: `${API_BASE_URL}/api/register`,
  GET_USER: (id) => `${API_BASE_URL}/api/user/${id}`,

  // Admin Authentication
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login`,
  ADMIN_REGISTER: `${API_BASE_URL}/api/admin/register`,
  ADMIN_LOGOUT: `${API_BASE_URL}/api/admin/logout`,

  // Content
  GET_CONTENT: (classNum, subject) => `${API_BASE_URL}/api/class/${classNum}/${subject}/content`,
  GET_QUIZ: (classNum, subject) => `${API_BASE_URL}/api/class/${classNum}/${subject}/quiz`,
  GET_VIDEOS: `${API_BASE_URL}/api/videos`,
  GET_QUIZZES: `${API_BASE_URL}/api/quizzes`,
  GET_LMS_CONTENT: `${API_BASE_URL}/api/lms-content`,
  GET_SUBJECTS: (classNum) => `${API_BASE_URL}/api/class/${classNum}/subjects`,

  // Admin Content Management
  ADMIN_VIDEOS: `${API_BASE_URL}/api/admin/videos`,
  ADMIN_QUIZZES: `${API_BASE_URL}/api/admin/quizzes`,
  ADMIN_TESTS: `${API_BASE_URL}/api/admin/tests`,
  ADMIN_LMS_CONTENT: `${API_BASE_URL}/api/admin/lms-content`,
};

export default API_BASE_URL;
