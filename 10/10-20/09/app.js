var http = require('http');
var url = 'http://www.imooc.com/u/2769176/courses?page=2';


http.get(url, function(res) {
    var html = '';
    res.on('data', function(data) {
        html += data
    })
    res.on('end', function() {
        console.log(html)
    })
})