<template>
    <div class="progress-bar" ref="progressBar">
        <div class="bar-banner">
            <div class="progress" ref="progress"></div>
            <div ref="progressBtn" class="progress-btn-wrper">
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

                if (newPrecent >= 0) {
                    const barWidth = this.$refs.progressBar.clientWidth - progressBtn;
                    const offsetWidth = newPrecent * barWidth
                    console.log(offsetWidth)
                    this.$refs.progress.style.width = offsetWidth + "px"
                    this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`
                }
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