import axios from 'axios';
const service = axios.create({
  baseURL: 'http://download_app.bdhuoke.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'token': sessionStorage.getItem('token'),
  },
});
service.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) {
      config.headers['token'] = sessionStorage.getItem('token');
    }
    return config;
  }
)
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.resolve(error.response);
  },
);
export default service;
