import jsonp from 'common/api/js/jsonp.js';
import { commonParmms, options } from './config.js'



export function getSinglerList() {
    const url = "https://c.y.qq.com/v8/fcg-bin/v8.fcg"

    const data = Object.assign({}, commonParmms, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        g_tk: 1664029744,
        hostUin: 0,
        platform: 'yqq',
        needNewCode: 0
    })


    return jsonp(url, data, options)

}

export default function getSingerDetail(singerId) {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg";
    const data = Object.assign({}, commonParmms, {
        loginUin: 0,
        platform: 'yqq',
        needNewCode: 0,
        order: "listen",
        begin: 0,
        num: 100,
        songstatus: 1,
        g_tk: 1664029744,
        singermid: singerId
    })


    return jsonp(url, data, options)
}


export function getSingerDetail1(singermid) {
    // let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
    let url = 'https://c.y.qq.com/mv/fcgi-bin/fcg_singer_mv.fcg?cid=205360581&singermid=002J4UUk29y8BY&order=listen&begin=0&num=5&g_tk=5381&jsonpCallback=singermvlistJsonCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0'
    let data = Object.assign({}, commonParmms, {
        // g_tk: 1576475597,
        // hostUin: 0,
        // platform: 'yqq',
        // needNewCode: 0,
        // order: 'listen',
        // begin: 0,
        // num: 100,
        // songstatus: 1,
        // singermid: singermid
    })
    return jsonp(url, data, options)
}