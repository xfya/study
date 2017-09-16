export const singer = state => state.singer



//   currentIndex  可以由别的属性计算出来

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen
export const playlist = state => state.playlist
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex



export const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc
    //   getter  可以做简单的代理 换可以做计算属性在里面

//   通过 mapgetters  拿到这个里面的数据