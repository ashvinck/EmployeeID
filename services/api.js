import axios from 'axios';

// Base URL for fetching Data
const BASE_URL = 'https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d';

// Initialize axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Function to fetch data from API
export const getEmployeeData = async () => {
  try {
    const response = await api.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw new Error('Error fetching data');
  }
};

export default api;
