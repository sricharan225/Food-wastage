import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Set up axios instance for API requests
const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example of login request with error handling
export const login = async (email, password) => {
  try {
    const response = await apiService.post('/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};
