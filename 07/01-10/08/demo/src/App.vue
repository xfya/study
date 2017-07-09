<template>

<div>
   <my-header :title = "msg1"></my-header>
   <home></home>


</div>

</template>

<script>
import { Toast } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import  MyHeader  from './header/header.vue'
import  Home  from './home/home.vue'

export default {
  name: 'app',
  data(){
    return {
      msg1:"传智26期 信息表"
    }
  },
  methods:{
    show(){
       Toast({
        message: 'tishi',
        position: 'bottom',
        duration: 5000
      });
    }
  },
  components:{
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
body{
  background:#f5f5f5;
}
</style>
