# 20190708

### JavaScript简介

JavaScript是一种**轻量级脚本语言**，也是一种**解释型语言** （在互联网环境下，浏览器中的解释器将直接读入JavaScript源代码并执行）

JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，**都要靠宿主环境（host）提供**，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API

*****

### JavaScript语法复习

#### 加载脚本

一般来说我们将\<script>放在HTML文档的最后，可以更快的加载页面

```html
<script src="example.js"></script>
```

#### 变量

```javascript
var mood = "happy";
var age = 33;
var sleeping = true;
```

#### 数组

```javascript
var years = [2000, 2001, 2002, 2004];			//初始化数组
var shaw = ["Shaw", 2000, false];				//数组中的元素可以是不同类型
var students = [];
students[0] = shaw;								//数组的元素也可以是另一个数组
```

#### 对象

```javascript
var shaw = Object();
shaw.name = "shaw";
shaw.year = 2000;
shaw.sex = false;

var shaw = { name:"shaw", year:2000, sex:false};
```

********

### JavaScript常见宿主环境及其全局对象

#### 浏览器环境

> DOM  文档对象模型

**document对象**

文档对象代表网页。我们通过访问document对象来访问html页面中的元素

`常用查找HTML元素的方法`

通过id查找

```javascript
document.getElementById(id);
```

通过标签名查找

```JavaScript
document.getElementsByTagName(tagName);
```

通过类名查找

```javascript
document.getElementsByClassName(className);
```

通过css选择器查找（不适用于IE8以及更低版本）

```javascript
document.querySelectorAll("");
```



**event对象**

Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。

事件通常与函数结合使用，函数不会在事件发生前被执行



另外DOM还有这些常见对象

