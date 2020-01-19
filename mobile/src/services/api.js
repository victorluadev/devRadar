import axios from 'axios';

// Utilizar o ip da própria maquina caso esteja emulando a aplicação em um dispositivo fisico
const api = axios.create({
  baseURL : 'http://192.168.0.15:3333'
});

export default api;