import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://ghibliapi.herokuapp.com',
  });