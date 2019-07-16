# JavaScript 单例模式

### 定义

确保一个类仅有一个实例，并提供一个访问它的全局访问点。

### 单例模式使用的场景

比如线程池、全局缓存等。我们所熟知的浏览器的window对象就是一个单例，在JavaScript开发中，对于这种只需要一个的对象，我们的实现往往使用单例。

### 实现单例模式 （不透明的）

一般我们是这样实现单例的，用一个变量来标志当前的类已经创建过对象，如果下次获取当前类的实例时，直接返回之前创建的对象即可。代码如下：

```js
// 定义一个类
function Singleton(name) {
    this.name = name;
    this.instance = null;
}
// 原型扩展类的一个方法getName()
Singleton.prototype.getName = function() {
    console.log(this.name)
};
// 获取类的实例
Singleton.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance
};

// 获取对象1
var a = Singleton.getInstance('a');
// 获取对象2
var b = Singleton.getInstance('b');
// 进行比较
console.log(a === b);
```

我们也可以使用闭包来实现：

```js
function Singleton(name) {
    this.name = name;
}
// 原型扩展类的一个方法getName()
Singleton.prototype.getName = function() {
    console.log(this.name)
};
// 获取类的实例
Singleton.getInstance = (function() {
    var instance = null;
    return function(name) {
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance
    }        
})();

// 获取对象1
var a = Singleton.getInstance('a');
// 获取对象2
var b = Singleton.getInstance('b');
// 进行比较
console.log(a === b);
```

这个单例实现获取对象的方式经常见于新手的写法，这种方式获取对象虽然简单，但是这种实现方式不透明。知道的人可以通过 `Singleton.getInstance()` 获取对象，不知道的需要研究代码的实现，这样不好。这与我们常见的用 `new` 关键字来获取对象有出入，实际意义不大。

### 实现单例模式 （透明的）

```js
var Singleton = (function(){
    var instance;
    var CreateSingleton = function (name) {
        this.name = name;

        if(instance) {
            return instance;
        }
        // 打印实例名字
        this.getName();

        // instance = this;
        // return instance;
        return instance = this;
    }
    // 获取实例的名字
    CreateSingleton.prototype.getName = function() {
        console.log(this.name)
    }

    return CreateSingleton;
})();
// 创建实例对象1
var a = new Singleton('a');
// 创建实例对象2
var b = new Singleton('b');

console.log(a===b);
```

这种单例模式我以前用过一次，但是使用起来很别扭，我也见过别人用这种方式实现过走马灯的效果，因为走马灯在我们的应用中绝大多数只有一个。

这里先说一下为什么感觉不对劲，因为在这个单例的构造函数中一共干了两件事，一个是创建对象并打印实例名字，另一个是保证只有一个实例对象。这样代码量大的化不方便管理，应该尽量做到职责单一。

我们通常会将代码改成下面这个样子：

```js
// 单例构造函数
function CreateSingleton (name) {
    this.name = name;
    this.getName();
};

// 获取实例的名字
CreateSingleton.prototype.getName = function() {
    console.log(this.name)
};
// 单例对象
var Singleton = (function(){
    var instance;
    return function (name) {
        if(!instance) {
            instance = new CreateSingleton(name);
        }
        return instance;
    }
})();

// 创建实例对象1
var a = new Singleton('a');
// 创建实例对象2
var b = new Singleton('b');

console.log(a===b);
```

这种实现方式我们就比较熟悉了，我们在开发中经常会使用中间类，通过它来实现原类所不具有的特殊功能。有的人把这种实现方式叫做代理，这的确是单例模式的一种应用，稍后将在代理模式进行详解。

说了这么多我们还是在围绕着传统的单例模式实现在进行讲解，那么具有JavaScript特色的单例模式是什么呢。

### JavaScript单例模式

在我们的开发中，很多同学可能并不知道单例到底是什么，应该如何使用单例，但是他们所写的代码却刚好满足了单例模式的要求。如要实现一个登陆弹窗，不管那个页面或者在页面的那个地方单击登陆按钮，都会弹出登录窗。一些同学就会写一个全局的对象来实现登陆窗口功能，是的，这样的确可以实现所要求的登陆效果，也符合单例模式的要求，但是这种实现其实是一个巧合，或者一个美丽的错误。由于全局对象，或者说全局变量正好符合单例的能够全局访问，而且是唯一的。但是我们都知道，全局变量是可以被覆盖的，特别是对于初级开发人员来说，刚开始不管定义什么基本都是全局的，这样的好处是方便访问，坏处是一不留意就会引起冲突，特别是在做一个团队合作的大项目时，所以成熟的有经验的开发人员尽量减少全局的声明。

