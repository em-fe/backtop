import axios from 'axios';
import CONSTANT from '../contant';

/**
 * Create Axios
 */
export const http = axios.create({
  timeout: 60000,
});


/**
 * 处理请求时的姿势
 */
http.interceptors.request.use((config) => {
  config.headers.common[CONSTANT.EVENT_TOKE] = '';
  return config;
}, () => {
});

export default function install(Vue) {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return http;
      },
    },
  });
}
