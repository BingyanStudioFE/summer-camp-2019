#  JavaScript

### 语言的性质

这门编程语言称为JavaScript，语言标准被称为ECMAScript。名字不同是因为“Java”被Oracle注册为商标，目前只有Mozilla被正式允许使用“JavaScript”名称。当前的JavaScript版本是ECMAscript5.

### 发展历史

- JavaScript借鉴了**Java**的语法和如何区分原始值和变量。

  > 原始值包括boolean、number、string、null和undefined；其他值都是对象。原始值和对象区别在于每个对象都有一个独一无二的标志，仅与自己相等。

- JavaScript的函数设计受到scheme和AWK的启发——他们（的函数）都是第一类（first-class）对象，并在语言中广泛使用。**闭包**使他们（函数）变成强大的工具。
- Self影响了JavaScript独一无二的面向对象（OOP）风格。JavaScript的特性是可以直接创建对象，不需要先创建类。
- Perl和python影响了JavaScript字符串，数组和正则表达式操作。

### 语法

两种语法类型：**语句**和**表达式**

- 语句通常“做某些事”。如：var foo语句声明了一个名为foo的变量。
- 表达式产生值。通常位于赋值操作的右边，如：3*7

#### 分号

语句块结尾不需要分号，但有一种情况下语句块后有分号——函数表达式后面的函数体块：

> var f = function ()  {   };

#### 注释

单行注释和多行注释，和Java一样

#### 标识符

标识符是事物的名字，第一个字母可以是任何Unicode字符、$或_ 。但首字符不能是数字。不能作变量名的保留关键字有：

> arguments break case catch class const continue debugger default delete do else enum eval export extends false finally for function if implements import in instanceof interface let new null package private protected public return static super switch this throw true try typeof var void while with yield

### 值

js的**基本**数据类型有 布尔、数字、字符串、数组等。js中每个值都有**属性**。每个属性有一个键（或名字）和一个值，可以使用点（.）操作读取属性。

例如字符串有属性length：

> &gt;'abc'.length
>
> 3

点操作符不仅可以获取值的属性值，还可以为属性赋值。

#### 原始类型值和对象

- 原始值：boolean,number,string,null和undefined
- 其他的值都为对象

每个对象都有一个独一无二的标志，仅与自己相等。

```javascript
> var obj1 = {};  // 一个空对象
> var obj2 = {};  // 另一个空对象
> obj1 === obj2
  false
> obj1 === obj1
  true
```

#### 原始类型值

- 布尔类型：true，false
- 数字类型：293，43.234
- 字符串类型：'abc',"abc"
- 两个无值：undefined,null

原始值特征：

- 比较：用三个等号（===）比较

- 原始值的属性是固定的，无法添加或移除

  获取未知属性总返回undefined

#### 对象

- **简单对象**（类型是Object）能通过对象字面量创建：

  {firstName:'Jane',lastName:'Doe'}

  这个对象就有了两个属性：firstName和lastName

- **数组**（Array）能通过数组字面量创建：

  ['apple','banana','cherry']

  通过数字索引访问数组元素，索引从0开始

- **正则表达式对象**（RegExp）能通过正则表达式字面量创建：

  /^a+b+$/

- 你可以通过构造函数定义新的对象类型。

对象的特征：

- 对象的引用可以比较，也就是说每个值有自己的标识符，标识符可以进行比较。

  ```js
    > {} === {}  // 两个不同的空对象
      false
  	
    > var obj1 = {};
    > var obj2 = obj1;
    > obj1 === obj2
      true
  ```

- 默认可以更改

  ```js
  >var obj = { };
  >obj.foo=123;
  >obj.foo
  123
  ```

  #### 包装类型

每一种原始类型值有一个对象类型与之关联，称之为包装类型。例如boolean的包装类型是Boolean，布尔值从Boolean.prototype上获取方法：

```js
  > true.toString === Boolean.prototype.toString
	true
```

包装类型有实例，它们的实例是对象，但不常用，常用的是将它们作为函数调用，可以将值转换为原始类型。

```js
> Number('123')
  123
> String(true)
  'true'
```

#### typeof和instanceof

typeof可以获得原始值的类型，instanceof可以获得对象的类型

```
typeof   <<value>>
```

示例：

``` 
> typeof 'abc'
  'string'
```

``` javascript
<<value>> instanceof <<Constr>>
```

示例:

```javascript
> {} instanceof Object
  true
```

#### 二元逻辑运算符

- 与（&&）如果第一个操作数是假值，返回第一个；否则返回第二个操作数

- 或（||）如果第一个是真值，返回第一个；否则返回第二个操作数

### 字符串

- 字符串里的单引号双引号前面要加反斜线转义字符

- 可以通过**方括号**访问单个字符

- **length**属性是字符串的字符数量

- **加号**操作符可以拼接字符串

- slice（）方法**复制**字符串

  ```javascript
  > 'abc'.slice(1)
    'bc'
  > 'abc'.slice(1,2)
    'b'
  ```

  参数列表分别是要复制的起始索引和终止索引。

