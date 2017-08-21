<template>
    <div class = "lunbo">
        
        <div class="slider-wraper">
            <slider v-if="recomends.length">
                <div   v-for="(item,index) in recomends" :key="item.id">
                    <a :href="item.linkUrl">
                        <img :src="item.picUrl" alt="">
                    </a>
                </div>
            </slider>
        </div> 
        <div class="recommon_list" :data ="disList">
            <div>
                <div class="recommome_title">热门歌单推荐</div>
                <ul>
                    <li v-for ="(item ,index) in disList">
                        <div class="icon">
                            <img width="60" height="60" v-lazy="item.imgurl" alt="">
                        </div>
                        <div class="text">
                            <h2 class="name">{{item.creator.name}}</h2>
                            <p class="desc">{{item.dissname}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getRecommend,
        getDataList
    } from 'api/recommend.js'


    import {
        ERR_OK
    } from 'api/config'
    import Slider from 'base/slider/slider.vue'
    import scroll from 'api/scroll/scroll.vue'
    export default {
        data() {
            return {
                recomends: [],
                disList: []
            }
        },
        created() {
            this._getRecommend()
            this._getDataList()
        },
        methods: {
            _getRecommend() {
                getRecommend().then((res) => {
                    if (res.code == ERR_OK) {
                        // console.log(res.data.slider)
                        this.recomends = res.data.slider
                    }
                })
            },
            _getDataList() {
                getDataList().then((res) => {
                    console.log(res.data.list)
                    this.disList = res.data.list
                })
            }

        },
        components: {
            Slider,
            scroll
        }
    }
</script>

<style scoped>
    .recommon_list li {
        display: flex;
        height: 65px;
    }
    
    .recommome_title {
        text-align: center
    }
    
    .icon {
        flex: 0 0 60px;
    }
    
    .text {
        flex: 1;
    }
</style>