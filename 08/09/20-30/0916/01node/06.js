// var template = require('art-template');
// var fs = require('fs');
// var http = require('http');
// var server = http.createServer();
// server.listen(1235, () => {
//     console.log("http://127.0.0.1:123");
// })

// server.on('request', (req, res) => {
//     let url = req.url;
//     if (url == "/") {
//         fs.readFile(__dirname + "/views/tmpl.html", 'utf-8', (err, data) => {
//             if (err) throw err;
//             var dataObj = {
//                 username: '张三1',
//                 age: 22,
//                 gender: '男',
//                 hobby: ['吃饭', '睡觉', '打豆豆']
//             }

//             var htmlStr = template.render(data, dataObj);
//             res.end(htmlStr);

//         })
//     } else {
//         res.end('40')
//     }
// })

// var fs = require('fs');
// var template = require('art-template');
// var http = require('http');
// var server = http.createServer();
// server.listen(4567, () => {
//     console.log('server is runing ...')
// })
// server.on('request', (req, res) => {
//     var url = req.url;
//     if (url = "/") {
//         var dataObj = {
//             username: '张三fdsf',
//             age: 22,
//             gender: '男',
//             hobby: ['吃饭', '睡觉', '打豆豆']
//         }
//         var htmlStr = template(__dirname + '/views/tmpl.html', dataObj);

//         res.end(htmlStr)
//     }
// })


// var fs = require('fs');
// fs.readdir(__dirname, (err, data) => {
//     // console.log(data)
//     data.forEach((item, i) => {
//         console.log(item)
//     })
// })
// var moment = require('moment')
// fs.stat(__dirname + '/1.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.isFile())
//     console.log(data.size);
//     console.log(data.mtime)
// })
var fs = require('fs');
var moment = require('moment');
var http = require('http');
var template = require('art-template');

var server = http.createServer();
server.listen(3456, () => {
    console.log('http://127.0.0.1:3456');
});

server.on('request', (req, res) => {
    var url = req.url;
    if (url == "/") {
        res.end(1);
    }

})