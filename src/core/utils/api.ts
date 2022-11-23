import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://api.weatherstack.com/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });