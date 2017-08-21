<template>
    <div class="posr">
        <div class="slider" ref ="slider">
            <div class = "slider-group" ref="sliderGroup">
                <slot>
                    
                </slot>
               
            </div>
             <ul class="dots-ul" >
                    <li  class="dots" v-for = "(item , index) in dots" :class = "{active:currentIndex == index}"   ></li>
                    
                </ul>
        </div>
  </div>
  
</template>

<script>
    import BScroll from 'better-scroll'
    import {
        addClass
    } from 'common/api/js/dom.js'
    export default {
        data() {
            return {
                dots: [],
                currentIndex: 0,

            }
        },
        props: {
            loop: {
                type: Boolean,
                default: true
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 4000
            }
        },
        mounted() {
            setTimeout(() => {
                this._setSliderWidth()
                this._initSlider()
                this._initdots()

            }, 20)


        },
        methods: {
            _setSliderWidth() {
                this.children = this.$refs.sliderGroup.children
                    // console.log( this.children)
                let width = 0;
                let sliderWidth = this.$refs.slider.clientWidth;
                console.log(sliderWidth)
                for (var i = 0; i < this.children.length; i++) {
                    let child = this.children[i]
                    addClass(child, 'slide-item')
                    child.style.width = sliderWidth + "px"
                    width += sliderWidth
                }
                if (this.loop) {
                    width += 2 * sliderWidth
                }
                this.$refs.sliderGroup.style.width = width + "px"
            },
            _initSlider() {
                this.slider = new BScroll(this.$refs.slider, {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapLoop: this.loop,
                    snapThreshold: 0.3,
                    snapSpeed: 400,
                    click: true
                })
                this.slider.on("scrollEnd", () => {
                        let pageIndex = this.slider.getCurrentPage().pageX

                        this.currentIndex = pageIndex
                        if (this.autoPlay) {
                            // this._play()
                        }
                    })
                    // console.log(this.slider)
            },
            _initdots() {
                this.dots = new Array(this.children.length)
            },

        }

    }
</script>


<style scoped>
    .posr {
        position: relative;
    }
    
    .slider {
        overflow: hidden;
    }
    
    .slider-group>div {
        float: left;
    }
    
    .slider-group>div img {
        width: 100%;
    }
    
    .dots-ul {
        position: absolute;
        list-style: none;
        bottom: 20px;
        left: 50%;
        margin-left: 10px;
        transform: translateX(-50%)
    }
    
    .dots-ul li {
        float: left;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        margin-left: 10px;
    }
    
    .dots-ul li.active {
        width: 25px;
        height: 10px;
        border-radius: 30%;
        background-color: #31c27c;
    }
</style>