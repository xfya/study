<template>
  <div class="song-list">
      <ul>
          <li 
          class="item" v-for="(song,index) in songs" :key="index"
          @click='selectItem(song,index)'  
           >
              <div class="content">
                  <h2 class="name" >{{song.name}}</h2>
                  <p class="desc"></p>
              </div>


          </li>
      </ul>
  </div>
</template>

<script>


    export default{
        props:{
            songs:{
                type:Array,
                default:[]
            }
        },
        methods:{
            getSesc(song){
                // return  `${song.singer}* ${song.album}`
            },
            selectItem(item,index){
                this.$emit("select",item,index)
            }
        },
        components:{
            scroll
        }
    }
</script>

<style scoped>
   
</style>

