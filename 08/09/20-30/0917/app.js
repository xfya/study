var fs = require('fs');
var path = require('path');
var template = require('art-template');
var http = require('http');
var server = http.createServer();

var moment = require('moment');
server.listen(1234, () => {
    console.log('server is runing ... \n\r' + moment(new Date()).format('YY-MM-DD hh:mm:ss'))
})
server.on('request', (req, res) => {
    var url = req.url;
    if (url == "/") {
        fs.readFile(path.join(__dirname, './data.json'), 'utf-8', (err, data) => {
            // console.log(data);
            if (err) throw err;
            var heros = JSON.parse(data);
            console.log(heros)
            render(res, 'index', { list: heros })

        })

    } else if (url == '/add') {
        render(res, 'add', {})
    } else if (url.indexOf('/img/') === 0 || url.indexOf('/node_modules/') == 0) {
        fs.readFile(path.join(__dirname, url), (err, data) => {
            if (err) {
                res.end('404')
            } else {
                if (/\.css$/.test(url)) {
                    res.writeHeader(200, {
                        'Content-Type': 'text/html;charset=utf-8;'
                    })

                    res.end(data)
                }
            }

        })
    } else {
        res.end('404')
    }

    // res.end('haha')
})

function render(res, filename, dataObj) {
    var html = template(path.join(__dirname, 'views/' + filename + '.html'), dataObj);
    // 通过 res.end 把HTML 返回
    res.end(html);
}