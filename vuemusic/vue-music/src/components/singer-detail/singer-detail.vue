<template>
<transition name="slide">    
  <div>
     <musiclist :title="title" :songs="songs" :bgImage="bgImage"></musiclist>
  </div>

  </transition>
</template>


<script>
import {mapGetters} from "vuex"
import {getSingerDetail,getSingerDetail1} from "@/common/api/single.js"
import {createSong} from "@/common/api/js/song.js"
import musiclist from "@/components/music-list/music-list.vue"
    export default{
        data(){
            return{
                  songs:[]
            }
          
        },
        computed:{
            title(){
                return this.singer.name
            },
             bgImage(){
                return this.singer.avatar
            },
            ...mapGetters([
                "singer"
            ])
        },
        created(){
           setTimeout(()=>{
               this.getDetail()
           },40)
            // console.log(this.singer.id,"test vuex")
        },
        methods:{
            getDetail(){
                if(!this.singer.id){
                    this.$router.push({
                        path:'/singer'
                    })
                }
                getSingerDetail1(this.singer.id).then((res)=>{
                    // console.log(res.data)
                    this.songs= this._normalizeSongs(res.data.list)
                    //  console.log( this.songs)
                })
            },
            _normalizeSongs(list){
                   let result = []

                list.forEach((item) => {
                    // 解构赋值
                  
                    let musicData = item.musicData
                    // console.log(musicData.songid,musicData.albummid)
                    if (musicData.songid && musicData.albummid) {
                      result.push(createSong(musicData))
                    }
                })

                return result
            }
        },
        components:{
            musiclist
        }
    }
</script>

<style>
.slide-enter-active,.slide-leave-active{
    transition:all .3s;
}
.slide-enter,.slide-leave-to{
    transform:translate3d(100%,0,0)
}
</style>
