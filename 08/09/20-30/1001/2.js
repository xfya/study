var express = require('express');
var app = express();
var fs = require('fs')
var moment = require('moment')
var path = require('path')
app.use((req, res) => {
    var url = req.url;
    if (url == '/') {
        fs.readFile(path.join(__dirname, './views/index.html'), 'utf-8', (err, data) => {
            res.end(data)
        })

    } else {
        res.end('404')
    }
})
app.listen(3001, () => {
    console.log(moment(new Date).format('hh:mm:ss'))
})