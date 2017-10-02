var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my123'
});
// 3使用创建的数据可连接查询数据
connection.connect();

var newuser = {

    age: 213,
    adress: '1郑州',
    gender: '男1',
    name: 'qq2'
}


connection.query('insert into users set ?', [newuser], (err, result) => {
    if (err) throw err;


    console.log(result)
})


connection.end();