// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import Home from './home/home.vue'
import News from './news/news.vue'
import './static/font_4fk8azsh1ebtke29/iconfont1.css'
import 'mint-ui/lib/style.css'
import { Actionsheet, Swipe, SwipeItem } from 'mint-ui';



import axios from 'axios';

axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
Vue.prototype.$ajax = axios;

import './static/mui-master/dist/css/mui.css'
Vue.use(MintUI)
Vue.use(VueRouter)

Vue.config.productionTip = false



let router = new VueRouter()
router.addRoutes([
        { name: "home", path: "/", component: Home },
        { name: "news.list", path: "/news/list", component: News },
    ])
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})