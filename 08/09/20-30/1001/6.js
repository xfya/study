var express = require('express');

var app = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.get((req, res) => {
    res.render('index', {

    })
})

app.listen(, () => {
    console.log('server is running...')
})