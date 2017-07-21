<template>
  <div id="app">
      <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
    import Mheader from './components/header/header.vue'
    export default {
        name: 'app',
        components: {
            Mheader,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>