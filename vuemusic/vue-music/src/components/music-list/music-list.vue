<template>
  <div class="my-music-list">
      <div class="back">
          <i class ="icon-back"></i>
      </div>
      <h1 v-html="title" class="title"></h1>
      <div class="bg-image" :style="bgStyle">
          <div class="filter"></div>
      </div>
      <scroll class="music-list">
          <div class="song-list-wraper">
              <songlist @select="selectItem" :songs="songs"></songlist>
          </div>
      </scroll>
  </div>   
</template>

<script>
    import scroll from 'api/scroll/scroll.vue'
    import songlist from 'base/song-list/song-list.vue'
    import {mapActions}  from 'vuex'
    
    
    export default{
          props: {
            // 背景图
            bgImage: {
            type: String,
            default: ''
            },
            songs: {
            type: Array,
            default: []
            },
            title: {
            type: String,
            default: ''
            },
            // 子组件排行奖杯图片
            rank: {
            type: Boolean,
            default: false
            }
        },
        computed:{
            bgStyle(){
                return `background:url(${this.bgImage}) no-repeat center`
            }
        },
        components:{
            scroll,
            songlist
        },
        methods:{
            selectItem(item,index){
                this.selectPlay({
                    list:this.songs,
                    index
                })

            },
            ...mapActions([
                'selectPlay'
            ])
        }
    }
</script>
<style>
.bg-image{
    width: 50%;
    padding-top:50%;
}
.music-list{
    height:680px;
}
</style>
