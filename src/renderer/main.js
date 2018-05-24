import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
import {ipcRenderer} from "electron";
Vue.http = Vue.prototype.$http = axios.create({
  baseURL:"http://music.softeem.xin"
});
Vue.config.productionTip = false

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";


//使用图片延迟加载
import imgLoading from "./assets/loading.gif";
import imgErr from "./assets/loadingErr.svg";
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad, {
    loading: imgLoading, //正在加载的图片
    error: imgErr //图片加载失败以后
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')


document.onkeydown=(event)=>{
  //监听事件，打开调试控制台
  if(event.ctrlKey&&event.altKey&&event.keyCode===121){
    ipcRenderer.send("open-devtools");
  }
};