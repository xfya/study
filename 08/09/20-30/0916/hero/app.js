var http = require('http');
var router = require('./router.js');
var server = http.createServer();
server.on('request', (req, res) => {

})

server.listen(3001, () => {
    console.log('server listen at http://127.0.0.1:3001');
})