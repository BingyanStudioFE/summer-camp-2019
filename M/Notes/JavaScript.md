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

  **1.以函数的形式的调用 this是window**

  **2.以方法的形式的调用 this是调用方法的对象**

  **3.以构造函数出现时，this就是新构造的这个对象**

  

  ```
  var name="全局";
  
  functiion fun(){
  
  console.log(this.name);
  
  }
  
  var obj
  
  {
  name:"孙悟空"，
  
  sayname:fun
  
  }
  
  var obj2
  
  {
  name:"沙和尚"
  
  sayname：fun
  
  }
  
  obj.sayname();
  ```

   

- 用工厂方法创建对象

  f`unction createPerson(name,age,gender){`

  

  ​     `var obj=new Object();`

  ​     `obj.name=name；`

  ​     `obj.age=age;`

  ​     `obj.gender=gender;`

  ​    `return obj;`

  `}`

  `var obj2=createPerson("abc","18","male");`

  `var obj3=createPerson("efg","14","female");`

  `console.log(obj2);`

  `console.log(obj3);`

使用工厂方法创建的对象，使用的构造函数都是Object，所以创造的对象都是object这个类型，无法区分多种对象。

- 构造函数

  构造函数与普通函数的区别就是调用方式的不同

  普通函数是直接调用，构造函数需要使用new的关键字调用。

  执行过程：

  1.立刻创建一个新的对象

  2.将新建的对象设置为函数中this，在构造函数中可以使用this来引用新建的对象

  3.逐行执行函数中的代码

  4.将新建的对象作为返回值返回

`

```
function Person(name,age,gender)`

`{`

`this.name=name;`

`this.age=age;`

`this.gender=gender;`



`}`

`var per = new Person("abc",11,"male");`

`var per1 = new Person("cde",13,"female");`

`console.log(per);`

`console.log(per1);
```

`

使用同一个构造函数的对象称为同一类的对象，使用**instanceof**可以检查一个对象是否是一个类的实例

`console.log(per instanceof Person);`

true/false

所有的对象都是object的后代，所以任何对象和object作instanceof都是true。

构造函数中的方法共享问题，避免资源浪费

`

```
`function Person(name,age,gender)`

`{`

`this.name=name;`

`this.age=age;`

`this.gender=gender;`

`this.sayname=fun;`

`}`

`function fun()`

`{`

   `alert(this.name);`

`}`

`var per = new Person("abc",11,"male");`

`var per1 = new Person("cde",13,"female");`

`console.log(per);`

`console.log(per1);`

`per.sayname();`

`per1.sayname();
```

`

**原型对象**

将方法定义在全局作用域中，污染了全局作用域的命名空间，也不安全。

原型 prototype

我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype。

这个属性对应着一个对象，这个对象就是我们所谓的原型对象。

如果函数作为普通函数调用prototype没有任何作用。

当函数以构造函数的形式调用时，他所创建的对象会有一个隐含的属性，指向该构造函数的原型对象，我们可以通过`__proto__`来访问

`console.log(mc.__proto__==MyClass.prototype);`

![1562649590433](C:\Users\15905\AppData\Roaming\Typora\typora-user-images\1562649590433.png)

`

```
function Person(name,age,gender)`

`{`

`this.name=name;`

`this.age=age;`

`this.gender=gender;`

`Person.prototype.a=123;`

`}`



`var per = new Person("abc",11,"male");`

`var per1 = new Person("cde",13,"female");`


```

`console.log(per.a);`

当我们访问对象的一个属性或者放法时，会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找。

以后构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，这样可以不用给每个函数分别添加，也不会影响全局作用域。

`console.log(name.hasOwnProperty)==TRUE?`

检查对象自身中含有该属性。

原型对象也是对象，所以他也有原型，当我们使用一个对象的属性或方法时，会现在自身中查找，自身中如果没有，去原型中找，原型再没有，去原型的原型中查找，直到找到Object对象的原型，object对象的原型没有原型。

to string方法

在页面打印一个对象是，实际上是输出的对象的to string()方法的返回值。

`

```
console.log(per)==console.log(per.toString())`

`[object object]`

`console.log(per.__proto__.__proto__.hasOwnProperty("toString"))`

`per.prototype.toString=function(){`

`return "Person[name="+this.name+",age="+this.age+",gender="this.gender"]"`}                                                     


