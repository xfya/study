exports.username = "李四";


exports.age = 30;
exports.sayHello = function() {
    console.log('我是李四')
}


// 不能直接给 exports 赋值，否则在外部拿不到要导出的成员


// exports = {
//     "name": 'xfa'
// }