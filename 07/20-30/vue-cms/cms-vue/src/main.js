import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
Vue.prototype.$ajax = axios;


import MintUi from 'mint-ui'
Vue.use(MintUi)

import './static/vendor/mui-master/dist/css/mui.css'
import 'mint-ui/lib/style.css'
import './static/global.css'
// 全局组件专区
import navBar from './components/common/nav/navbar.vue'
Vue.component("navBar", navBar)
import comment from './components/comment.vue'
Vue.component("comment", comment)
    // 全局过滤器
import Moment from 'moment'
Moment.locale('zh-cn')
Vue.filter('formatDate', function(val) {
    return Moment(val).format('MMMM-YY -hh');
})

Vue.config.productionTip = false


// import VuePreview from 'vue-preview'
// Vue.use(VuePreview)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})