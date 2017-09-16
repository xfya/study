var fs = require('fs');
var http = require('http');
var moment = require('moment');
var template = require('art-template');

var server = http.createServer();
server.listen(8888, () => {
    console.log('server is runing ... ' + moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
})

server.on('request', (req, res) => {
    var url = req.url;
    if (url == "/") {
        var fileList = [];
        var dirList = [];
        var count = 0;
        fs.readdir(__dirname, (err, files) => {
            console.log(files)
            files.forEach((file, i) => {
                fs.stat(__dirname + '/' + file, (err, data) => {
                    var info = {};
                    info.name = file;
                    info.isfile = data.isFile();
                    info.size = data.size;
                    info.mtime = moment(data.mtime).format('YYYY-MM-DD HH:mm:ss');


                    if (data.isFile()) {
                        fileList.push(info)
                    } else {
                        dirList.push(info)
                    }

                    count++;

                    if (count == files.length) {
                        dirList.sort(compare);
                        fileList.sort(compare);
                        var list = dirList.concat(fileList);
                        console.log(list)
                        var html = template(__dirname + "/views/fileTmpl.html", { list: list })
                        res.end(html)
                    }

                })
            })
        })


    }

})


function compare(x, y) {
    var name1 = x.name;
    var name2 = y.name;
    if (name1 < name2) {
        return -1;
    } else {
        return 1;
    }
}