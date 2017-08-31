<template>
  <div class="play" v-show ="playlist.length>0">
      <div class="normal-player" v-show="fullScreen">
             <div class="background">
                 <img :src="currentSong.img" alt="">
                 <div @click="back">
                     123 <br>
                     123
                 </div>
             </div>
            <div class="top">
                <h1 class="name" v-html="currentSong.name"></h1>
                <h1 class="singer" v-html="currentSong.singer"></h1>
                    {{currentSong}}
            </div>
      </div>
      <div class="min-plaer" v-show="!fullScreen">
            <div class="left">
                 <img :src="currentSong.img" alt="">
                   <h1 class="name" v-html="currentSong.name"></h1>
                <h1 class="singer" v-html="currentSong.singer"></h1>
           
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
                'playlist',
                'currentIndex',
                'currentSong'
            ]),
          
        }, 
        created(){
            // console.log(this.currentIndex,'currentIndex')
            // console.log(this.playlist,'playList')
            // console.log(this.currentSong,"currentSong")
            
        },
        methods:{
        
               back(){
                   console.log(this.setFullScreen)
                   this.setFullScreen(false)
              },
                    ...mapMutations([{
           
                   setFullScreen:'SET_FULL_SCREEN'
              }  
            ]),
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
