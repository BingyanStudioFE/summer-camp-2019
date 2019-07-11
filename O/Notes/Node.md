# 20190709

### node是什么？能干嘛？

简单来说，Node.js就是运行在服务端的JavaScript

js代码写好后，我们可以直接通过软件解析运行

Node.js是JavaScript的运行环境，可以解析JavaScript代码

作用：我们可以直接通过js些项目（接口、爬虫、桌面应用、聊天系统等）



### 模块

在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。

为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在Node环境中，一个.js文件就称之为一个模块（module）。

在node.js中，各个模块可以使用相同的变量名

模块示例：见	<a href="../Tasks/node/test.js/">test.js</a>   <a href="../Tasks/node/hello.js/">hello.js</a>

任务：输出彩虹色“Geek is the new sexy” 见<a href="../Tasks/node/task1/index.js">index.js</a> 

#### **官方模块**

os/url/http/fs

##### os模块

<a href="../Tasks/node/os模块的应用.js">官方模块OS的应用</a>

##### fs模块

<a href="../Tasks/node/fs模块的应用.js">官方模块fs的应用（读文件、写文件）</a>

写文件

```javascript
const fs = require("fs");


//利用fs模块写入文件
//function是回调函数
fs.writeFile("./node/fs_write.txt", "Hello, Shaun", function(err)
{
    //err有数据 则写入失败
    //err没数据 则写入成功
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("Succeeded");
})
```

读文件

```javascript
//读文件时要加第二个参数：编码(可选参数)
//否则会输出原始的buffer
fs.readFile("./node/fs_write.txt", "utf8", function(err, data)
{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data);
})
```

##### http模块

传统的HTTP服务器会由Aphche、Nginx、IIS之类的软件来担任，但是nodejs并不需要

**nodejs提供了http模块，自身就可以用来构建服务器**

而且http模块是由C++实现的，性能可靠。



#### **第三方模块**

moment/mysql

#### **自定义模块**

> 模块规范（CommonJS）
>
> 1. 一个文件就是一个模块
> 2. 通过exports/module.exports到处模块中的成员
> 3. 通过require加载模块

### npm

node package manager

当不加`-g`参数时，npm默认安装到当前文件夹下

加了才是全局安装

# 20190710

### HTTP

#### TCP/IP协议族分层

应用层

传输层

网络层

链路层

利用TCP/IP协议进行网络通信时，会通过分层顺序与对方进行通信

**发送端从应用层往下走，接收端从链路层往上走**

> 1. 发送端在应用层（HTTP协议）发出一个想看某个web页面的HTTP请求
> 2. 传输层（TCP协议）把从应用层接收到的数据（HTTP请求报文）进行分割，并在各个报文上打上标记序号以及端口号
> 3. 网络层（IP协议）增加MAC地址（通信目的地）后转发给链路层
> 4. 接收端的服务器在链路层接收到数据，按序往上层发送，一直到应用层

当传输到应用层，服务端才算真正接受到从客户端发送过来的HTTP请求



