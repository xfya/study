<template>

<div>
   <my-header :title = "msg1"></my-header>
  
         <router-view></router-view>
   <!--底部start-->
   <div class = "fotter">
      <ul class="mui-table-view mui-grid-view mui-grid-12">
  
<router-link class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" :to="{name:'home'}">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link  class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" :to="{name:'member'}">
                <span class="mui-icon mui-icon-members"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link  class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" :to="{name:'shopcart'}">
                <span class="mui-icon mui-icon-shopcart"><span class="mui-badge">1</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link  class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" :to="{name:'search'}">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">查找</span>
            </router-link>





      </ul>
   </div>


</div>

</template>

<script>
    import {
        Toast
    } from 'mint-ui';
    import {
        Swipe,
        SwipeItem
    } from 'mint-ui';
    import MyHeader from './header/header.vue'
    import Home from './home/home.vue'

    export default {
        name: 'app',
        data() {
            return {
                msg1: "传智26期 信息表"
            }
        },
        methods: {
            show() {
                Toast({
                    message: 'tishi',
                    position: 'bottom',
                    duration: 5000
                });
            }
        },
        components: {
            MyHeader,
            Home
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    body {
        background: #f5f5f5;
    }
    
    .fotter {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>