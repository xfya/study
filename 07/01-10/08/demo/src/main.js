// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Actionsheet, Swipe, SwipeItem } from 'mint-ui';

import axios from 'axios';

axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
Vue.prototype.$ajax = axios;


Vue.use(MintUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})