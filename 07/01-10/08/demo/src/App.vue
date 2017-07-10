<template>

<div>
   <my-header :title = "msg1"></my-header>
   <home></home>

   <!--底部start-->
   <div class = "fotter">
      <ul class="mui-table-view mui-grid-view mui-grid-12">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge"></span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
      </ul>
   </div>

     <router-view></router-view>
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