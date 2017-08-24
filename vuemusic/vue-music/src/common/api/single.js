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