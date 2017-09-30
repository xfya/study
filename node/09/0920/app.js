var http = require('http');
var server = http.createServer();
var template = require('art-template');
var router = require('./router.js')
var moment = require('moment')
    // 导入自定义的render  函数 
var bindrednder = require('./render.js')

server.listen(2005, () => {
    console.log('server is running ...' + moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
})

server.on('request', (req, res) => {
    bindrednder(res)
    router(req, res)


})