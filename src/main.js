import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import store from "./vuex/store"
import "element-ui/lib/theme-chalk/index.css";
import "babel-polyfill";
import charts from 'echarts'


// 重制样式
import './../static/css/common/reset.css';
import "./../static/css/common/common.css";


// loading效果 拦截器
import { Loading, MessageBox } from 'element-ui'

// 超时时间
axios.defaults.timeout = 10000

// http请求拦截器
var loadinginstace
axios.interceptors.request.use(config => {
loadinginstace = Loading.service({ fullscreen: true });
return config
}, error => {
    MessageBox({
      title:'提示',
      message:'加载超时',
      callback: action => {
        loadinginstace.close()
       }
      })
    return Promise.reject(error)
})

 // http响应拦截器
 axios.interceptors.response.use(data => {// 响应成功关闭loading
    loadinginstace.close();
    return data
  }, error => {
    loadinginstace.close();
    return Promise.reject(error)
  })
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
loadinginstace.close()
  return data
}, error => {
  loadinginstace.close()
  return Promise.reject(error)
})
// 公共组件
import "./common/components/index.js";

// 引用全局过滤器
import "./common/filters";
import './common/directives'

// 公共样式
import './../static/css/public.css'

// 引用饿了mentUi
Vue.use(ElementUI);

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = charts

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


