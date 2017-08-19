import jsonp from '../js/jsonp.js';
import { commonParmms, options } from './config.js'
export function getRecommend() {
    const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
    const data = Object.assign({}, commonParmms, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })


    return jsonp(url, data, options)

}