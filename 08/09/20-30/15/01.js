// var fs = require('fs');
// // 异步方法中无法通过try catch  赖不活异常
// // console.log(fs)
// fs.readFile('/', (err, data) => {
//     console.log('ok')
// })

// var fs = require('fs');
// console.log('开始读取文件');
// fs.readFile(__dirname + '/1.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// console.log("写在读取文件1湖面")
// fs.readFile(__dirname + '/2.txt', 'utf-8', (err, dataStr) => {
//     if (err) throw err;
//     console.log(dataStr);
// })
// console.log('写在2后面')
// fs.readFile(__dirname + '/3.txt', 'utf-8', (err, data) => {
//     console.log(data)
// })


// console.log('写在3的后面')

// var fs = require('fs');

// console.log("开始读取");
// var result1 = fs.readFileSync(__dirname + '/1.txt', 'utf-8', (err, data) => {
//     console.log(data)
// })
// console.log('写在1后面');
// console.log(result1)
// var result2 = fs.readFileSync(__dirname + '/2.txt', 'utf-8');
// console.log(result2);
// console.log('写在2后面');

// var result3 = fs.readFileSync(__dirname + '/3.txt', 'utf-8');
// console.log(result3);
// console.log('写在3后面');