而在开发中我们避免全局变量污染的通常做法如下：

- 全局命名空间
- 使用闭包

它们的共同点是都可以定义自己的成员、存储数据。区别是全局命名空间的所有方法和属性都是公共的，而闭包可以实现方法和属性的私有化。

### 惰性单例模式

说实话，在我下决心学习设计模式之前我并不知道，单例模式还分惰性单例模式，直到我看了曾探大神的《JvaScript设计模式与开发实践》后才知道了还有惰性单例模式，那么什么是惰性单例模式呢？在说惰性单例模式之前，请允许我先说一个我们都知道的lazyload加载图片，它就是惰性加载，只当含有图片资源的dom元素出现在媒体设备的可视区时，图片资源才会被加载，这种加载模式就是惰性加载；还有就是下拉刷新资源也是惰性加载，当你触发下拉刷新事件资源才会被加载等。而惰性单例模式的原理也是这样的，只有当触发创建实例对象时，实例对象才会被创建。这样的实例对象创建方式在开发中很有必要的。

就如同我们刚开始介绍的用 `Singleton.getInstance` 创建实例对象一样，虽然这种方式实现了惰性单例，但是正如我们刚开始说的那样这并不是一个好的实现方式。下面就来介绍一个好的实现方式。

遮罩层相信大家对它都不陌生。它在开发中比较常见，实现起来也比较简单。在每个人的开发中实现的方式不尽相同。这个最好的实现方式还是用单例模式。有的人实现直接在页面中加入一个div然后设置display为none，这样不管我们是否使用遮罩层页面都会加载这个div，如果是多个页面就是多个div的开销；也有的人使用js创建一个div，当需要时就用将其加入到body中，如果不需要就删除，这样频繁地操作dom对页面的性能也是一种消耗；还有的人是在前一种的基础上用一个标识符来判断，当遮罩层是第一次出现就向页面添加，不需要时隐藏，如果不是就是用前一次的添加的。

实现代码如下：

```js
// html

<button id="btn">click it</button>

// js
var createMask = (function() {
    var mask;
    return function() {
        if(!mask) {
            // 创建div元素
            var mask = document.createElement('div');
            // 设置样式
            mask.style.position = 'fixed';
            mask.style.top = '0';
            mask.style.right = '0';
            mask.style.bottom = '0';
            mask.style.left = '0';
            mask.style.opacity = '';
            mask.style.display = 'none';
            document.body.appendChild(mask);
        }

        return mask;
    }        
})();

document.getElementById('btn').onclick = function() {
    var maskLayer = createMask();
    maskLayer.style.display = 'block';
}
```

我们发现在开发中并不会单独使用遮罩层，遮罩层和弹出窗是经常结合在一起使用，前面我们提到过登陆弹窗使用单例模式实现也是最适合的。那么我们是不是要将上面的代码拷贝一份呢？当然我们还有好的实现方式，那就是将上面单例中代码变化的部分和不变的部分，分离开来。

代码如下：

```js
var singleton = function(fn) {
    var instance;
    return function() {
        return instance || (instance = fn.apply(this, arguments));
    }
};
// 创建遮罩层
var createMask = function(){
    // 创建div元素
    var mask = document.createElement('div');
    // 设置样式
    mask.style.position = 'fixed';
    mask.style.top = '0';
    mask.style.right = '0';
    mask.style.bottom = '0';
    mask.style.left = '0';
    mask.style.opacity = 'o.75';
    mask.style.backgroundColor = '#000';
    mask.style.display = 'none';
    mask.style.zIndex = '98';
    document.body.appendChild(mask);
    // 单击隐藏遮罩层
    mask.onclick = function(){
        this.style.display = 'none';
    }
    return mask;
};

// 创建登陆窗口
var createLogin = function() {
    // 创建div元素
    var login = document.createElement('div');
    // 设置样式
    login.style.position = 'fixed';
    login.style.top = '50%';
    login.style.left = '50%';
    login.style.zIndex = '100';
    login.style.display = 'none';
    login.style.padding = '50px 80px';
    login.style.backgroundColor = '#fff';
    login.style.border = '1px solid #ccc';
    login.style.borderRadius = '6px';

    login.innerHTML = 'login it';

    document.body.appendChild(login);

    return login;
};

document.getElementById('btn').onclick = function() {
    var oMask = singleton(createMask)();
    oMask.style.display = 'block';
    var oLogin = singleton(createLogin)();
    oLogin.style.display = 'block';
    var w = parseInt(oLogin.clientWidth);
    var h = parseInt(oLogin.clientHeight);
}
```

