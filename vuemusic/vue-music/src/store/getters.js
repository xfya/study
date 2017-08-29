export const singer = state => state.singer



//   currentIndex  可以由别的属性计算出来

export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playList = state => state.playList
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
        return state.playList[state.currentIndex]
    }
    //   getter  可以做简单的代理 换可以做计算属性在里面