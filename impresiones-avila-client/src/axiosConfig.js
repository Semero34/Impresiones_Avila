// src/axiosConfig.js

import axios from 'axios';

// Configura un interceptor para añadir el token a cada solicitud
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axios;
