console.log("ok");
var a = 10;
var b = 20;
//   d当模块中向外暴露一些成员的时候有2中方法

// 第一种   通过global   相当于浏览器中的wondow
// 第二种 通过 global  


global.a = a;
global.b = b;
global.sayHello = function() {
    console.log(a)
}