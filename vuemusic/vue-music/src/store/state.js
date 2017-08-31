import { playMode } from 'api/js/config'

const state = {
        singer: {},
        playing: false,
        fullScreen: false,
        playlist: [],
        sequenceList: [],
        mode: playMode.sequence,
        currentIndex: -1
    }
    // 只保留基础的数据

export default state