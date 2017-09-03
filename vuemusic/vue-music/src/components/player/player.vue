<template>
  <div class="play" v-show ="playlist.length>0">
      <transition  name="normal">

           <div class="normal-player" v-show="fullScreen">
             <div class="background ">
                 <img :src="currentSong.img" alt="">
                 <div @click="back" >
                     返回 <br>
                     返回
                 </div>
             </div>
            <div class="top">
                <h1 class="name" v-html="currentSong.name"></h1>
                <h1 class="singer" v-html="currentSong.singer"></h1>
               <progress-bar :precent="precent"></progress-bar>
               
                <p class= "jindutiao">
                    {{ format(currentTime)}}
                </p>
                   <div class="playmusi">
                       <div @click="prev" class="prev">上一个</div>
                       <div @click="togglePlaying" ref="bofang"   class="current">播放</div>
                       <div class="next"  @click="next">下一个</div>
                   </div>
            </div>
      </div>
      </transition>
      <transition  name="mini">
     
        <div class="min-plaer"  @click="open"  v-show="!fullScreen">
                <div class="left">
                    <img :src="currentSong.img" alt="">
                    <h1 class="name" v-html="currentSong.name"></h1>
                    <h1 class="singer" v-html="currentSong.singer"></h1>
            
                </div>
                <div class="bottom">
                     <div class="playmusi">
                       <div class="prev"  @click.stop="prev">上一个</div>
                       <div @click.stop="togglePlaying"   class="current">播放</div>
                       <div class="next" @click.stop="next">下一个</div>
                   </div>
                </div>
               
        </div> 
      </transition>
      <audio @timeupdate = 'updateTime' @canplay="ready" ref="audio" :src="currentSong.url"></audio>
  </div>


</template>


<script>
    import progressBar from 'base/progress-bar/progress-bar'
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'
    import animations from 'create-keyframe-animation'
    export default {
        computed: {
            ...mapGetters([
                'fullScreen',
                'playlist',
                'currentIndex',
                'currentSong',
                'playing'
            ]),
            precent() {
                return this.currentTime / this.currentSong.duration
            }

        },
        created() {
            alert(3)
                // console.log(this.currentIndex,'currentIndex')
                // console.log(this.playlist,'playList')
                // console.log(this.currentSong,"currentSong")
                // console.log(this)

        },
        data() {
            return {
                songReady: false,
                currentTime: 0
            }
        },
        watch: {
            currentSong() {
                this.$nextTick(() => {
                    this.$refs.audio.play()
                })

            },
            playing(newPlaying) {
                const audio = this.$refs.audio;
                this.$nextTick(() => {
                        if (newPlaying) {
                            audio.play()
                            this.$refs.bofang.innerHTML = '播放'

                        } else {
                            audio.pause()
                            this.$refs.bofang.innerHTML = '暂停'
                        }
                    })
                    //    newPlaying?audio.play():audio.pause()
            }

        },
        methods: {

            back() {

                this.setfullScreen(false)



            },
            ready() {
                this.songReady = true
            },
            open() {
                this.setfullScreen(true)
            },
            togglePlaying() {

                this.setPlayingState(!this.playing)
            },
            next() {
                // alert(1)
                if (!this.songReady) {
                    return;
                }
                let index = this.currentIndex + 1

                if (index == this.playlist.length) {
                    index = 0;
                }
                this.setCurrentIndex(index)
                this.songReady = false;
            },

            prev() {
                if (!this.songReady) {
                    return;
                }
                let index = this.currentIndex - 1

                if (index == -1) {
                    index = this.playlist.length - 1;
                }
                this.setCurrentIndex(index)
                this.songReady = false;
            },
            ...mapMutations({
                setfullScreen: 'SET_FULL_SCREEN',
                setPlayingState: 'SET_PLAYING_STATE',
                setCurrentIndex: 'SET_CURRENT_INDEX',
                setMode: 'SET_MODE',
                setPlayList: 'SET_PLAYLIST'
            }),
            updateTime(e) {
                this.currentTime = e.target.currentTime;
                // this.currentTime = e.target.currentTime
                // console.log(this.currentTime);
            },
            format(interval) {
                interval = interval | 0 //  |0表示向下取整
                let minute = this._pad(interval / 60 | 0);
                // console.log(this.currentSong)
                let second = interval % 60;
                second = second >= 10 ? second : '0' + second
                return ` ${minute} : ${second}`
            },
            _pad(num, n = 2) {
                // console.log(this.precent, 'xfa')
                let len = num.toString().length;
                while (len < n) {
                    num = "0" + num;
                    len++
                }
                return num
            },
        },
        components: {
            progressBar
        }
    }
</script>



<style>
    .left {
        float: left;
    }
    
    .bottom {
        float: left;
    }
    
    .min-plaer {
        height: 50px;
        width: 100%;
        background-color: #000000;
        position: fixed;
        bottom: 0;
    }
    
    .normal-player {
        width: 100%;
        height: 100%;
        background-color: #000000;
        position: fixed;
        top: 0;
        z-index: 10001
    }
    
    .normal-player .background {
        text-align: center;
        margin: 5px;
    }
    
    .normal-player .background img {
        border-radius: 50%;
    }
    
    .normal-player .background div {
        margin-top: 20px;
    }
    
    .min-plaer .left img {
        height: 50px;
        margin-left: 20px;
    }
    
    .jindutiao {
        font-size: 16px;
        padding: 10px 5px;
        line-height: 36px;
        color: #fff;
    }
    
    .normal-enter-active,
    .normal-leave-active {
        transition: all 0.4s;
    }
    
    .normal-enter-active .top,
    .normal-leave-active .top,
    .normal-enter-active .bottom,
    .normal-leave-active .bottom {
        transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
    
    .normal-enter,
    .normal-leave-to {
        opacity: 0;
    }
    
    .normal-enter .top,
    .normal-leave-to .top {
        transform: translate3d(0, -100px, 0);
    }
    
    .normal-enter .bottom,
    .normal-leave-to .bottom {
        transform: translate3d(0, 100px, 0);
    }
    
    .playmusi {
        display: flex;
    }
    
    .playmusi div {
        flex: 1;
        line-height: 70px;
        text-align: center;
    }
</style>