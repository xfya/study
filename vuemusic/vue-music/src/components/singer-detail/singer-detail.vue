<template>
<transition name="slide">    
  <div>
      123  singer-detail
  </div>

  </transition>
</template>


<script>
    export default{

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
