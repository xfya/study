var http = require('http');


var server = http.createServer();

server.listen(3000, () => {
    console.log('server  is  runing...');
})


server.on('request', function(req, res) {
    let url = req.url;
    console.log(url)

})