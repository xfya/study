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
import {addClass} from 'common/js/dom.js'
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
                  this._initSlider()
              },20)
          },
          methods:{
              _setSliderWidth(){
                this.children = this.$refs.sliderGroup.children
                // console.log( this.children)
                let width = 0 ;
                let sliderWidth = this.$refs.slider.clientWidth;
                    console.log(sliderWidth)
                for(var i=0 ; i < this.children.length;i++){
                    let child = this.children[i]
                    addClass(child,'slide-item')
                    child.style.width = sliderWidth  + "px"
                    width += sliderWidth
                }
                if(this.loop){
                    width += 2*sliderWidth
                }
                this.$refs.sliderGroup.style.width = width + "px"
             },
              _initSlider(){
                  this.slider = new BScroll(this.$refs.slider,{
                      scrollX:true,
                      scrollY:true,
                      momentum:false,
                      snap:true,
                      snapLoop:this.loop,
                      snapThreshold:0.3,
                      snapSpeed:400,
                      click:true
                  })
              }
          }

      }
</script>


<style scoped>
.slider{
    overflow: hidden;
}
.slider-group > div{
    float: left;
}

.slider-group > div img{
   width:100%;
}
</style>



