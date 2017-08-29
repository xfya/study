<template>
  <div class="play" v-show ="playList.length>0">
      <div class="normal-player" v-show="fullScreen">
             <div class="background">
                 <img src="" alt="">
                 <div @click="back">
                     123 <br>
                     123
                 </div>
             </div>
            <div class="top">

            </div>
      </div>
      <div class="min-plaer" v-show="!fullScreen">
            <div class="left">
                
            </div>
      </div> 
  </div>

</template>


<script>
import {mapGetters,mapMutations} from 'vuex';
    export default{
        computed:{
            ...mapGetters([
                'fullScreen',
                'playList',
                'currentIndex',
                'currentSong'
            ]),
          
        }, 
        created(){
            console.log(this.currentIndex)
            console.log(this.playList)
            // console.log(this.currentSong)
            
        },
        methods:{
              ...mapMutations([{
                   setFullScreen:'SET_FULL_SCREEN'
              }  
            ]),
               back(){
                  console.log(this.setFullScreen)
              }
        }
    }
</script>



<style >
.min-plaer{
    height: 50px;
    width: 100%;
    background-color: #000000;
    position: fixed;
    bottom:0;
}
.normal-player{
    width: 100%;
    height: 100%;
     background-color: #000000;
    position: fixed;
    top:0;
    z-index:10001
}
</style>
