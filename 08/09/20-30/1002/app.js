var express = require('express');
var moment = require('moment')
var app = express();
var router = require('./router/indexRouter.js')
    // 注册自己的路由

// 托管静态资源
app.use('/node_modules', express.static('node_modules'))
    // 设置模板引擎
app.set('view engine', 'ejs')
    // 导入解析body 数据的中间件
    // 导入解析body 数据的中间件
var bodyParser = require('body-parser')

// 注册解析body 数据的中间件
app.use(bodyParser.urlencoded({ extended: false }))




app.use(router)
app.listen(3001, () => {
    console.log('server  is ruing...' + moment(new Date()).format('YY-MM-DD HH:mm:ss'))
})