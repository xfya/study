###  vue 中的使用

* 有2中使用方式  ：  单文件方式  ，.vue结尾的方式 ->  基于webpack 的使用

* 引包的方式 ：  企业中 用在双向绑定的   应用较少



###  解析css 
* 原理 
   通过解析css代码 ， 最终将css 作为js 中动态生成的style  标签并插入页面中
   还需要依赖style-loader 

   *  第一步 `npm  i css-loader  style-loader -D `
   *  进行配置    配置到webpack.config.js 中 期属性是一个一个的对象

   ###  autoprefixer-loader  自动补全


###   less  的使用   

*   依赖  less  less-loader

图片文件依赖于 懒加载的文件


###  less  中  跨文件引入 可以使用  @import 'wenjian/wenjianname'



webpack dev-server 
*  热替换  不通过刷新 替换css 内容

通过绝对路径  来监视文件  如果某一级路径中包含页数字符
那就无法监视 -{}   都不可以

--inline  
-- hot  热更新
--port  制定端口号
--open  自动打开





