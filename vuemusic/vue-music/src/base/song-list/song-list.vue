<template>
  <div class="song-list">
      <ul>
          <li class="item" v-for="(song,index) in songs" :key="index" >
              <div class="content">
                  <h2 class="name">{{song.name}}</h2>
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

            }
        },
        components:{
            scroll
        }
    }
</script>

<style scoped>
   
</style>

