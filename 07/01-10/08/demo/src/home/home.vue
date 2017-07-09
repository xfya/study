<template>
<div class = "banner">

  <mt-swipe :auto="4000">
    <mt-swipe-item v-for = "(item ,index) in lunbo" :key = "index">
        <a href="item.url">
            <img :src="item.img" alt="">
        </a>
    </mt-swipe-item>
    
    </mt-swipe>
</div>
</template>

<script>


export default {
    data(){
        return {
           lunbo:[] 
        }
    },
    created(){
       
        this.$ajax.get("getlunbo")
            .then((res)=>{
                console.log(res)
                this.lunbo = res.data.message
            })
    }
  
}
</script>

<style scoped>
.banner{
    height:150px;
}
.banner{
    
}
</style>