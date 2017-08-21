import jsonp from 'common/api/js/jsonp.js';
import { commonParmms, options } from './config.js'
import axios from "axios"

export function getRecommend() {
    const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
    const data = Object.assign({}, commonParmms, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })


    return jsonp(url, data, options)

}


export function getDataList() {
    // let url = "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg"

    const url = "/api/getDiscList"
    const data = Object.assign({}, commonParmms, {
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        rnd: Math.random(),
        needNewCode: 0,
        categoryId: 10000000,
        loginUin: 0,
        format: "json"
    })
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })

}