import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5050/',
  timeout: 5000,
});
