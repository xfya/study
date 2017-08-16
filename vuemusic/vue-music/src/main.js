// 编译es6 的代码
import "babel-polyfill"

import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端点击事件库
import fastclick from 'fastclick'
fastclick.attach(document.body);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})