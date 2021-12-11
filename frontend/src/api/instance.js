import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://192.168.0.218:5000/api/',
  headers:
    {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8'
    }
});
