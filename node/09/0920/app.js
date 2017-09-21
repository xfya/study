var http = require('http');
var server = http.createServer();
var path = require('path');
var template = require('art-template');
var fs = require('fs');
server.listen(3000, () => {
    console.log('server is running ...')
})

server.on('request', (req, res) => {
    var url = req.url;

    if (url == "/") {
        fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
            // console.log(data)
            var list = JSON.parse(data);
            var html = template(path.join(__dirname, 'views/index.html'), { list: list })

            res.end(html)
        })



    } else if (url == '/add') {
        var html = template(path.join(__dirname, 'views/add.html'), {})
        res.end(html)
    } else if (url.indexOf('/img/') == 0 || url.indexOf('/node_modules/') == 0) {
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
})

function render(filename) {
    var html = template(path.join(__dirname, 'views' + filename + '.html'), {})
    res.end(html)
}