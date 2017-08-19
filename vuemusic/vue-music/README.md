# vue-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


####  0818 知识进步点

### 1   encodeURIComponent（） encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。 

 substring() 方法用于提取字符串中介于两个指定下标之间的字符 一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。

### 2  Object.assign()  方法用于把一个或多个源对象的可枚举属性值复制到目标对象中，返回值为目标对象。

http://www.cnblogs.com/heiye168/p/5689006.html

 Object.assign 方法只复制源对象中可枚举的属性和对象自身的属性。它在源对象上使用 [[Get]]， 在目标对象上使用 [[Set]]， 会调用 getter 和 setter。它不适合用于把一个包含 getter 的对象属性合并到一个原型中。如果要把属性定义连同可枚举性复制到一个原型中，应该使用 Object.getOwnPropertyDescriptor() 和 Object.defineProperty() 方法。

String 和 Symbol 类型的属性都会被复制。

当发生错误时，例如有一个属性是不可写的，将会抛出一个 TypeError 错误，目标对象保持不变。

注意 Object.assign() 源对象为 null 或 undefined 时不会报错。

原型链上的属性和不可枚举的属性无法复制

var obj = Object.create({foo: 1}, { // foo 在 obj 的原型链上
  bar: {
            value: 2  // bar 是一个不可枚举的属性.
      },
  baz: {
             value: 3,
             enumerable: true  // baz 是 obj 自身的一个可枚举属性
      }
  });

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }，原型链上的属性和不可枚举的属性没有复制到

####ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。

重新复习下新知识：基本数据类型有6种：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

这里新添加了一种：Symbol

注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象

Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。