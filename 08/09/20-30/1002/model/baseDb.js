var mysql = require('mysql');

var connection = mysql.createConnection({
    database: 'my123',
    user: 'root',
    password: 'root'
})

module.exports = connection