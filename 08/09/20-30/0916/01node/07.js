var template = require('art-template');
var fs = require('fs')
var http = require('http')
var moment = require('moment')
var server = http.createServer();

server.listen(4321, () => {
    console.log('http://127.0.0.1:4321');
});

server.on('request', (req, res) => {
    var url = req.url;
    // 如果请求的是 根路径 / ， 则读取模板文件，并渲染出真实的HTML字符串，并返回给浏览器
    if (url === '/') {
        var fileList = [];
        var dirList = [];
        var count = 0;

        res.end(123)
            // res.end('sdff')
    }
});



// 排序函数
function compare(x, y) {
    var name1 = x.name;
    var name2 = y.name;
    if (name1 < name2) {
        return -1;
    } else {
        return 1;
    }
}