- [Anchor](http://www.w3school.com.cn/jsref/dom_obj_anchor.asp)
- [Area](http://www.w3school.com.cn/jsref/dom_obj_area.asp)
- [Base](http://www.w3school.com.cn/jsref/dom_obj_base.asp)
- [Body](http://www.w3school.com.cn/jsref/dom_obj_body.asp)
- [Button](http://www.w3school.com.cn/jsref/dom_obj_pushbutton.asp)
- [Canvas](http://www.w3school.com.cn/jsref/dom_obj_canvas.asp)
- [Event](http://www.w3school.com.cn/jsref/dom_obj_event.asp)
- [Form](http://www.w3school.com.cn/jsref/dom_obj_form.asp)
- [Frame](http://www.w3school.com.cn/jsref/dom_obj_frame.asp)
- [Frameset](http://www.w3school.com.cn/jsref/dom_obj_frameset.asp)
- [IFrame](http://www.w3school.com.cn/jsref/dom_obj_iframe.asp)
- [Image](http://www.w3school.com.cn/jsref/dom_obj_image.asp)
- [Input Button](http://www.w3school.com.cn/jsref/dom_obj_button.asp)
- [Input Checkbox](http://www.w3school.com.cn/jsref/dom_obj_checkbox.asp)
- [Input File](http://www.w3school.com.cn/jsref/dom_obj_fileupload.asp)
- [Input Hidden](http://www.w3school.com.cn/jsref/dom_obj_hidden.asp)
- [Input Password](http://www.w3school.com.cn/jsref/dom_obj_password.asp)
- [Input Radio](http://www.w3school.com.cn/jsref/dom_obj_radio.asp)
- [Input Reset](http://www.w3school.com.cn/jsref/dom_obj_reset.asp)
- [Input Submit](http://www.w3school.com.cn/jsref/dom_obj_submit.asp)
- [Input Text](http://www.w3school.com.cn/jsref/dom_obj_text.asp)
- [Link](http://www.w3school.com.cn/jsref/dom_obj_link.asp)
- [Meta](http://www.w3school.com.cn/jsref/dom_obj_meta.asp)
- [Object](http://www.w3school.com.cn/jsref/dom_obj_object.asp)
- [Option](http://www.w3school.com.cn/jsref/dom_obj_option.asp)
- [Select](http://www.w3school.com.cn/jsref/dom_obj_select.asp)
- [Style](http://www.w3school.com.cn/jsref/dom_obj_style.asp)
- [Table](http://www.w3school.com.cn/jsref/dom_obj_table.asp)
- [TableCell](http://www.w3school.com.cn/jsref/dom_obj_tabledata.asp)
- [TableRow](http://www.w3school.com.cn/jsref/dom_obj_tablerow.asp)
- [Textarea](http://www.w3school.com.cn/jsref/dom_obj_textarea.asp)



> BOM  浏览器对象模型

**window对象：**

表示浏览器中打开的窗口



**navigator对象**

包含浏览器的信息



**screen对象**

包含有关客户端显示屏幕的信息

每个 Window 对象的 screen 属性都引用一个 Screen 对象。Screen 对象中存放着有关显示浏览器屏幕的信息。JavaScript 程序将**利用这些信息来优化它们的输出，以达到用户的显示要求**。例如，一个程序可以根据显示器的尺寸选择使用大图像还是使用小图像，它还可以根据显示器的颜色深度选择使用 16 位色还是使用 8 位色的图形。另外，JavaScript 程序还能根据有关屏幕尺寸的信息将新的浏览器窗口定位在屏幕中间。



**history对象**

包含用户访问过的url

history对象是window对象的一部分

属性：

```javascript
history.length();								//返回浏览器历史列表中的url数量
```

方法：

```javascript
histroy.back();									//相当于后退
history.forward();								//相当于前进
history.go(-2);									//相当于后退两次
```



**location对象**

包含当前url的信息

location对象是window对象的一部分



#### 非浏览器环境

**node.js** 

**mongoDB**



### JavaScript原型链机制 

JavaScript中除了基本类型外的数据类型，都是对象。由于没有类（class）的概念（因为JavaScript只是一种简易的脚本语言），为了**将所有的对象联系起来**，就有了**原型和原型链**的概念

每个实例对象（object ）都有一个私有属性（称之为 __proto__）指向它的原型对象（prototype）。该原型对象也有一个自己的原型对象 ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

例如：

Object有一个原型对象prototype

Array也有一个原型对象prototype

当我们新定义了一个Array的空对象时，我们可以直接访问一些属性

而JavaScript首先会检查我们要访问的属性是否直接存在于该对象上，如果不在，则会在`Array.prototype`中查找

若仍然不在，那么因为Array本身也是Object，则`Array.prototype.__proto __= Object.prototype`，就会接着想上查找

**以上原型与原型层层相链接的过程即为原型链**



### JavaScript异步特性

> JavaScript是单线程的，那么单线程怎么处理网络请求、文件读写等耗时操作呢？JavaScript是怎样处理异步问题的呢？

同步：Synchronous：在函数返回时，调用者就能拿到预期结果

异步：Asynchronous：在函数返回时，调用者还不能拿到预期结果，需要通过一定的手段才能获得

JavaScript的运行通常是在浏览器中进行的，具体由js引擎去解析和运行

**浏览器线程**

一个浏览器通常包含以下常驻线程：

* 渲染引擎线程 ：负责页面渲染
* JS引擎线程：负责JS的解析和执行
* 定时触发器线程：处理定时事件
* 事件触发线程：处理DOM事件
* 异步HTTP请求线程：处理HTTP请求

虽然JavaScript是单线程的，但浏览器内部不是单线程的。

一些I/O操作、定时器的计时和事件监听等都是由浏览器提供的其他线程来完成的

**消息队列与事件循环（event loop）**

![1562574574005](E:\BingYan\summer-camp-2019\O\Notes\images\%5CUsers%5CLucyS%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1562574574005.png)

如上图所示，左边的栈存储的是同步任务，就是那些能立即执行、不耗时的任务，如变量和函数的初始化、事件的绑定等等那些不需要回调函数的操作都可归为这一类。

右边的堆用来存储声明的变量、对象。下面的队列就是消息队列，一旦某个异步任务有了响应就会被推入队列中。如用户的点击事件、浏览器收到服务的响应和setTimeout中待执行的事件，每个异步任务都和回调函数相关联。

**JS引擎线程用来执行栈中的同步任务，当所有同步任务执行完毕后，栈被清空，然后读取消息队列中的一个待处理任务，并把相关回调函数压入栈中，单线程开始执行新的同步任务。**

JS引擎线程从消息队列中读取任务是不断循环的，每次栈被清空后，都会在消息队列中读取新的任务，如果没有新的任务，就会等待，直到有新的任务，这就叫**事件循环** 。



# 20190709

### ES6相关内容

#### **let命令**

声明变量

1. 声明的变量只在`let`命令所在的代码块内有效（传统的js支持函数级作用域）

```JavaScript
for (let i = 0; i < 10; i++)
```

2. 不能重复声明

#### **const命令**

声明常量

```javascript
const os = require("os");
```

*var的弊端：* 

1. *可以重复声明*
2. *没有块级作用域*

#### **解构赋值**

```JavaScript
let [a, b, c] = [1, 2, 3];

let [head, ...tail] = [1, 2, 3 ,4];
//head: 1
//tail: 2, 3, 4
```

保证左右两边结构一样

#### 函数

**箭头函数** 

常规写法：

```javascript
function(arguments)
{
    
}
```

箭头函数：

```javascript
(arguments) =>
{
    
}
```

箭头函数的作用：修复this

> 如果有且只有一个参数，()可以省略
>
> 如果函数内有且仅有1条语句且返回值为return，那么{}也可以省略

**参数展开**

1. 剩余参数（rest arguments）

   ...必须放在最后

2. 数组展开

   ```javascript
   let arr = [512, 1027, 125, 720];
   function sum(a, b, c, d, e)
   {
   	return a + b + c + d + e;
   }
   alert(sum(...arr));
   ```

#### 系统对象

##### **Array**

> map

参数：item，index

映射：1对1

遍历一遍，**必须有返回值**



> reduce

多对1

```javascript
//求和
let arr = [100, 98, 23, 89, 45, 68, 80, 74];
arr.reduce(function(tmp, item, index)
{
    alert(`第${index}次,${tmp}+${item}`);
    return tmp + item;
})
```



> forEach

参数：item，index

遍历，循环一遍，和for循环没区别

做一件事，无返回值



> filter

过滤

参数：item，index

```javascript
let arr = [100, 98, 23, 89, 45, 68, 80, 74];

let arr2 = arr.filter(function(item)
                      {
                        return item % 2 == 0;
                      })
```



##### **String**

> 字符串模板

```
`第${index}次,${tmp}+${item}`
```

> startsWith 和 endsWith

```javascript
let url = "http://www.lucyshaw.wang";
if(url.startsWith("http://") || url.startsWith("https://"))
    alert("Yes");
else
    alert("No");
```



##### **JSON**

轻量级数据交换格式

标准写法：（注意引号）

```json
let json = {"key0": "111", "key1": 222};
```

JSON 通常用于与服务端交换数据。

在向服务器发送数据时一般是字符串。

我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为用于传输的标准的字符串。

```javascript
let json = {a: 12, b: 5};
let str = JSON.stringify(json);
let json2 = JSON.parse(str);
console.log(str);
console.log(json2);
```



#### PROMISE

##### 异步操作

异步：多个操作一起进行，互不干扰

同步：操作一个个进行

异步响应快速但写起来恶心

同步写起来方便但响应慢

PROMISE解决了这个问题，对**异步操作进行了统一的封装**



### AJAX

#### XMLHttpRequest对象

用于在后台与服务器进行数据交换

也即我们可以在不重新加载整个网页的情况下对网页的某部分进行更新

```javascript
var variable = new XMLHttpRequest();
```

#### 向服务器发送请求

```javascript
xmlhttp.open("GET", url, true);
xmlhttp.send();
```

在open方法中，当async=true时

```javascript
xmlhttp.onreadtstatechange = function()
{
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        document.getElementById("").innerHTML = xmlhttp.responseText;
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
```

当async=false时，不要编写onreadystatechange函数

```javascript
xmlhttp.open("GET", url, true);
xmlhttp.send();
document.getElementById("").innerHTML = xmlhttp.responseText;
```


