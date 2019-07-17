# Node

Node.js是一种JavaScript的运行环境，使得JavaScript能够脱离浏览器运行。

### Node.js是干什么的？

好处：具有非阻塞，事件驱动I/O等特性，从而让高并发在轮询（Polling）和comet构建的应用中成为可能。

原理：

- 非阻塞：JavaScript是一种单线程的编程语言，不能进行同步I/O操作，只能异步I/O操作。nodejs在处理一个请求时，把这个请求传给其他进程（比如传给一个数据库查询的进程），转而处理下一个请求。等前面的请求处理完成之后再从时间队列取出事件极其回调执行。
- 事件驱动：nodejs有一个事件队列，每个进来的请求处理完就被关闭然后继续服务下一个请求，当请求完成后又会和回调一起被推进处理队列，然后通过一种循环方式检测队列事件有没有变化，有就执行相应回调函数，没有就跳过到下一步。

### npm

npm是Node.js的包管理工具。我们在Node.js上开发时，会用到很多别人写的JavaScript代码。通过npm这一管理工具，大家把自己开发的模块打包后放到npm官网上，使用时直接通过npm安装就可以使用，不用管代码存在哪，应该从哪下载。

除此之外，我们要使用的模块A可能依赖于另外一个模块B，而模块B又依赖于模块X、Y……npm可以自动下载并管理这些依赖关系。

### 命令行模式和Node交互模式

1. 在命令提示符窗口输入node指令可以进入交互模式，可以输入JavaScript代码立刻执行；
2. 在命令提示符窗口输入```node hello.js```可以运行一个```.js```文件

每个JavaScript文件都应该使用严格模式，在一个JavaScript文件写上```'use strict';```很麻烦，我们可以直接给nodejs传递一个参数，让node直接为所有js文件开启严格模式：

```
node --use_strict hello.js
```

### 模块

为了编写可维护的代码，我们把函数分组，放到不同的文件里，这样每个文件包含的代码就相对较少。在Node环境中，一个.js文件就称为一个模块（module）。

###### 好处：

代码的模块化有利于代码的**维护**和**复用**，还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此在编写模块时不必考虑名字会与其他模块冲突。



###### 写模块：

例如，我们编写一个hello.js文件作为一个名为hello的模块：

```js
'use strict';

var s = 'Hello';
function greet(name) {
    console.log(s+','+name+'!');
}
module.exports=greet;
```

最后一行把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了。

###### 用模块：

那么其他模块使用greet函数的方法是：

```javascript
'use strict';

//引入hello模块
var greet = require('./hello');
var s = 'Stephen';
greet(s);//Hello,Stephen!
```

###### require函数：

引入模块用的require函数：

```js
var greet = require('./hello');
```

引入的模块作为变量保存在greet变量中，这里的greet变量就是在hello.js中用```module.exports=greet;```输出的greet函数。

###### 注意事项：

1. 在使用require()引入模块的时候，注意相对路径要加“./”，如果只写模块名的话，Node会依次在内置模块、全局模块和当前模块中查找hello.js，可能会报错。
2. 模块输出的变量可以是任意对象、函数、数组等。
3. 