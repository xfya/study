<template>
  <div class="play" v-show ="playList.length>0">
      播放器 
  </div>

</template>


<script>
import {mapGetters} from 'vuex';
    export default{
        computed:{
            ...mapGetters([
                'fullScreen',
                'playList'
            ])
        },
        created(){
            console.log(this.playList)
            
        }
    }
</script>



<style>
.play{
    height: 50px;
    width: 100%;
    background-color: #000000;
    position: fixed;
    bottom:0;
}
</style>
