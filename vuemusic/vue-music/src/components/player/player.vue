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
               <progress-bar
                @precentChange = "onProgressBarChange"
                :precent="precent"></progress-bar>
               
                <p class= "jindutiao">
                    {{ format(currentTime)}}
                </p>
                <div class="bofangmoshi" @click="changeMode">
                    <div class="test" :class ="iconMode"></div>
                    播放模式
                </div>
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
                   <progress-circle  :percent = "precent" :bbb="precent">
                    
                   </progress-circle>
                </div>
               
        </div> 
      </transition>
      <audio @timeupdate = 'updateTime'
        @ended="end"  
       @canplay="ready" ref="audio" :src="currentSong.url"></audio>
  </div>


</template>


<script>
    import progressBar from 'base/progress-bar/progress-bar'
    import progressCircle from 'base/progress-bar/progress-cile'
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'
    import animations from 'create-keyframe-animation'
    import {
        playMode
    } from 'api/js/config.js'
    import {
        shuffle
    } from 'api/js/util.js'
    export default {
        computed: {
            ...mapGetters([
                'fullScreen',
                'playlist',
                'currentIndex',
                'currentSong',
                'playing',
                'mode',
                'sequenceList'
            ]),
            precent() {
                // console.log(this.currentTime, this.currentSong.duration)
                return this.currentTime / this.currentSong.duration
            },
            iconMode() {
                return this.mode === playMode.sequence ?
                    'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
            }

        },
        created() {
            // alert(3)
            // console.log(this.currentIndex,'currentIndex')
            // console.log(this.playlist,'playList')
            // console.log(this.currentSong,"currentSong")
            // console.log(this)

        },
        data() {
            return {
                songReady: false,
                currentTime: 0,
                aaa: 450
            }
        },
        watch: {
            currentSong() {
                this.$nextTick(() => {
                    this.$refs.audio.play()
                    console.log(this.currentSong.getLyric())

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
            changeMode() {
                // const mode = (this.mode+1)%3
                // this.setPlayMode(mode)
                // let  list = null;
                // if(mode == playMode.random){
                //     list = shuffle(this.sequenceList)
                // }else{
                //     list = this.sequenceList
                // }

                // this.resetCurrentIndex(list)
                // this.setPlayList(list)

            },
            resetCurrentIndex(list, song) {
                // let index = list.findIndex((item)=>{
                //     return item.id = this.currentSong.id
                // })
                // this.setCurrentIndex(index)
            },
            onProgressBarChange(precent) {
                // 7-13
                this.$refs.audio.currentTime = this.currentSong.duration * precent
                if (!this.playing) {
                    this.togglePlaying()
                }
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
            end() {
                this.next()
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
                setPlayMode: 'SET_PLAY_MODE',
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
            progressBar,
            progressCircle
        }
    }
</script>



<style lang="scss">
    @import '~@/common/scss/const.scss';
    @import '~@/common/scss/mymixin.scss';
    .icon-sequence {
        background: red;
        position: relative;
    }
    
    .icon-sequence::after {
        content: "正常播放";
        position: absolute;
        right: 0;
        width: 50px;
        height: 50px;
        line-height: 30px;
    }
    
    .icon-loop {
        background: yellow;
    }
    
    .icon-random {
        background: green;
    }
    
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
    
    .test {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-left: 5px;
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
    
    .progress-circle {
        position: absolute;
        bottom: 0;
        right: 0;
        /*background: red;*/
    }
    
    .icon-mini {
        font-size: 32px;
        position: absolute;
        left: 0;
        top: 0;
    }
    
    .icon-play-mini:before {
        content: "\E903";
    }
</style>