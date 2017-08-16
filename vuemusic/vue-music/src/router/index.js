import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Recomend from '@/components/recomend/recomend.vue'
import Singer from '@/components/singer/singer.vue'
import Search from '@/components/search/search.vue'
import Rank from '@/components/rank/rank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      
      redirect: Recomend
    },
     {
      path: '/recomend',
   
      component: Recomend
    },
    {
      path: '/singer',
   
      component: Singer
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