在上面的实现中将单例模式的惰性实现部分提取出来，实现了惰性实现代码的复用，其中使用apply改变改变了fn内的this指向，使用 `||` 预算简化代码的书写。



# ES6 JavaScript 单例模式

## 1. 什么是单例模式?

单例模式是一种十分常用但却相对而言比较简单的单例模式。它是指在一个类只能有一个实例，即使多次实例化该类，也只返回第一次实例化后的实例对象。单例模式不仅能减少不必要的内存开销, 并且在减少全局的函数和变量冲突也具有重要的意义。

### 1.1 最简单的单例模式

就算你对于单例模式的概念还比较模糊，但是我相信你肯定已经使用过单例模式了。我们来看一下下面的一段代码：

```
let timeTool = {
  name: '处理时间工具库',
  getISODate: function() {},
  getUTCDate: function() {}
}
```

以对象字面量创建对象的方式在JS开发中很常见。上面的对象是一个处理时间的工具库, 以对象字面量的方式来封装了一些方法处理时间格式。全局只暴露了一个`timeTool`对象, 在需要使用时, 只需要采用`timeTool.getISODate()`调用即可。`timeTool`对象就是单例模式的体现。在JavaScript创建对象的方式十分灵活, 可以直接通过对象字面量的方式实例化一个对象, 而其他面向对象的语言必须使用类进行实例化。所以，这里的`timeTool`就已经是一个实例， 且ES6中`let`和`const`不允许重复声明的特性，确保了`timeTool`不能被重新覆盖。

### 1.2 惰性单例

采用对象字面量创建单例只能适用于简单的应用场景，一旦该对象十分复杂，那么创建对象本身就需要一定的耗时，且该对象可能需要有一些私有变量和私有方法。此时使用对象字面创建单例就不再行得通了，我们还是需要采用构造函数的方式实例化对象。下面就是使用立即执行函数和构造函数的方式改造上面的`timeTool`工具库。

```
let timeTool = (function() {
  let _instance = null;
  
  function init() {
    //私有变量
    let now = new Date();
    //公用属性和方法
    this.name = '处理时间工具库',
    this.getISODate = function() {
      return now.toISOString();
    }
    this.getUTCDate = function() {
      return now.toUTCString();
    }
  }
  
  return function() {
    if(!_instance) {
      _instance = new init();
    }
    return _instance;
  }
})()
```

上面的`timeTool`实际上是一个函数，`_instance`作为实例对象最开始赋值为`null`，`init`函数是其构造函数，用于实例化对象，立即执行函数返回的是匿名函数用于判断实例是否创建，只有当调用`timeTool()`时进行实例的实例化，这就是惰性单例的应用，不在js加载时就进行实例化创建， 而是在需要的时候再进行单例的创建。 如果再次调用， 那么返回的永远是第一次实例化后的实例对象。

```
let instance1 = timeTool();
let instance2 = timeTool();
console.log(instance1 === instance2); //true
```

## 2. 单例模式的应用场景

### 2.1 命名空间

一个项目常常不只一个程序员进行开发和维护, 然后一个程序员很难去弄清楚另一个程序员暴露在的项目中的全局变量和方法。如果将变量和方法都暴露在全局中, 变量冲突是在所难免的。就想下面的故事一样：

```
//开发者A写了一大段js代码
function addNumber () {}


//开发者B开始写js代码
var addNumber = '';

//A重新维护该js代码
addNumber(); //Uncaught TypeError: addNumber is not a function
```

命名空间就是用来解决全局变量冲突的问题，我们完全可以只暴露一个对象名，将变量作为该对象的属性，将方法作为该对象的方法，这样就能大大减少全局变量的个数。

