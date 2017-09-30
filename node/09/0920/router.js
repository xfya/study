var path = require('path');
var template = require('art-template');
var fs = require('fs');
var handler = require('./handler.js')
var urlParse = require('url')
    // 官方的模式

module.exports = function(req, res) {

    var { pathname: url, query } = urlParse.parse(req.url, true)
        //  将req中结构出来的req。query  添加成自定义成的
    req.query = query;
    var method = req.method.toUpperCase().trim();
    console.log(method, url)
        // console.log(req.method)

    if (url == "/") {
        handler.getIndexPage(req, res)

    } else if (url == '/add') {
        handler.getAdd(req, res)
    } else if (url == "/info") {
        handler.showHeroInfo(req, res)
    } else if (url == "/ajaxPostFile") {
        handler.ajaxPostFile(req, res)
    } else if (method = "GET" && url == "/edit") {
        handler.geteditHero(req, res)
    } else if (url == '/updateHeroInfo') {

        handler.updateHeroInfo(req, res)
    } else if (url == '/del') {
        console.log('xxxxxxxxxxxxxxxx')
        handler.deleteHeroById(req, res)
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