- trim（）方法**移除空白字符**
- indexOf（）方法**查找**字符串，有则返回1，否则返回-1

### 函数

函数有两种声明方法：

```javascript
function add(param1, param2) {
    return param1 + param2;
}
```

```javascript
var add = function (param1, param2) {
    return param1 + param2;
};
```

#### 特殊变量arguments

JavaScript不会对函数参数的数量进行检测，但是所有参数可访问需要通过特殊变量arguments。 

#### 太多或太少参数

多出的参数会被忽略，缺少的参数是undefined

#### 可选参数

可以在函数体里写x = x || 0这样的语句给参数x赋默认值

#### 强制数量

检测arguments.length可以强制参数的数量

```js
function pair(x, y) {
    if (arguments.length !== 2) {
        throw new Error('Need exactly 2 arguments');
    }
    ...
}
```

以下方法可以将arguments这种**类数组**转换为数组：

```js
function toArray(arrayLikeObject) {
    return [].slice.call(arrayLikeObject);
}
```

### 异常处理

```javascript
function throwException() {
    throw new ERROR('problem!');
}
try {
    throwException();
} catch (e) {
    console.log(e);//错误：信息
    console.log(e.stack);//非标准，但大部分浏览器支持
}
```

try分支包裹易出错的代码，如果try分支内部抛出异常，catch分支将会执行。

### 严格模式

严格模式开启检测和一些其他措施，使JavaScript成为更简洁的语言。开启严格模式的方法是在js文件开头或者script标签首行添加

> use 'strict';

如果是在某个函数上选择性开启的话在函数体开头加上这条语句

严格模式有三大好处：

- 明确错误

  在函数执行一些非法操作比如修改字符串的只读属性：'abc'.length=5;的时候是静默失败的，非法操作被简单忽略。如果是在严格模式下：

  ```javascript
  function f(){
      'use strict';
      'abc'.length=5;
  }
  ```

  浏览器就会报错误：

  ``` javascript
  > f()
  TypeError: Cannot assign to read only property 'length' of abc
  ```

- 不是方法中的函数中的this

  在严格模式下，不作为方法的函数中的this值是undefined

  ```javascript
  function f_strict() {
      'use strict';
      return this;
  }
  console.log(f_strict() === undefined); //true
  ```

  在非严格模式下，this的值是被称作全局对象（在浏览器里是window) :

  ```javascript
  function f() {
      return this;
  }
  console.log(f() === window); //true
  ```

- 不再自动创建全局变量

  在非严格模式下，如果给不存在的变量赋值，JavaScript会自动创建一个全局变量：

  ```javascript
  > function f() { foo = 5 }
  > f() //不会报错
  > foo
  5
  ```

  在严格模式下，这会产生一个错误：

  ``` javascript
  > function f_strict() { 'use strict';foo=4; }
  > f_strict()
  RefenrenceError: foo is not defined
  ```

### 变量作用域和闭包

#### 一、变量作用域

- 变量的作用域总是**整个函数**（没有块级作用域）

  > **let**允许你声明一个作用域被限制在块级中的变量、语句或者表达式。与**var**关键字不同的是，`let`声明的变量只能是全局或者整个函数块的。

- JavaScript在函数内部可以**直接读取**全局变量，在函数外部**无法读取**函数内的局部变量

  > JavaScript语言特有的**“链式作用域”**结构（chain scope），子对象会一级一级地向上寻找所有父对象地变量，父对象的所有变量对子对象可见，反之不然。

###### 变量提升

变量的**声明**在函数执行时会被移到函数顶部，但**赋值**不会

#### 二、如何从外部读取局部变量？

正常情况下不行，所以要通过变通方法——在函数的内部再定义一个函数。

```javascript
　function f1(){

　　　　var n=999;

　　　　function f2(){
　　　　　　alert(n); // 999
　　　　}
     	return f2;
　　}
```

既然f2可以读取f1中的局部变量，那么只要把f2作为返回值，我们就可以再f1外部读取它的内部变量了！

#### 三、闭包的概念

通俗理解，闭包就是定义在一个函数内部，能够读取这个函数内部变量的函数。

在上面的代码中，f2定义在f1中，用来读取f1的内部变量并返回给函数外部，f2就是一个闭包。

#### 四、闭包的用途

最大的用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中。

下面代码展示了闭包可以使变量值始终保持在内存中的作用：

```javascript
function f1() {
    var n=999;
    nAdd = function () {n+=1}
    function f2() {
        alert(n);
    }
    return f2;
}
var result = f1();
result();//999
nAdd();
result(); //1000
```

在这段代码中，result实质上就是闭包f2函数。它运行了两次，值分别是999 和1000，这说明函数f1的局部变量n一直保存在内存中，并没有在f1调用后被自动清除。

为什么会这样呢？因为f1是f2的父函数









参考资料：http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html

http://yanhaijing.com/basejs/#sect_objects