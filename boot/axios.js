import { boot } from 'quasar/wrappers';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://authentication-dev.bmgames.net/v1/auth/',
});

export default boot(({ Vue }) => {
  Vue.prototype.$axios = axiosInstance;
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token'));
    config.headers.common.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// authApi.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       this.$store.commit('logout')
//     }
//     return Promise.reject(error)
//   }
// )

export { axiosInstance };
