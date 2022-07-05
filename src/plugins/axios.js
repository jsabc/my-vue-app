import axios from 'axios';

export default {
  // eslint-disable-next-line
  install(Vue/*, options*/) {

    const $axios = axios.create({
      baseURL: 'https://ftx.com/api',
      headers: {
        'FTX-KEY': '-3wt3ItID0yXX33dvigZRsib8PV9kLr_JzlJHUsl',
        'FTX-SIGN': 'uEUxwsGT9HFVXdYsSKeRD5TnJTEsdTwUQCxrzUyF',
        'FTX-TS': new Date().getTime(),
      },
    });

    /* eslint-disable */
    // 添加请求拦截
    $axios.interceptors.request.use((config) => {

      // 在请求发送之前，处理一些事情。
      return config;
    }, (error) => {

      // 请求错误，处理一些事情。
      return Promise.reject(error);
    });

    // 添加响应拦截
    $axios.interceptors.response.use((response) => {

      // 任何位于 2xx 范围内的状态码都会导致此函数触发对响应数据执行某些操作。
      return response;
    }, (error) => {

      // 任何超出 2xx 范围的状态码都会导致此函数触发对响应错误执行某些操作。
      return Promise.reject(error);
    });
    /* eslint-enable */

    Object.defineProperty(Vue.prototype, '$http', {
      value: $axios,
    });
  },
};
