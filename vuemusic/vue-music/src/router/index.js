import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Recomend from '@/components/recomend/recomend.vue'
import Singer from '@/components/singer/singer.vue'
import Search from '@/components/search/search.vue'
import Rank from '@/components/rank/rank.vue'
import SingerDetail from '@/components/singer-detail/singer-detail.vue'
import disc from '@/components/disc/disc.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',

            redirect: Recomend
        },
        {
            path: '/recomend',

            component: Recomend,
            // children: [{
            //     path: ':id',
            //     component: disc
            // }]
        },
        {
            path: '/recomend/:id',

            component: disc,

        },
        {
            path: '/singer',

            component: Singer,

        },

        {
            path: '/singer/:id',

            component: SingerDetail
        },
        {
            path: '/search',

            component: Search
        },

        {
            path: '/rank',

            component: Rank
        },
    ]
})