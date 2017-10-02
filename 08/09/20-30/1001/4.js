var express = require('express');
var app = express();
var path = require('path')
var moment = require('moment')

// app.use(express.static('assets'))
app.use('/assets', express.static('assets'))
app.listen(3001, () => {
    console.log('server is runing..' + moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'))

})
app.get('/', (req, res) => {
    // 当请求是 get 类型的时候  调用 、
    res.sendFile(path.join(__dirname, './views/index.html'))
})