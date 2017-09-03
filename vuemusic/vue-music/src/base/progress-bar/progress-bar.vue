<template>
    <div class="progress-bar" ref="progressBar">
        <div class="bar-banner">
            <div class="progress" ref="progress"></div>
            <div ref="progressBtn"
            @touchstart.prevent ="progressTouchStart"
            @touchmove.prevent="progressTouchMove"
            @touchend.prevent="progressTouchEnd"
             class="progress-btn-wrper">
                <div class="progress-btn">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const progressBtn = 16;

    export
    default {
        created() {
            this.touch = {}
            console.log(this.precent)
        },
        props: {

            precent: {
                type: Number,
                default: 0
            }
        },

        watch: {
            precent(newPrecent) {

                if (newPrecent >= 0 && !this.touch.initiated) {
                    const barWidth = this.$refs.progressBar.clientWidth - progressBtn;
                    const offsetWidth = newPrecent * barWidth
                        // console.log(offsetWidth)
                    this._offset(offsetWidth)
                }
            }
        },
        methods: {
            progressTouchStart(e) {
                this.touch.initiated = true
                this.touch.startX = e.touches[0].pageX;
                this.touch.left = this.$refs.progress.clientWidth;
            },
            progressTouchMove(e) {
                if (!this.touch.initiated) {
                    return;
                }
                const deltaX = e.touches[0].pageX - this.touch.startX;
                const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtn, Math.max(0, this.touch.left + deltaX))
                this._offset(offsetWidth)
            },
            progressTouchEnd(e) {
                this.touch.initiated = false;
                this._triggerPrecent()
            },
            _offset(offsetWidth) {
                this.$refs.progress.style.width = offsetWidth + "px"
                this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`

            },
            _triggerPrecent() {
                const barWidth = this.$refs.progressBar.clientWidth - progressBtn;
                const precent = this.$refs.progress.clientWidth / barWidth
                this.$emit("precentChange", precent)
            }
        }

    }
</script>

<style>
    .progress-bar {
        height: 30px;
    }
    
    .bar-banner {
        position: relative;
        top: 13px;
        height: 4px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.3);
    }
    
    .progress {
        position: absolute;
        height: 100%;
        background: darkred;
    }
    
    .progress-btn-wrper {
        position: absolute;
        left: -8px;
        top: -13px;
        width: 30px;
        height: 30px;
    }
    
    .progress-btn {
        position: relative;
        top: 7px;
        left: 7px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border: 3px solid greenyellow;
        border-radius: 50%;
        background: yellow;
    }
</style>