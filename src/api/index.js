import axios from 'axios';

const $host = axios.create({
  baseURL: `http://${import.meta.env.VITE_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  }
});

export { $host };