import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swarfarm.com/api/v2'
});

export default api;