// var fs = require('fs');
// fs.readFile('/', (err, data) => {
//     console.log('ok');
// })

// var fs = require('fs');
// fs.readFile(__dirname + '/1.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })
// console.log('写在1后面');
// fs.readFile(__dirname + "/2.txt", 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// console.log("写在2的后面")

// // var fs = require('fs');
// // console.log("开始读取页面的内容");
// // var results1 = fs.readFileSync(__dirname + '/1.txt', 'utf-8', (err, data) => {
// //     if (err) throw err;
// //     console.log(data)
// // })

// // console.log(results1, "results1");
// // fs.readFile(__dirname + '/1.txt', 'utf-8', (err, data) => {
// //     console.log(data, 'readFile')
// // })
// // console.log('readFile 同步')

// // node  中的异步代码不会阻塞代码执行 当异步代码执行完毕就开始返回



// // var fs = require('fs');
// // console.log('开始读取文件');
// // fs.readFile(__dirname + '/1.txt', 'utf-8', (err, data) => {
// //     if (err) throw err;
// //     console.log(data);
// //     fs.readFile(__dirname + '/2.txt', 'utf-8', (err, data) => {
// //         console.log(data)
// //         var results = fs.readFileSync(__dirname + '/3.txt', 'utf-8')
// //         console.log(results)

// //     })
// // })

// var fs = require('fs');
// fs.readFile(__dirname + '/1.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);

//     fs.readFile(__dirname + "/2.txt", 'utf-8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     })

// })

// // readFileSync 是同步读取文件
// var results1 = fs.readFileSync(__dirname + "/3.txt", 'utf-8');
// console.log(results1)
// console.log('读取完毕');

// var moment = require('moment');
// console.log(moment().format('YYYY-MM-DD HH:MM:SS'));

global.username = "xfa";
global.age = 66;