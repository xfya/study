import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUi from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})