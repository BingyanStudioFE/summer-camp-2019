# JAVASCRIPT

## （—）简介

### 1-1历史简介

livescript Jscript JavaScript ecma

 处理网页的前端验证——》网页的任何动态效果——》

实现 三种标准

EMCA DOM BOM

### 1-2 js特点

`解释性语言` 不用编译

类似c和java

动态语言

基于原型的面向对象

## （二）JS基础

### 2-1hello world

- js可以写在script 标签里

<script type="text/javascript">
     alert("hello world");
     document.write("look here!");
        </script>

**输出语句**：

alert 跳出警告框

document.write 在页面中跳出一个信息

concole.log 向控制台输出一个内容（开发者工具）

从上到下执行

- js编写在标签的onclick属性中

  当我们点击按钮是，js代码才会执行

    `<button onclick="alert('hello world');">同城`

    `</button>`

- js可以写在超链接的href属性中，这样点击超链接时会执行JS代码

   `<a href="javascript:alert('hello world');">点一下试试</a>`

  `<a href="javascipt:;">戳这里</a>`

  虽然可以写在标签的属性里，但是结构与行为耦合，不方便维护，不推荐使用

- js可以写在外部文件中

  然后通过script标签引入。

  写到外部文件中可以在不同的页面中同时引用，也可以利用浏览器的缓存机制。

  script标签会优先引用外部文件，如有外部文件，不会执行内部代码，如需执行，新添加一个script标签。

1-2 注释

/**/ 多行

//单行

### 2-2 语法

- 严格区分大小写
- 每条语句；结尾（浏览器会自动添加不过会浪费系统资源，也可能加错分号）
- 忽略空格和换行

### 2-3字面量和变量

- 字面量：不可改变，如 1234 ，可以直接使用但是一般不会直接使用。

- 变量：可以改变。js 用var关键字申明变量

  `var a；（申明）`

  `a=123；（变量赋值）`

  `var a=123;`

  `console.log（a）；`

### 2-4 标识符

- 变量名 函数名 属性名

- 标识符 字母 数字 _ $
- 不能以数字开头
- 不能是ES中的保留字或关键字
- 驼峰命名法

### 2-5 数据类型

- 字符串 string

  需要使用引号引起来,双引号和单引号都可以，但是不能混用。

  再字符串中可以通过\做转义字符 

  `var str="xxxx"`

  `console.log("xxxx")=console.log(str)`

  `str="我说：\“今天天气真好“ ”`

  `str= '我说：”今天天气真好“ '`

  \可以换行，\t和c一样表示一个制表符，打印\用`\\`

- 数值 number

  number.MAX_VALUE

  NaN not a number

  可以进行整数计算但是浮点数计算不精确

- 布尔值 boolean

  `var bool=true;`

- 空值Null

  专门用来表示为空的对象

- 未定义undefined

  当申明变量，且未赋值时

- object（引用数据类型）

- 可以用typeof检查数据类型

  `console.log(typeof a)`输出数据类型

### 2-6强制转换



1.调用 被转换数据类型的toString方法(null undefined除外)

`var a = 123;`

`var b = a.toString();`

2.调用string函数 null undefined亦可

`a=string(a);`

3.调用number函数 

只有数字的字符串才能转换成数字。

非数字内容和undefinedNaN。

”“空串转换成0。

布尔转成 1 0。

null也转成 0。

4.parseInt

将字符串中有效的数字

5.parsefloat

取出”123.456“，可以取小数

6.boolean函数

`a=boolean(a)`

### 2-7 运算符

对于不是number的数据类型，将其先转换为number

对其他数据加+

s=+s将其转换为number

s=1++”2“+3

++ -- 

二进制运算

num.tostring(2)

&|<<>>

全等和不全等

全等操作数

===未经过转换

==经过转换相等

### ？：

2-8 if语句/do while/while/switch/for

### 2-9 `for-in`语句

## （三）对象

object 引用数据类型，类似于结构体。

## 3-1 对象类型

### 1.内建对象

由ES标准定义的对象，在任何的ES的实现中都可以使用

Math String Number Boolean Function

### 2.宿主对象

由JS开发环境提供的对象，目前来讲主要指由浏览器提供的对象。

比如BOM DOM

### 3.自定义对象

由开发者自己定义的。

## 3-2 创建一个对象

`var obj=new object();`

`console.log(obj);`

