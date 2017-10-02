var express = require('express');
var app = express();
var path = require('path')
var moment = require('moment')
app.listen(3001, () => {
    console.log('server is runing..' + moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'))
})


app.get('/', (req, res) => {
    // 当请求是 get 类型的时候  调用 、
    res.sendFile(path.join(__dirname, './views/index.html'))
})
app.get('/assets/img/108.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, './assets/img/108.jpg'))
})
app.get('/assets/*', (req, res) => {
    res.sendFile(path.join(__dirname, req.url))
})