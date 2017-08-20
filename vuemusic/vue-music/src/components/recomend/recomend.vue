<template>
    <div class = "lunbo">
        
        <div class="slider-wraper">
            <slider>
                <div   v-for="(item,index) in recomends" :key="item.id">
                    <a :href="item.linkUrl">
                        <img :src="item.picUrl" alt="">
                    </a>
                </div>
            </slider>
        </div> 
    </div>
</template>

<script>
    import {
        getRecommend
    } from 'api/recommend.js'

    import {
        ERR_OK
    } from 'api/config'
   import Slider from 'base/slider/slider.vue'
    export default {
        data(){
            return{
                recomends:[]
            }
        },
        created(){
             this._getRecommend()
        },
        methods:{
            _getRecommend(){
                getRecommend().then((res)=>{
                    if(res.code == ERR_OK){
                        // console.log(res.data.slider)
                        this.recomends = res.data.slider
                    }
                })
            }
        },
        components:{
            Slider
        }
    }
</script>

<style>

</style>