```
//开发者A写了一大段js代码
let devA = {
  addNumber() { }
}

//开发者B开始写js代码
let devB = {
  add: ''
}

//A重新维护该js代码
devA.addNumber();
```

上面代码中，`devA`和`devB`就是两个命名空间，采用命名空间可以有效减少全局变量的数量，以此解决变量冲突的发生。

### 2.2 管理模块

上面说到的`timeTool`对象是一个只用来处理时间的工具库，但是实际开发过程中的库可能会有多种多样的功能，例如处理ajax请求,操作dom或者处理事件。这个时候单例模式还可以用来管理代码库中的各个模块，例如下面的代码所示。

```
var devA = (function(){
  //ajax模块
  var ajax = {
    get: function(api, obj) {console.log('ajax get调用')},
    post: function(api, obj) {}
  }

  //dom模块
  var dom = {
    get: function() {},
    create: function() {}
  }
  
  //event模块
  var event = {
    add: function() {},
    remove: function() {}
  }

  return {
    ajax: ajax,
    dom: dom,
    event: event
  }
})()
```

上面的代码库中有`ajax`,`dom`和`event`三个模块，用同一个命名空间`devA`来管理。在进行相应操作的时候，只需要`devA.ajax.get()`进行调用即可。这样可以让库的功能更加清晰。

## 3. ES6中的单例模式

### 3.1 ES6创建对象

ES6中创建对象时引入了`class`和`constructor`用来创建对象。下面我们来使用ES6的语法实例化苹果公司

```
class Apple {
  constructor(name, creator, products) {
    this.name = name;
    this.creator = creator;
    this.products = products;
  }
}

let appleCompany = new Apple('苹果公司', '乔布斯', ['iPhone', 'iMac', 'iPad', 'iPod']);
let copyApple = new Apple('苹果公司', '阿辉', ['iPhone', 'iMac', 'iPad', 'iPod']);
```

### 3.2 ES6中创建单例模式

苹果这么伟大的公司明显有且只有一个, 就是乔爷爷创建的那个, 哪能容别人进行复制？所以`appleCompany`应该是一个单例, 现在我们使用ES6的语法将`constructor`改写为单例模式的构造器。

```
class SingletonApple {
  constructor(name, creator, products) {
    //首次使用构造器实例
    if (!SingletonApple.instance) {
      this.name = name;
      this.creator = creator;
      this.products = products;
      //将this挂载到SingletonApple这个类的instance属性上
      SingletonApple.instance = this;
    }
    return SingletonApple.instance;
  }
}

let appleCompany = new SingletonApple('苹果公司', '乔布斯', ['iPhone', 'iMac', 'iPad', 'iPod']);
let copyApple = new SingletonApple('苹果公司', '阿辉', ['iPhone', 'iMac', 'iPad', 'iPod']);

console.log(appleCompany === copyApple);  //true
```

### 3.3 ES6的静态方法优化代码

ES6中提供了为`class`提供了`static`关键字定义静态方法， 我们可以将`constructor`中判断是否实例化的逻辑放入一个静态方法`getInstance`中，调用该静态方法获取实例， `constructor`中只包需含实例化所需的代码，这样能增强代码的可读性、结构更加优化。

```
class SingletonApple {
  constructor(name, creator, products) {
      this.name = name;
      this.creator = creator;
      this.products = products;
  }
  //静态方法
  static getInstance(name, creator, products) {
    if(!this.instance) {
      this.instance = new SingletonApple(name, creator, products);
    }
    return this.instance;
  }
}

let appleCompany = SingletonApple.getInstance('苹果公司', '乔布斯', ['iPhone', 'iMac', 'iPad', 'iPod']);
let copyApple = SingletonApple.getInstance('苹果公司', '阿辉', ['iPhone', 'iMac', 'iPad', 'iPod'])

console.log(appleCompany === copyApple); //true
```

## 4. 单例模式的项目实战应用

### 4.1 实现登陆弹框

登陆弹框在项目中是一个比较经典的单例模式，因为对于大部分网站不需要用户必须登陆才能浏览，所以登陆操作的弹框可以在用户点击登陆按钮后再进行创建。而且登陆框永远只有一个，不会出现多个登陆弹框的情况，也就意味着再次点击登陆按钮后返回的永远是一个登录框的实例。

