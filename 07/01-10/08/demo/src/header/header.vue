<template>
<div class = "clearfix header">
   <mt-header fixed :title="title"></mt-header>
</div>
</template>

<script>
import { Header } from 'mint-ui';

export default {
    data(){
        return {
            
        }
    },
    props:['title']
}
</script>

<style>
clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
.clearfix {
  zoom: 1;
}
.header{
    height:40px;
}
</style>