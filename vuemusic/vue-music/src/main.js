// 编译es6 的代码
import "babel-polyfill"

import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端点击事件库
import fastclick from 'fastclick'
fastclick.attach(document.body);
Vue.config.productionTip = false

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: require("common/img/1.gif")
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})