// express 基于没有修改的web 属性   封装了一些原生的web
// Node.js 如何部署上线
var express = require('express');
var app = express();
app.use('/', (req, res) => {
    res.end('ok')
})


// var http = require('http');
// var server = http.createServer();
// server.on('request', (req, res) => {
//     res.end('xfa')
// })
// server.listen(3006, () => {

// })


// app.get('/', (req, res) => {
//     res.send('hahh')
// })

var server = app.listen(3000, () => {

})