var express = require('express');
var moment = require('moment')
var app = express();

var fs = require('fs')
var path = require('path')
    // 托管静态资源文件

app.use('/node_modules', express.static('node_modules'));
// 设置模引擎
app.set('view engine', 'ejs')
    // 设置模板路径
app.set('views', './views')
    // app.get('/', (req, res) => {
    //     res.render('index')
    // })


// var indexRouter = require('./router/indexRouter.js');
// // 注册路由
// app.use(indexRouter)

// // 注册 用户路由
// var userRouter = require('./router/userRouter.js')
// app.use(userRouter)

// 问题由于封装很多的路由模块    需要每次手动挂载路由  并注册
// 解决办法   想办法让他自己注册/router 下所有的路由模块
// 使用fs.readdir  方法  读取 router 下所有的文件使用循环导入每个
// 文件

fs.readdir(path.join(__dirname, './router'), (err, filename) => {
    if (err) throw err;

    filename.forEach(filename => {

        var routerPath = path.join(__dirname, './router/', filename)
            // console.log(routerPath)
        var routermodul = require(routerPath)
        app.use(routermodul)
    })
})


var bodyParser = require('body-parser')
    // var urlencodedParser = 注册解析表单数据的中间件
    // 
app.use(bodyParser.urlencoded({ extended: false }))



app.listen(3003, function() {
    console.log('server is runing...' + moment(new Date()).format('YY-MM-DD HH:mm:ss'))
})