var path = require('path');
var template = require('art-template');
var fs = require('fs');
var handler = require('./handler.js')

module.exports = function(req, res) {
    var url = req.url;
    if (url == "/") {
        handler.getIndexPage(req, res)

    } else if (url == '/add') {
        handler.getAdd(req, res)
    }




















    // 静态资源
    else if (url.indexOf('/img/') == 0 || url.indexOf('/node_modules/') == 0) {
        fs.readFile(path.join(__dirname, url), (err, data) => {
            if (err) {
                res.end('404')
            } else {
                if (/\.css$/.test(url)) {
                    res.writeHeader(200, {
                        'Content-Type': 'text/css;charset=utf-8;'
                    })
                }

                // console.log(url)
                res.end(data)
            }
        })
    } else {
        res.end('404')
    }
}