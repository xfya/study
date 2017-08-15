// var http = require("http");
// // console.log(http)
// var fs = require('fs');

// var server = http.createServer();
// server.on('request', function(req, res) {
//     var url = req.url;
//     res.writeHeader(200, {
//         'Content-Type': 'text/html;charset=utf-8'
//     })
//     if (url === "/") {
//         fs.readFile(__dirname + '/views/index.html', (err, data) => {
//             if (err) throw err;
//             res.end(data)
//         })
//     } else if (url === "/movie.html") {
//         fs.readFile(__dirname + '/views/movie.html', (err, data) => {
//             if (err) throw err;
//             res.end(data)
//         })
//     } else if (url === "/assets/images/8.jpg") {
//         fs.readFile(__dirname + '/assets/images/8.jpg', (err, data) => {
//             if (err) throw err;
//             res.end(data)
//         })
//     } else if (url === "/assets/css/index.css") {
//         fs.readFile(__dirname + '/assets/css/index.css', (err, data) => {
//             if (err) throw err;
//             res.end(data)
//         })
//     } else {
//         res.end("<h1>404 您访问的页面炸了！</h1>")
//     }


// })
// server.listen(3000, function() {
//         console.log('server  is runing...')
//     })
//     // // 
//     // var server = http.createServer();
//     // server.listen(3000, function() {
//     //     console.log('server runing at https:///127.0.0.1')


// // })



// // server.on('request', function(req, res) {
// //     res.writeHeader(200, {
// //         'Content-Type': 'text/html;charset=utf-8'
// //     });
// //     res.end('《好；；')
// // })
// var http = require('http');
// var server = http.createServer();

// server.on('request', function(req, res) {
//     var url = req.url;
//     res.writeHeader(200, {
//         'Content-Type': "text/html;charset=utf-8"
//     })
//     if (url === '/') {
//         res.end('首页')
//     } else if (url === "/movie.html") {
//         res.end('movei')
//     } else {
//         res.end('test....')
//     }

// })

// server.listen(3000, (err, data) => {
//     console.log('runing........', err, data)
// })

// var fs = require('fs');
// fs.readFile('./1.txt', 'utf-8', (err, data) => {
//     console.log(data)
// })

var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', (req, res) => {
    var url = req.url;
    fs.readFile(__dirname + url, (err, data) => {

    })
})