```



- **call和apply**

这两个方法都是函数对象的方法，需要通过函数对象来调用。

fun.call(obj)

可以将一个对象指定为第一个参数，并成为执行时的this





### 垃圾回收

`var obj=new Object();`

`obj=null;`

当一个对象没有任何变量或属性对他进行引用，此时我们将永远无法操作该对象。此时称之垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢。

JS中自动垃圾回收机制。需要将不需要的对象设置为null，使其被自动回收。



## **（五）数组**

数组也是一种对象。

属性：arr.length

> 大于空，小于删除。



在数组的最后新添加一个数

> `arr[arr.length]=70；`

创建一个新数组

> `var arr = new Array(10);`
>
> `arr.hello="abc";`

用字面量创建一个新数组

> `var arr=[];`

array里面可以是任意数据类型

> `arr=["hello",1,true,null,undefined]`

也可以是对象

> `var obj={name:"abc"};`
>
> `arr[arr.length]=obj;`
>
> `console.log(arr[0].name);`

也可以函数

> `arr=[function(){alert(1)},function(){alert(2)}];`

- 四个方法

1. **push()**

   `arr.push("abc","bcd","efg");`

   元素自动添加到数组的末尾，

   返回值是增加长度以后的数组长度。

2. **pop()**

   删除并返回数组的最后一个元素

3. **unshift()**

   向数组的开头添加一个或多个元素，并返回新的数组长度。其他元素的索引依次后推。

4. **shift()**

   删除数组的第一个元素，并将被删除的元素作为返回值返回。



`

```
function Person(name,age,gender)`

`{`

`this.name=name;`

`this.age=age;`

`this.gender=gender;`

`}`


```

乱写的(数组遍历结合方法)

`

```
var per1 = new Person("cde",13,"female");
var per2=new Person("ghk",19,"male");
var per3=new Person("sdh",29,"female");



var arr= new Array(4);

arr=[per,per1,per2,per3];



function adult(arr) {

var newarr= new Array();



for(var i=0;i<arr.length;i++)

{

   if(arr[i].age>18)
    newarr.push(arr[i].name);

}
return newarr;

}

adult(arr);

console.log(newarr);


```

**for each方法**

> 只支持IE8以上的浏览器

像这样的函数，由我们创建但是不由我们调用，我们称为回调函数。数组中有**几个元素函数就会执行几次。**

`arr.forEach(function(){`

`console.log("hello")`

`})`;

数组的元素会以实参传递进来，我们可以定义形参，来读取这些内容。

`arr.forEach(function(a)){`

`console.log("a="+a);`

`}`;

浏览器会在回调函数中传递三个参数：

**1.当前正在遍历的元素**

**2.遍历的元素的索引**

**3.正在遍历的数组**

`function(value,index,obj)`



**slice方法**

从数组中提取元素

`arr.slice(start,end)`

参数：开始时的索引；结束时的索引（实际要的元素+1）。

该方法不会改变原数组，而将截取的元素封装到新数组并返回。

`var result=arr.slice(0,2);`

第二个参数可以不写，此时会截取之后所有元素。

可以传负值，-1表示最后一个元素，以此类推



splice

删除元素并向数组添加新元素

会影响原数组，并将指定元素从原数组中删除，并将删除的元素作为返回值返回。

参数：表示开始位置的索引，表示删除的数量。

**元素去重练习**

