import { API_BASE_URL } from '../config/api';

// Content Service
export const contentService = {
  // Get content for a specific class and subject
  getContent: async (classNumber, subject) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/class/${classNumber}/${subject}/content`);
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  // Get quiz for a specific class and subject
 /* getQuiz: async (classNumber, subject) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/class/${classNumber}/${subject}/quiz`);
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  }*/ ,
getQuiz: async (classNumber, subject) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `${API_BASE_URL}/api/class/${classNumber}/${subject}/quiz`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          credentials: "include"  // ✅ IMPORTANT
        }
      }
    );

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    }

    return { success: false, error: data.error };

  } catch (error) {
    return { success: false, error: 'Unable to connect to server' };
  }
}
  // Get all videos
  getVideos: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/videos`);
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  // Get all quizzes
  getQuizzes: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/quizzes`);
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  // Get all LMS content
  getLMSContent: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/lms-content`);
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  // Get subjects for a specific class
  getSubjects: async (classNumber) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/class/${classNumber}/subjects`);
      const data = await response.json();
      if (response.ok) {
        return { success: true, data };
      }
      return { success: false, error: data.error };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },

  // Get image for a specific class and subject
  getImage: async (className, subject) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/image/class_${className}/${subject}`);
      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        return { success: true, data: imageUrl };
      }
      return { success: false, error: 'Image not found' };
    } catch (error) {
      return { success: false, error: 'Unable to connect to server' };
    }
  },
};

export default contentService;
