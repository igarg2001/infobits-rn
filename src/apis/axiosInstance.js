import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://library.bits-pilani.ac.in/',
});

export default instance;
