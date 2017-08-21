<template>
  <div id="app">
   <headers></headers>
   <tabs></tabs>
   <keep-alive>
        <router-view></router-view>
   </keep-alive>
 
  </div>
</template>

<script>
    import headers from './components/m-header/m-header.vue';
    import tabs from './components/tab/tab.vue';
    export default {
        name: 'app',
        components: {
            headers,
            tabs

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
    }
</style>