现在来梳理一下我登陆弹框的流程，在来进行代码的实现：

1. 给顶部导航模块的登陆按钮注册点击事件
2. 登陆按钮点击后JS动态创建遮罩层和登陆弹框
3. 遮罩层和登陆弹框插入到页面中
4. 给登陆框中的关闭按钮注册事件, 用于关闭遮罩层和弹框
5. 给登陆框中的输入框添加校验(此步骤略)
6. 给登陆框中的确定按钮添加事件,用于Ajax请求(此步骤略)
7. 给登陆框中的清空按钮添加事件，用于清空输入框（此步骤略）

因为5，6是登陆框的实际项目逻辑， 和单例模式关系不大。下面的项目实战代码只实现1 - 4步，其余步骤读者可自行进行扩展练习。完整的代码可在 [CodePen](https://codepen.io/LITANGHUI/project/editor/Axbnbb)点击预览中进行查看。

#### 4.1.1 给页面添加顶部导航栏的HTML代码

```
  <nav class="top-bar">
    <div class="top-bar_left">
      LTH BLOG
    </div>
    <div class="top-bar_right">
      <div class="login-btn">登陆</div>
      <div class="signin-btn">注册</div>
    </div>
  </nav>
```

#### 4.1.2 使用ES6的语法创建Login类

```
class Login {

  //构造器
  constructor() {
    this.init();
  }

  //初始化方法
  init() {
    //新建div
    let mask = document.createElement('div');
    //添加样式
    mask.classList.add('mask-layer');
    //添加模板字符串
    mask.innerHTML = 
    `
    <div class="login-wrapper">
      <div class="login-title">
        <div class="title-text">登录框</div>
        <div class="close-btn">×</div>
      </div>
      <div class="username-input user-input">
        <span class="login-text">用户名:</span>
        <input type="text">
      </div>
      <div class="pwd-input user-input">
        <span class="login-text">密码:</span>
        <input type="password">
      </div>
      <div class="btn-wrapper">
        <button class="confrim-btn">确定</button>
        <button class="clear-btn">清空</button>
      </div>
    </div>
    `;
    //插入元素
    document.body.insertBefore(mask, document.body.childNodes[0]);

    //注册关闭登录框事件
    Login.addCloseLoginEvent();
  }

  //静态方法: 获取元素
  static getLoginDom(cls) {
    return  document.querySelector(cls);
  }

  //静态方法: 注册关闭登录框事件
  static addCloseLoginEvent() {
    this.getLoginDom('.close-btn').addEventListener('click', () => {
      //给遮罩层添加style, 用于隐藏遮罩层
      this.getLoginDom('.mask-layer').style = "display: none";
    })
  }

  //静态方法: 获取实例(单例)
  static getInstance() {
    if(!this.instance) {
      this.instance = new Login();
    } else {
      //移除遮罩层style, 用于显示遮罩层
      this.getLoginDom('.mask-layer').removeAttribute('style');
    }
    return this.instance;
  }
}
```

#### 4.1.3 给登陆按钮添加注册点击事件

```
//注册点击事件
Login.getLoginDom('.login-btn').addEventListener('click', () => {
  Login.getInstance();
})
```

#### 4.1.4 效果演示

![单例效果展示.gif-36.8kB](https://segmentfault.com/img/remote/1460000013864949)

上面的登陆框的实现中，我们只创建了一个`Login`的类, 但是却实现了一个并不简单的登陆功能。在第一次点击登陆按钮的时候，我们调用`Login.getInstance()`实例化了一个登陆框，且在之后的点击中，并没有重新创建新的登陆框，只是移除掉了`"display: none"`这个样式来显示登陆框，节省了内存开销。

## 总结

单例模式虽然简单，但是在项目中的应用场景却是相当多的，单例模式的核心是**确保只有一个实例， 并提供全局访问。**就像我们只需要一个浏览器的`window`对象, jQuery的`$`对象而不再需要第二个。 由于JavaScript代码书写方式十分灵活, 这也导致了如果没有严格的规范的情况下，大型的项目中JavaScript不利于多人协同开发， 使用单例模式进行命名空间，管理模块是一个很好的开发习惯，能够有效的解决协同开发变量冲突的问题。灵活使用单例模式，也能够减少不必要的内存开销，提高用于体验。