import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewsList from '@/components/news/newslist.vue'
import newsDetail from '@/components/news/newsdetail.vue'
import Member from '@/components/member.vue'
import shopCart from '@/components/shopcart.vue'
import search from '@/components/search.vue'
import photeShare from '@/components/photeshare.vue'
import phottoDetail from '@/components/phottodetail.vue'
import goodsList from '@/components/goods/goodslist.vue'
import goodsDetail from '@/components/goods/goodsdetail.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'mui-active',
    routes: [{
            path: '/',
            redirect: { name: 'Home' }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/news/list',
            name: 'newsList',
            component: NewsList
        },
        {
            path: '/news/detail',
            name: 'newsDetail',
            component: newsDetail
        },
        {
            path: '/member',
            name: 'member',
            component: Member
        },
        {
            path: '/shopcart',
            name: 'shopcart',
            component: shopCart
        },
        {
            path: '/search',
            name: 'search',
            component: search
        },
        {
            path: '/photo/share',
            name: 'photeShare',
            component: photeShare
        },
        {
            path: '/photo/detail/:id',
            name: 'photto.detail',
            component: phottoDetail
        },
        {
            path: '/goods/list',
            name: 'goods.list',
            component: goodsList
        },
        {
            path: '/goods/detail/:gid',
            name: 'goods.detail',
            component: goodsDetail
        },

    ]
})