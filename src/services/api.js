// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://94c7-203-101-164-179.ngrok-free.app/api/', // Replace with your API URL
});

export default api;
