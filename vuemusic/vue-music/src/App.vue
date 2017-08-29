<template>
  <div id="app">
   <headers></headers>
   <tabs></tabs>

        <router-view></router-view>

   <player></player>
 
  </div>
</template>

<script>
    import headers from '@/components/rank/m-header/m-header.vue';
    import tabs from '@/components/tab/tab.vue';
    import player from "@/components/player/player"
  
    export default {
        name: 'app',
        components: {
            headers,
            tabs,
            player
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        position: relative;
    }
</style>