// var http = require('http');
var http = require('http');
// var server = http.createServer();
var server = http.createServer();
var path = require('path');
var fs = require('fs');
var template = require('art-template');
var moment = require('moment')




server.on('request', function(req, res) {
    var url = req.url;
    if (url == "/") {
        fs.readFile(__dirname + '/data.json', 'utf-8', (err, data) => {
            if (err) throw err;
            // console.log(data, "xfa")

            var obj = JSON.parse(data);
            console.log(obj)

            // var

            render(res, 'index', { list: obj })
        })

    } else if (url === "/add") {
        render(res, 'add', {});
    } else if (url.indexOf('/img/') == 0 || url.indexOf('/node_modules/') == 0) {
        fs.readFile(path.join(__dirname, url), (err, data) => {
            if (err) {
                res.end('404');
            } else {
                // 判断是否为CSS文件，如果是CSS，则添加 header 信息
                if (/\.css$/.test(url)) {
                    res.writeHeader(200, { "Content-Type": 'text/css; charset=utf-8' });
                }
                res.end(data);
            }
        })
    }


})

server.listen(3000, function() {
    console.log('server listen at http://127.0.0.1:3000');
});


function render(res, filename, dataObj) {
    var html = template(path.join(__dirname, 'views/' + filename + '.html'), dataObj)
    res.end(html);
}