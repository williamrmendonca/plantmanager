import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/williamrmendonca/plantmanager'
  //baseURL: 'http://192.168.15.17:3333'
});

export default api;