在对象中保存的值叫做属性

- **向对象中添加属性的语法：对象.属性名=属性值；**

`obj.name="abc";`

`obj.age="18"`

- **在对象中读取属性名**

``console.log(obj.age);`

- **对象的属性名不强制要求遵循标识符的规范**

`obj.var`

`obj.["123"]`

- **属性值可以是任意的数据类型**

  也可以是一个对象

  `obj2.name="abc";`

  `obj.text=obj2;`

  `obj.text.name="abc"`

- 通过in 运算符可以i按察一个对象里是否还有指定的属性值

  `console.log("text" in obj`)`

  输出bool值

- 基本数据类型和引用数据类型的区别

  Js中的变量都是直接在栈内存的，基本数据类型的值都是再栈内存中存储，值与值独立存在。

  对象保存在堆内存，复制对象时，对同一个变量引用另一个也会发生变化。

  ![1562574847616](C:\Users\15905\AppData\Roaming\Typora\typora-user-images\1562574847616.png)

new两个不同的对象

obj==obj2，返回false，因为地址不同。

- 使用对象字面量来创建一个对象

  var obj={};

  obj.name="shs"

`obj=`

`{`

`name:"shs",`

`age:"28",`

`gender:"man"`

`}`

name可以不加”“，但是用特殊的属性要加”“

- **函数作为对象的属性——方法**

  `var obj= new object();`

  `obj.name="abc";`

  `obj.age=18;`

  `obj.sayName=function(){`

  `console.log(obj.name);`

  `}`

`obj.sayName();`

sayName是obj的方法

- for in语句

  `for(var **n** in **obj**){`

  `console.log(n)`

  `}`

  n是属性名 obj是对象名

​      obj[n]

## （四）函数

### 4-1函数

函数也是一种对象，可以封装功能执行某些代码。函数具有所有普通对象具有的功能。

- **创建函数**

1. **var fun = new Function(){};****

2. **function sum(num1,num2)`**

   **`{`** 

   **`return num1+num2`**

   **`}**`

   形参个数可选

   - **调用函数**

     fun();

   **return 后的语句不执行** return语句后不跟任何值相当于返回undefined，不写return

   也会返回undefined

   **函数图的参数在内部用一个数组来表示，函数体可以通过对arguments对象来访问这个参数数组**

   `function sayHi()`

   `{`

   `alert("hello"+argument[0]+","+argument[1])`;

   `}`

   **通过访问argument的length属性能知道有几个变量传入了函数**

   `function howmany`

   `{`

   `alert(arguments.length);`

   `}`

   `howmany(45,3);`

   **命名和参数也可以一起使用**

   命名相同的函数后面的会覆盖前面的函数。

   多余的实参不会被赋值

   如果实参的个数小于形参，多余的不会被赋值undefined

- 创建一个对象的函数，实参可以是任意的数据类型

   function setName(obj)

- 创建一个函数的函数。注意fun（a）和fun（a（））的区别

-  在函数内部修改参数的值，但原始的引用仍然保持不变，在函数内部单边obj变量引用的是另一个局部对象，这个局部对象会在函数执行完毕后立即被销毁。

- 作用域链 try-catch语句的catch块

- with语句

- 立即执行函数

  `(function{`

  `alert("this is a function")`

  `})`

  `();`

- **作用域**

  **全局作用域**

  **函数作用域**

  -   全局作用域 

      作用时间：页面打开时创建，关闭时销毁。

      有一个**全局对象window**，它代表的是一个浏览器的窗口，由浏览器创建，可以直接使用。

​                 在全局变量中所有的变量都会作为window变量的属性 ;创建的函数会作为window变量的方法。

​                 **变量的申明提前**

​                 使用var关键字申明的变量，会在所有代码执行之前被申明（只申明var a，不会赋值）

​                 **函数的声明提前**    

​                 function fun(){}会在代码执行之前     

​                在函数里面访问全局变量可以加window

​                 在函数作用域中也会有申明提前，在函数中没有使用var关键字会被定义为全局变量

- this

  解析器在调用函数每次都会像函数内部传递一个隐含的参数，这个隐含的参数就是this。

  this指向一个对象，这个对象称为函数的上下文。

  根据函数的调用方式不同，this会指向不同的对象。

- 1.以函数的形式的调用

- 2.以方法的形式的调用

​                         

​                  




