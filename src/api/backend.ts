import axios from 'axios';

const api = axios.create({
  baseURL: process.env['REACT_APP_API']!,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('ROCP_token')!);
    // eslint-disable-next-line no-param-reassign
    if (token) config.headers['X-token'] = token;

    return config;
  },
  (error) => Promise.reject(error),
);

export const getMe = async () => api.get('/users/me');
