<template>
    <div>
         <h3> <span >span</span>   图文分享</h3>
    </div>
</template>
<script>
export default {
  data(){
      return{
            pics: [], //缩略图
            info: {}, //详情信息
            id: '', //图文id
      }
  },
  created(){
    // console.log(this.$route.params.id)
  }
  
}
</script>
<style>

</style>


