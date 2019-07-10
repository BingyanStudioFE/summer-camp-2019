# JavaScript 高级程序设计

# JavaScript简介



JavaScript用途不仅仅是原来简单的数据验证，目前已经具备了与浏览器窗口及其内容等几乎所有方面交互的能力。

在当时的因特网的用户都使用速度仅为28.8Kbits/s的“猫”(调制解调器)上网，但网页的复杂度不断增加。想象一下：用户填写一个表单，单击提交按钮，然后等30s，最终服务器返回消息说有一个必填字段没有填好······

​	

于是Netscape公司决定开发一种客户端语言，用来处理这种简单的验证。

#### JavaScript实现

​	一个完整的JavaScript由3部分组成，

* 核心(ECMAScript)

* 文档对象模型(DOM)

* 浏览器对象模型(BOM)

  

<h5> ECMAScript</h5>

* 语法
* 类型
* 语句
* 关键字
* 保留字
* 操作符
* 对象

由ECMA-262定义，提供核心语言功能；

<h5>文档对象模型(DOM)</h5>

文档对象模型是针对XML但经过扩展用于HTML的应用程序编程接口(API)，

提供访问和操作位昂也内容的方法和接口

##### 浏览器对象模型（BOM）

开发者可以使用BOM控制浏览器显示页面以外的部分。

提供与浏览器交互的方法和接口

# 在html中使用javascript

### `<script>`元素

在网页中插入javascript的方法，就是使用`<script>`元素，

下面为一个javascript代码

><script type="text/javascript">
>    function sayHi(){
>        alert("Hi");
>    }
></script>

在代码的任何地方都不要产生`</script>`字符串，需要的话要使用转义字符`/`，例如`<\/script>`

<em>如果要通过javascript元素来包含外部javascript文件，那么src属性是必须的，这个属性指向一个外部javascript文件，例如：</em>

> <script type="text/javascript" src="example.js">  </script>

<strong> 需要注意的是，带有src元素不应该在其`<script>  </script>` 之间在包含额外的javascript代码。如果包含了嵌入的代码，则只会下载并执行外部的脚本文件，嵌入的代码就会被忽略。</strong>

<em>通过src还可以访问来自外部域的javas文件。例如：</em>

> <script type="text/javascript" src="http://www.somewhere.com/afile.js"></script>

利用这一点可以为不同的域来提供javascript文件。但是在访问的时候可能域的拥有者会更改javascript代码，使之变成恶意代码。所以要注意域的来源。

只要不存在defer和async属性，浏览器会按照`<script>`元素在页面的顺序依次执行。

### 标签的位置

传统的，`<script>`应该放在页面的`<head>`元素中。但是，这样对于网页来说，会提前下载需要的javascript文件，对于那些需要很多javascript文件的网页来说，就必须要等全部javascript下载完之后，才能加载页面内容，

所以现代Web一般把javascript放在`<body>`的最后，这样的话，会先加载页面内容，然后下载javascript。

### 延迟脚本

HTML为`<script>`标签定义了defer属性，<strong>只适用与外部脚本文件</strong>这个属性是让脚本执行时不会影响页面的构造。就是会在真个页面都结息玩之后在运行。因此，在`<script>`元素中设置的defer属性，相当于告诉浏览器立即下载，但延迟执行。

> <script type="text/javascript" defer="defer" src="example.js"></script>

理论上，这两个脚本会先与DOMContentLoaded执行，并且会按照顺序执行，但是实际上延迟脚本并不一定按照顺序执行，也不一定会在DOmContLoaded前执行，所以最好值包含一个延迟脚本。

**和放在<body>后面的效果一样“李英豪说”**

###　异步脚本

HTML5为`<script>`元素定义了async属性，这个属性用户改变处理脚本的行为，**与defer类似，只适用于外部脚本文件，并告诉浏览器立即下载文件**，但与defer不同的是，笔记为async的脚本并不保证按照制定他们的先后顺序执行。

> <script type="text/javascript" async src="example.js"></script>

​	确定脚本文件间的依赖关系非常重要，因为执行的顺序并不知道。

指定async属性的目的是不让页面等待两个脚本文件下载和执行，从而异步加载页面其他内容，

为此建议异步脚本不要在加载期间修改DOM。



##### `<noscript>`

* 浏览器不支持脚本
* 浏览器支持脚本但脚本被禁用

> <noscript> <p>本页面需要浏览器启用javascript</p></noscript>

# 基本概念

## 语法

### 区分大小写

###　标识符

* 第一个字符必须是字母、下划线_或一个美元符号$
* 其他字符可以是字母、下划线美元符号后数字

### 注释

`//`

`/* */`

#### 严格模式

要启动严格模式需要在顶部添加

`"use strict"`

也可以在函数上面添加

## 变量

用`var`操作符来定义变量

> var message;

这句哈定义了一个message的变量可以保存任何值（像这样未初始化的变量会保存一个特殊的值——undefined）

也可以直接初始化

> var message="hi";

声明了变量，并在变量中保存了一个字符串值"hi";像这样的初始化变量并不会指定变量的类型，所以可以更改变量的内容和类型。

> var message="hi";
>
> message= 100;

这样可以，但是不建议；

var为局部变量

如果不用var并且在函数后调用一次该函数后，就会成为全局变量

> function test(){
>
> ​	message="hi";//全局变量
>
> ​	}
>
> test();
>
> alert(meaasge);//"hi"

## 数据类型

### typeof操作符

返回值

* undefined——这个值未被定义
* boolean——这个值是布尔值
* string——这个值是字符串
* number——这个值是数值
* object——这个值是对象或null
* function——这个值是函数

> var message="some string";
>
> alert(typeof message);// string
>
> alert(typeof (message));//string
>
> alert(typeof 95);//number



