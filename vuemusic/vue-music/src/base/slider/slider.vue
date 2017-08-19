<template>
  <div class="slider" ref ="slider">
     <div class = "slider-group" ref="sliderGroup">
         <slot>
            
         </slot>
     </div>
  </div>
  
</template>

<script>
import BScroll from 'better-scroll'
      export default{
          data(){
              return{

              }
          },
          props:{
              loop:{
                  type:Boolean,
                  default:true
              },
                autoPlay:{
                  type:Boolean,
                  default:true
              },
              interval:{
                  type:Number,
                  default:4000
              }
          },
          mounted(){
              setTimeout(()=>{
                  this._setSliderWidth()
              },20)
          },
          methods:{
              _setSliderWidth(){
                this.children = this.$refs.sliderGroup.children
                console.log( this.children)
                let width = 0 ;
                let sliderWidth = this.$refs.slider.clientWidth;
                for(var i=0 ; i < this.children.length;i++){
                    let child = this.children[i]
                }

             
             },
              _initSlider(){

              }
          }

      }
</script>


<style>

</style>



