import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://localhost:4000`
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if(accessToken) {
    config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}`}
  }
  return config;
})

export default axiosInstance;
