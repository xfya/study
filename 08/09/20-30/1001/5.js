// 之前所学的任何东西都是中间件

// 应用级别的中间件
//   处理session 的中间件

// 使用 ejs  模板 来识别

// 
var express = require('express');
var app = express();
var ejs = require('ejs')

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('5', {})
})

app.listen(3000, () => {

})