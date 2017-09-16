//   node 中的查找机制

// 首先严格按照查找机制去查找
// 其次 查找后缀名是。 js 的文件
// 如果没有。 js 的文件查找。 json 文件
// 如果。 json 的文件没有查找到 则尝试查找。 node 结尾的文件

// var template = require('art-template');
// // compile方法，会编译指定的字符串，并返回一个 render 函数
// var render1 = template.compile('<h1>123{{username}}</h1>')

// var htmlStr = render1({ username: 'xfa' });
// console.log(htmlStr);

var template = require('art-template');
var fs = require('fs');
var http = require('http');
var server = http.createServer();
server.listen(1234, () => {
    console.log("http://127.0.0.1:1234");
})

server.on('request', (req, res) => {
    var url = req.url;
    if (url == "/") {
        fs.readFile(__dirname + "/views/tmpl.html", 'utf-8', (err, data) => {
            if (err) throw err;
            // console.log(data)
            var render = template.compile(data);
            var htmlStr = render({
                username: '张三',
                age: 22,
                gender: '男',
                hobby: ['吃饭', '睡觉', '打豆豆']
            })

            console.log(htmlStr)
            console.log(2)
            res.end(htmlStr);
        })
    } else {
        res.end('404')
    }
})