import originJSONP from 'jsonp'

function param(data) {
    let url = ''
    for (let i in data) {
        let value = (data[i] !== undefined) ? data[i] : ''
        url += `&${i}=${encodeURIComponent(value)}`
    }
    // 删掉第一个 &
    return url ? url.substring(1) : ''
}

export default function jsonp(url, data, opts) {
    url += ((url.indexOf('?') === -1) ? '?' : '&') + param(data)

    return new Promise((resolve, reject) => {
        originJSONP(url, opts, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}