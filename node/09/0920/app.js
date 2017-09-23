var http = require('http');
var server = http.createServer();
var template = require('art-template');
var router = require('./router.js')
    // 导入自定义的render  函数 
var bindrednder = require('./render.js')

server.listen(3005, () => {
    console.log('server is running ...')
})

server.on('request', (req, res) => {
    bindrednder(res)
    router(req, res)


})