> ```
> var arr=[1,2,3,1,3,2,3,4];
> 
> function adult(arr)` 
> 
> {
> 
> for(var i=0;i<arr.length;i++)
> 
>    for(var j=i+1;j<arr.length;j++)
> {
> 
> if(arr[i]==arr[j])`
> 
> {
> 
> arr.splice(j,1);`
> 
> j--;`
> 
> }
> 
> }
> }
> 
> adult(arr);
> 
> console.log(arr);
> ```

​        concat方法

​         可以连接两个和多个数组，并将新数组返回，但不会对原数组产生影响。

​       join()

​       该方法可以把数组转换成字符串，不会对原数组产生影响

​      arr.join("-")可以指定连接符，没有指定就默认，连接。

​       reverse 反转数组 会修改原数组

​       arr.sort()

​       可以用数组中的元素进行排列，默认按照Unicode编码，从小到大排列。

​       但是排数字会出现问题。

arr.sort()中添加回调函数

```
arr.sort(function(a,b){`

`if(a>b)`

`{`

`return 1;`

`}`

`{`

`return -1;`

`}`

`else{`

`return 0;`

`}
```

`

//return a-b;直接返回a-b

- **String方法**

字符数组，具有数组的特性

string.length

charAt(返回指定位置的字符）

charAt（参数是索引）返回字符串中指定位置的字符

string.fromCharCode

indexOf()

查找字符串是否含有制定内容。如果有，会返回第一次出现的索引，没有返回-1；第二个参数表示出现的次数-1.

lastIndexOf从后往前找

substring 开始位置，结束位置不包括该位置，传递参数为负，默认是0，第二个小于第一个会自动交换。

substr 

参数1 开始位置的索引 参数2 截取的长度

str.split()根据某个符号把字符串拆成若干个数组

toUpperClass 



## （六）正则表达式

用于定义字符串的规则；检查字符串是否符合规则

- 创建正则表达式 var变量=new RegExp（”正则表达式“，匹配模式）

  > var reg=new RegExp(a);

- 检查一个表达式是否符合政策表达式的规则

  > var str ="a";
  >
  > var result =reg .test(str);

前一个参数”a”表示 字符串中必须要有a，后一个参数“i”表示忽略大小写，“g“表示全局匹配模式。

- 语法

  var 变量=/正则表达式/匹配模式

  > var reg="a"/"i"   

  使用字面量简单，使用构造函数灵活。

  检查字符串中有a或b

  var reg=/a|b/   var reg=/[ab]/

  检查字符串中是否有字母

  > reg=/[a-z]/i
  >
  > reg=/[A-z]/

  检查一个字符串中是否含有abc,adc,aec

  > reg=/a[bed]c/

  除了xx字符

  > reg=/[^ab}/

- 字符串与正则表达式相关的应用

  根据任意字母拆分

  split（）

  ```
  var result =str.split(/[A-z]/)
  ```

  ```
  var result=str.search("abcd")
  ```

  ```
  var result=str.match(/[A-z]/g);
  ```

  match以数组形式返回，封装在数组中返回

  ```javascript
  var result=str.replace("a","@-@");
  var result=str.replace(/a/g,"@-@");
  var result=str.replace(/a/g,"");
  ```

- 量词

  {}

  ```javascript
  var reg=/a{3}/    //量词只对前面的一个内容起作用
  var reg=/ab{3}c/  //ac之间正好3个b不多不少
  var reg=/ab{1,3}c/ //ac之间可以有1~3个b，","次以上
  ```

  +至少一个

  *0个或多个

  ？0个或一个

  ```javascript
  reg=/^a/;  //以a开头
  reg=/a$/;  //以a结尾
  reg=/^a$/; //只能是一个a
  reg=/^a|a$/;  //以a开头或者以a结尾
  ```

- 检查一个手机号是否符合规则

  ```javascript
  var phoneStr="15232541625";
  
  var phoneReg=/^1[3-9][0-9]{9}$/;
  
  console.log(phoneReg.test(phoneStr));
  ```

- 检查字符串中是否有.

  . 表示任意字符

  在正则表达式中用\做转义字符

  ```
  var reg=/\./; \\ \.表示.    \\表示一个\
  console.log(reg.test("b."));
  ```

  \w 任意字母、数字、_

  \W 除了w

  \d 有数字

  \D除了数字

  \s有空格

  \S除了空格

  \b 单词边界

  \B除了单词边界

  **检查边界**

  ```
  reg=/child/
  console.log(reg.test("hello children" ));  //true
  reg=/child\b/
  console.log(reg.test("hello children"));   //false
  ```

  去除空格

  ```
  var str="     hello        "    
  
  str=str.replace("/\s/g","");//法1
  console.log(str);
  
  str=str.replace(/^s*/,"");
  str=str.replace(/s*&/,"");
  str=str.replace(/^s*|s*$/g,"");
  ```

- 电子邮件的正则

  ```
  \w{3，} ( \. \w+)* @ [A-z0-9]+( \.[A-z]{2,5}){1,2}
  var emailReg=/^\w{3，}( \. \w+)*@[A-z0-9]+( \.[A-z]{2,5}){1,2}$/;
  ```

  

## （七）	其他对象

**date对象**

var d = new Date();

console.log(d);

封装为当时代码执行的时间

var=new Date("12/03/2016")

方法：

getdate()/getday()/getmonth/getfullyear

返回当前日期 日

getTime 获取当前时间戳，格林威治时间1970.1.1.0.0.0到目前时间需要的事件（含负值，需判断当前位置）

var start= Date.now();

var end=Date.now();

end-start 

**math对象**

Math是一个工具类，封装了数学相关属性和方法

Math.PI

Math.abs()

Math.ceil()向上取整/floor

Math.random()0~1之间

Math.round(Math.random()*x)

Math.round(Math.random()*(y-x)+x) 任意x-y

Math.max/min/pow...

包装类

把基本数据类型转化为对象

- 事件

  用户与浏览器之间的交互行为

  ```
  <button id="btn" onclick="alert('hello');">
  <button id="btn" ondblclick="alert('hello');">
  <button id="btn" onmousemove="alert('hello')";>
  //这种写法结构与行为耦合
  
  ```

  

  ```
  <button id="btn"></button>//定义一个按钮
  var btn = document.getElementById("btn");//获取按钮对象
  btn.onclick = function()
  {
  alert("hello");
  }
  ```

- 文档的加载

  自上而下执行代码。

  将js代码编写到页面的下部就是为了可以在页面加载完毕后再执行js代码。

  **onload函数**

   可以在head里写script，onload事件在window里绑定一个onload事件，事件对应的响应函数会在加载完成之后执行。这样可以确保我们的代码在所有的DOM对象已经加载完毕了。

```
  window.onload = function(){
  var btn = document.getElmentById("btn");
  btn.onclick = function(){
  alert("hello");
     };
  };
  ```

  最优的写下面：使页面加载速度变快。

  

  

###  dom查询



- 获取元素对象的方法

  通过document对象调用

  getElementById

  通过id属性获取一个元素节点对象

  getElementsByTagName()

  通过标签名获取一组元素节点对象

  getElementsByName()

  通过name属性获取一组元素对象属性

  ```
  var btn01=document.getElementById("btn01")
  btn01.onclick=function{
  var bj=document.getElementById("bj");
  alert(bj.innnerHTML);
  }
  
  
  var btn02 =document.getElementById("btn02");
  btn02.onclick = function(){
  var lis =document.getElementsByTagName("li");//返回一个类数组对象
  }
  for(var i=0;i<lis.length;i++){
  alert(lis[i].innerHTML);
  }
  
  var btn02=document.getElementById("btn03");
  btn03.onclick=function{
  var input=document.getElementsByName("gender");
  alert("inputs[i].innerHTML")//报错，input是自闭合标签，没有innerHT。
  }
  alert(input[i].name);
  alert(input[i].value);
   /*若要读取元素的节点属性，直接使用元素.属性名，但是class是JS的保留字不能采用这种方式，读取class属性时需要使用元素.className*/
   
  ```

  ## 图片切换练习string()
```
Number()

boolean()

var num=new Number(3)

var s=123

s=s.toString();

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style type="text/css">
    *{
        margin:0;
        padding:0;
    }
    #container{
          width:100px;
          margin:50px auto;
          padding:10px;
          background-color:blue;
          text-align:center;

    }

    </style>
    <script>
    window.onload=function(){
        var index=0;
        var prev=document.getElementById("prev");
        var next=document.getElementById("next");
        var img = document.getElementsByTagName("img")[0];
        var imgArr=["美食.png","音乐.png","汽车.png","游戏.png","直播.png"];
        prev.onclick=function()
        {
            index--;
            if(index<0)
            {
                index=imgArr.length-1;
            }
            img.src=imgArr[index];
        }
        next.onclick=function()
        {
            index++;
            if(index>imgArr.length-1)
            {
                index=0;
            }
            img.src=imgArr[index];
        }
    }
    </script>
<code></head>
<body>
    <div id="container">
       <img src="美食.png"/>
       <button id="prev">上一张</botton>
       <button id="next">下一张</button>
    </div>
</body>
</html></code>

```
### 获取父节点和兄弟节点

parentNode 当前节点的父节点

previousSibling

nextSibling
```
function myclick(idStr,fun)
        {
            //定义一个按钮专门用来绑定一个单机响应函数
            var btn=document.getElementById("idStr");
            btn.click=fun;
        }
  myclick("btn07",function(){
            var bj= document,getElementById("bj");
            var pn= bj.parentNode;
            alert(pn.innerHTML);//带标签
            alert(pn.innerText);//将html去除
        })
 ```
 ```
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>全选练习</title>
    <script type="text/javascript">
    window.onload=function()
    {
         //全选
         var checkedAllBtn = document.getElementById("checkedAllBtn");
         var items = document.getElementsByName("items");
        checkedAllBtn.onclick = function () {
            
            for (var i = 0; i < items.length; i++) {

                items[i].checked =true;
            }
        }
        console.log(checkedAllBtn);
        //全不选

        var checkedNoBtn = document.getElementById("checkedNoBtn");
         checkedNoBtn.onclick=function () {
            for (var i = 0; i < items.length; i++) {

               items[i].checked = false;
            }

            }

           //反选
      
            var checkedRevBtn = document.getElementById("checkedRevBtn");
            checkedRevBtn.onclick= function() {

            for (var i = 0; i < items.length; i++) {
               if(items[i].checked==true)
               {
                items[i].checked = false;

               }else 

               {
                   items[i].checked=true;
              
               }

            }
        }


//全选框
var checkedAllBox=document.getElementById("checkedAllBox");
     checkedAllBox.onclick=function()
     {

      for(var i=0;i<items.length;i++)
      {
          items[i].checked=checkedAllBox.checked;   
      }

     }
   //反选
      
            var checkedRevBtn = document.getElementById("checkedRevBtn");
            checkedRevBtn.onclick= function() {

            for (var i = 0; i < items.length; i++) {
               if(items[i].checked==true)
               {
                items[i].checked = false;

               }else 

               {
                   items[i].checked=true;
              
               }

            }
        }


//全选框
var checkedAllBox=document.getElementById("checkedAllBox");
     checkedAllBox.onclick=function()
     {

      for(var i=0;i<items.length;i++)
      {
          items[i].checked=checkedAllBox.checked;   
      }

     }
        
   
//如果四个多选框都选中，checkedAllBox也选中
    for(var i=0;i<items.length;i++)
    {
        items[i].onclick=function(){
            checkedAllBox.checked=true; 
            for(var j=0;j<items.length;j++)
            {
             
              if(!items[j].checked)
               {
               checkedAllBox.checked=false;
               }
            }
            
        }
    }
    }

       
    </script>
 
</head>

<body>
    <form methed="post" action="">
        你爱好的运动是？<input type="checkbox" id="checkedAllBox" />全选/全不选
        <br />
        <input type="checkbox" name="items" value="足球" /> 足球
        <input type="checkbox" name="items" value="篮球" /> 篮球
        <input type="checkbox" name="items" value="羽毛球" /> 羽毛球
        <input type="checkbox" name="items" value="乒乓球" /> 乒乓球
        <br />
        <input type="button" id="checkedAllBtn" value="全选" />
        <input type="button" id="checkedNoBtn" value="全不选" />
        <input type="button" id="checkedRevBtn" value="反选" />
        <input type="button" id="sendBtn" value="提交" />
    </form>
</body>

</html>
```
###dom剩余方法
```
var body= document.body//获取body对象

var html=document.documentElement;//获取标签

document.all;//获取页面中所有的元素

var box1=document.getElementByClassName("box1");//获取页面中的一组对象，该方法不支持IE8以上的。

var divs=document.getElementByTagName("div");//class为box1中所有的div

document.querySelector();//需要一个选择器的字符串作为参数，可以根据css选择起来查询元素节点对象
document.querySelector(".box1 div");
document.querySelector(".box1");

var box1=document.querySelectorAll(".box1");//IE8以上，不同是它会将所有的对象封装到一个数组里。
```
###DOM增删
```
//增加一个节点
window.onload=function(){
function myclick(idStr,fun)
        {
            //定义一个按钮专门用来绑定一个单机响应函数
            var btn=document.getElementById("idStr");
            btn.click=fun;
        }
myclick("btn01",function()
{
var li=document.createElement("li");//创造一个li节点
var gzText=document.createTextNode("广州");//创造一个文本节点
li.appendNode=gzText//将text节点作为li的子节点
var city= document.getElementById("city");
city.appendNode=li;//将li作为city的子节点
//添加子节点许添加直至其父节点可以在页面中显示出来
})
}


//在制定的子节点前插入新的节点
window.onload=function(){
function myclick(idstr,fun)
{
var btn=document.getElementById("idStr")
btn.click=fun;
}
myclick("btn02",function())
{
var li=document.createElement("li");
var gzText=document.createTextNode("广州")；
li.appendNode=gzText
city.insertBefore(li,bj);
}

}

//替换兄弟节点
window.onload=function(){
function myclick(idstr,fun)
{
var btn=document.getElementById("idStr")
btn.click=fun;
}
myclick("btn02",function())
{
var li=document.createElement("li");
var gzText=document.createTextNode("广州")；
li.appendNode=gzText;
var city=document.getElementById("city");
city.replaceChild(li,bj);//被替换的在后面
}

}

//删除兄弟节点
window.onload=function(){
function myclick(idstr,fun)
{
var btn=document.getElementById("idStr")
btn.click=fun;
}
myclick("btn02",function())
{
var city=document.getElementById("city");
city.removeChild(li,bj);//被替换的在后面
}

}

//如果不知道父节点想要删除某个子节点
bj.parentNode.removerChild(bj);

//添加一个节点的另外一个方法(不建议使用)
city.innerHTML+="<li>广州</li>""

//混合使用
var li=document.getElementId("li");
li.innerHTML="广州";
var city=document.getElementId("city");
city.appendNode=li;
```
###员工表练习
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        window.onload = function () {
            var allA = document.getElementsByTagName("a");
            //删除记录
            for (var i = 0; i < allA.length; i++) {
                allA[i].onclick = function () {
                    //点击超链接会跳转页面，这是超链接的默认行为,因此要return flase
                    var tr = this.parentNode.parentNode;
                    var name = tr.getElementsByTagName("td")[0].innerHTML;
                    //弹出提示框
                    var flag = confirm("确认删除" + name + "吗？");
                    if (flag) {
                        tr.parentNode.removeChild(tr);
                    }


                }
            }
            var add = document.getElementById("add");
            add.onclick = function () {

                var name = document.getElementById("empName").value;
                var email = document.getElementById("email").value;
                var salary = document.getElementById("salary").value;


                var tr = document.createElement("tr");
                var nameTd = document.createElement("td");
                var emailTd = document.createElement("td");
                var salaryTd = document.createElement("td");
                var aTd = document.createElement("td");

                var a = document.createElement("a");
                a.href = "javascript:;"
                a.onclick = function () {
                    var allA = document.getElementsByTagName("a");
                    //删除记录
                    for (var i = 0; i < allA.length; i++) {
                        allA[i].onclick = function () {
                            //点击超链接会跳转页面，这是超链接的默认行为,因此要return flase
                            var tr = this.parentNode.parentNode;
                            var name = tr.getElementsByTagName("td")[0].innerHTML;
                            //弹出提示框
                            var flag = confirm("确认删除" + name + "吗？");
                            if (flag) {
                                tr.parentNode.removeChild(tr);
                            }


                        }
                    }

                }

                var nameText = document.createTextNode(name);
                var emailText = document.createTextNode(email);
                var salaryText = document.createTextNode(salary);
                var deleteText = document.createTextNode("Delete");

                nameTd.appendChild(nameText);
                salaryTd.appendChild(salaryText);
                emailTd.appendChild(emailText);
                a.appendChild(deleteText);
                aTd.appendChild(a);

                tr.appendChild(nameTd);
                tr.appendChild(salaryTd);
                tr.appendChild(emailTd);
                tr.appendChild(aTd);

                var employeeTable = document.getElementById("employeeTable");
                var tbody = employeeTable.getElementsByTagName("tbody")[0];
                tbody.appendChild(tr);




            }


        }
            //添加员工的信息

    </script>
</head>

<body>
    <table id="employeeTable">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>&NonBreakingSpace;</th>
        </tr>
        <tr>
            <td>Tom</td>
            <td>Tom@tom.com</td>
            <td>5000</td>
            <td><a href="javascript:;">Delete</a></td>

        </tr>
        <tr>
            <td>Jerry</td>
            <td>Jerry@sohu.com</td>
            <td>8000</td>
            <td> <a href="javascript:;"> Delete</a></td>

        </tr>
        <tr>
            <td>Bob</td>
            <td>Bob@sohu.com</td>
            <td>10000</td>
            <td><a href="javascript:;">Delete</a></td>

        </tr>
    </table>
    <table>
        <tr>
            <td class="word">Name: </td>
            <td class="inp">
                <input type="text" name="empName" id="empName" />
            </td>
        </tr>
        <tr>
            <td class="word">Email: </td>
            <td class="inp">
                <input type="text" name="email" id="email" />
            </td>
        </tr>
        <tr>
            <td class="word">Salary: </td>
            <td class="inp">
                <input type="text" name="salary" id="salary" />
            </td>
        </tr>
        <tr>
            <td colspan="2" text-align="center">
                <button id="add" value="abc">Submit</button>
            </td>
        </tr>

    </table>
</body>

</html>
```
