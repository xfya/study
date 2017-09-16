<template>
    <div class="progress-circle">
       <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="progress-background" cx="50" cy="50" r="50" fill="transparent"/>
      <circle :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset" class="progress-bar" cx="50" cy="50" r="50" fill="transparent" />
    </svg>
       
        <slot></slot>
    </div>
</template>


<script>
    export default {
       computed: {
            dashOffset() {
                
            
                return (1 - this.percent) * this.dashArray
            }
        },
        props: {
            percent: {
                 type: Number,
                default: 0
            },
              bbb: {
                 type: Number,
                default: 10
            },
            radius: {
                type: Number,
                default: 32
            }
        },
        data() {
            return {
                dashArray: Math.PI * 100
            }
        },


    }
</script>

<style lang="scss" scoped>
    .progress-circl {
        position: relative;
    }
    
    circle {
        stroke-width: 8px;
        transform-origin: center;
    }
    
    .progress-background {
        transform: scale(0.9);
        stroke: red;
    }
    
    .progress-bar {
        transform: scale(0.9) rotate(-90deg);
        stroke: greenyellow;
    }
</style>