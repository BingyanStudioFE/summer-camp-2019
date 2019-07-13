# 20190710

## React简介

React起源于Facebook内部项目，用来架设Instagram网站

2013年5月开源

设计思想独特，属于革命性创新，性能出众，代码逻辑简单

用于构建用户界面的JavaScript库，m**V**c

**基本概念**

* library（库）：小而巧 （只提供了特定的API 
* 可以很方便的从一个库切换到另一个库而代码几乎不会改变）
* Framework（框架）：大而全 （提供了一整套解决方案 在项目中想切换到别的框架比较困难）

## 前端三大主流框架

* Augular.js
* Vue.js（最火的框架）
* React.js（最流行的框架）



## React与Vue的对比

### 组件化

1. **模块化**：从代码角度分析（把可复用的代码抽离为单个的模块）
2. **组件化**：从UI界面角度分析（把可复用的UI元素抽离为单独的组件）

3. **React如何实现组件化**：React中有组件化的概念，但是并没有组件模板文件；

#### 移动app开发体验

* Vue，结合Weex技术，提供了迁移到移动端app开发的体验
* React，结合ReactNative，提供了无缝迁移到移动端app的开发体验（用的最多，最火、最流行）



## React核心概念

### 虚拟DOM

（Virtual Document Object Model)

#### **DOM**

**浏览器**中的概念

用JS对象来表示页面上的元素

#### **虚拟DOM**

框架中的概念

**程序员**手动用JS对象来模拟页面上的DOM和DOM嵌套

目的是实现页面中DOM元素的高效更新



### Diff算法

#### tree diff

新旧两颗DOM树逐层对比的过程

当整颗DOM树逐层对比完毕，则所有需要更新的元素都会被找到

#### component diff

在进行tree diff对比时，每一层中**组件级别**的对比

#### element diff

在进行component diff的对比时，如果两个组件的类型相同，则需要进行element diff



## Create React App

脚手架工具

Create React App是一个官方支持的创建React单页应用程序的方法

它提供了一个零配置的现代构建设置

### 创建一个项目

```
npx create-react-app my-app
```

运行该命令（要求npm5.2+），会在当前目录创建名为`my-app`的目录

在该目录中将生成初始项目结构并安装依赖项

`npm start`

在开发者模式下运行应用程序

`npm test`

以交互模式运行测试观察程序

`npm run build`

将生产环境的应用程序构建到`build`目录

它能将React正确地打包为生产模式中优化构建以**获得最佳性能**

### 文件夹结构

![1562748728589](E:\BingYan\summer-camp-2019\O\Notes\images\%5CUsers%5CLucyS%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1562748728589.png)

以下文件必须以确切的文件名存在

* `public/index.html`是页面模板
* `src/index.js`是JavaScript入口点

其余文件可以删除或重命名

* JS、CSS文件需要放在`src`中（否则webpack发现不了它们）
* `.gitignore`中写不希望git跟踪的内容
* `manifest.json`、`serviceWorker.js`只有在写PWA时才会使用到
* 只有`public`目录下的文件才会被`public/index.html`引用



## ~~在项目中使用React~~

0. `nmp i react react-dom -S`

* react：专门用于创建组件和虚拟DOM， 同时组件的生命周期都在这个包中
* react-dom：专门进行DOM操作，最主要的应用场景即`ReactDOM.render()`

1. 导入`react` 和`react-dom`包

   ```javascript
   import React from "react";
   import ReactDOM from "react-dom";
   ```

2. 创建虚拟DOM元素

   ```javascript
   const myh1 = React.createElement("h1", {id:"myh1" title:"this is a h1"}, "this is a big h1");
   ```

   参数：

   * 标签
   * 属性（没有为null）
   * 内容
   * （子节点）

3. 将虚拟DOM渲染到页面

   ```javascript
   ReactDOM.render(myh1, document.getElementById("app"));
   ```

   参数：

   * 元素名
   * **DOM元素**（当作容器）



## JSX语法

**符合XML规范的JS**

在JS文件中默认不能写这种类似HTML的标记，否则会打包失败

可以使用 `babel` 来转换这些JS中的标记

**在JS中混合写入类似于HTML**的语法叫做JSX语法

JSX语法运行的本质是在运行时转化为`React.createElement`的形式来执行的

```javascript
const mydiv  = <div id="mydiv" title="div">this is a div</div>
```

### ~~安装babel~~

**我是傻子，create-react-app建的项目根本不需要自己装Babel好吗**

**如果用create-react-app创了项目又按照下面的来了一遍，会因为babel不兼容报错**

**！！！！！！！！！！！！！这很重要**

**（好像是babel-loader|babel的版本必须一致），写在这里如果以后要用webpack配置提醒一下**

**请忽略以下内容**



* **安装babel插件**

  `npm i babel-core babel-loader babel-plugin-transform-runtime -D`

  `npm i babel-preset-env babel-preset-stage-0 -D`

* **安装能识别转换JSX语法的包`babel-preset-react`**

  `npm i babel-preset-react -D`

* **在`webpack.config.js`文件中进行babel的配置**

  ```javascript
  module.exports = {
      module: {
          rules:[
              {
                  test: /\.js|jsx$, use:"babel-loader", exclude: /node_modules/
              }
          ]
      }
  }
  ```

* 在项目src目录中创建`.babelrc`文件

  ```json
  {
      "presets":["env", "stage-0", "react"],
      "plugins":["transform-runtime"]
  }
  ```




> 注意：这里我是用createReactApp脚手架创建的项目
>
> 因此在这里找不到webpack.config.js文件
>
> 我们需要使用

`npm run eject`来暴露配置

> 注意：这是单向操作。一旦你 `eject` ，你就不能回去了！
>
> 如果你对构建工具和配置选项不满意，可以随时 `eject` 。此命令将从项目中删除单个构建依赖项。
>
> 相反，它会将所有配置文件和传递依赖项（Webpack，Babel，ESLint等）复制到项目中，以便你可以完全控制它们。除 `eject` 之外的所有命令仍然有效，但它们将指向复制的脚本，以便你可以调整它们。接下来你只能靠自己了。

**注意:**

第一次使用暴露配置命令时出现了如图所示的错误

![1562761469190](E:\BingYan\summer-camp-2019\O\Notes\images\%5CUsers%5CLucyS%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1562761469190.png)

这时候我们需要把项目用git添加到本地仓库



# 20190711 

### JSX基本语法

* JavaScript表达式

  JavaScript表达式写在花括号中

  即当我们需要在JSX控制的区域内写JS表达式，则需要写在花括号中

  ```jsx
  let a = 10;
  let str = "Hello, World";
  let boo = true;
  
  ReactDOM.render(<div>
          { a + 2 } 									//渲染数字
          <hr/>
          { str }										//渲染字符串
          <hr/>	
      </div>, document.getElementById("app"));
  ```

* 数组

  JSX中允许在模板中插入数组

  数组会自动展开所有成员

  <a href="../Tasks/react-todo-mvc/my-app/src/02_forEach和map在JSX中的用法.js">forEach和map在JSX中的用法</a>

* JSX注释

  ```jsx
  {/* 这是单行注释 */}
  {
      //这是多行注释
  }
  ```

* 在JSX中标签需要成对出现，如果是单标签**则必须自闭和**

* JSX中不能使用`if` `else` 语句，但是可以使用三目运算符

  ```jsx
  ReactDOM.render(
  <div>
  	<h1>{ i == 1 ? "true" : "false!" }
     	</h1>
  </div>, document.getElementById("app"))
  ```

* 为JSX元素添加属性

  * 如果添加类名需要用`className`代替`class`
  * 如果添加label的`for`属性需要使用`htmlFor`代替

  （因为class和for也属于JS的关键字，为了防止歧义需要这样做）

* 样式

  * React 推荐使用内联样式。
  * 我们可以使用 **camelCase** 语法来设置内联样式
  * React 会在指定元素数字后自动添加 **px** 

  ```jsx
  var myStyle = {
      fontSize: 100,
      color: '#FF0000'
  };
  ReactDOM.render(
      <h1 style = {myStyle}>菜鸟教程</h1>,
      document.getElementById('example')
  );
  ```


## React组件

### 1、使用函数定义一个组件：

```jsx
function Hello(props) {
    return <h1>Hello World!</h1>;
}
ReactDOM.render(
    <div>
        <Hello></Hello>
    </div>
    , document.getElementById("app")
)
```

* 在组件中**必须返回一个虚拟DOM元素**

* 在使用时直接把组件名称**以标签的形式**放在页面上
* 在构造函数中使用`props`形参接收外界传递进来的数据

```JSX
const user = {
    name:       "Shaw",
    age:        19,
    sex:        "female"
}

ReactDOM.render(
    <div>
        <Hello name={user.name} age={user.age} sex={user.sex}></Hello>
    </div>
    , document.getElementById("app")
)
```

### 2. 使用class关键字创建组件

* es6中`class`关键字的用法

  ```javascript
  //创建一个动物类
  class Animal{
      //这是类中的构造器
      //每一个类中都有一个构造器
      //如果我们没有指定构造器，那么可以认为每个类内部有个隐形的空构造器
      constructor(name, age){
          this.name = name;
          this.age = age;
      }
  }
  ```

* `class`中的静态属性与实例属性

  * 静态属性指的是 Class 本身的属性，即`Class.propName`，挂载给构造函数

  * 实例属性指的是定义在实例对象（`this`）上的属性，挂载给实例对象

  * （不用`class`关键字）

    ```javascript
    //实例属性
    function Person(name, age){
        this.name = name;
        this.age = age;
    }
    //静态属性
    Person.number = "111111";
    ```

  * (使用`class`关键字)

    ```javascript
    class Animal{
    	//实例属性
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        //静态属性
        static info = "animal";
    ```

* `class`中的静态方法与实例方法

  * （不用`class`关键字）

    ```javascript
    
    ```

  * （使用`class`关键字）

    ```javascript
    class Animal{
        
        howl() {
            console.log("这是animal的实例方法");
        }
        static show() {
            console.log("这是animal的静态方法")
        }
    }
    ```

* `class`中的继承

  * 我们可以使用`extends`关键字实现子类继承父类

  ```javascript
  class Person {
      constructor(name, age){
          this.name = name;
          this.age = age;
      }
      //公共实例方法
      hello() {
          console.log("Hi");
      }
  }
  //在class中可以使用extends关键字实现子类继承父类
  class American extends Person{ }
  const a1 = new American("Jack", 20);
  
  class Chinese extends Person{ }
  const c1 = new Chinese("Shaun", 18);
  ```

  * `super`函数

    * 当子类通过`extends`关键字继承了父类，那么在子类的`constructor`构造函数中必须优先调用`super()`函数（规定），`super`即是父类中构造器的引用

    * 注意！！！！！！！！！！！

      当子类内部没有我们手写的构造器时，name、age参数将会自动被传给父类

      但是如果我们自己定义了子类的`constructor`，那么首先我们必须使用`super`函数引用父类构造器；但这时由于我们自己写的`constructor`没有接收到参数，所以我们必须自己手动传

      ```javascript
      class American extends Person{ 
          //手动传参数进constructor
          constructor(name, age){
              //手动传参数进父类构造器
              super(name, age);
          }
      }
      ```

* 使用`class`关键字创建组件

  * 如果我们要使用`class`创建组件，那么必须让自己的组件继承自`React.Component`
  * 必须包含`render()`函数，渲染当前组件内部的虚拟DOM结构，必须有`return`返回值
  * 在`class`关键字创建的组件中，如果想使用外界传递过来的`props`参数，无需接受，可直接通过`this.props.XXX`访问

  ```JSX
  class Movie extends React.Component {
      render(){
          return <div>
              this is a component
              --{this.props.name}
              --{this.props.age}
               </div>
      }
      constructor(){
          super();
      }
  }
  ```

### 3. 两种方法创建组件的区别

> 使用`class`关键字创建的组件，有自己的**私有数据（this.state）和生命周期函数**
>
> 使用`function`创建的组件，只有`props`，没有自己的私有数据和生命周期函数

```JSX
class Movie extends React.Component {
    
    constructor(){
        super();
        //私有数据
        this.state = {
            msg:            "大家好，我是class创建的Movie组件",
        };
    }

    render(){
        ...
    }
}
```

1. 用构造函数创造出来的组件叫做**无状态组件**（用的不多）

2. 用`class`关键字创造出来的组件叫做**有状态组件**（state）

3. 使用场景

   * 如果一个组件需要有自己的私有数据，推荐使用`class`关键字创造
   * React官方：无状态组件由于没有自己的私有数据和生命周期函数，运行效率会比有状态组件高
   * 但其实我们一般用的都是有状态组件

4. `props`与`state`的区别

   * `props`中的数据时外界传递来的；`state`中的数据是组件私有的（通过AJAX获取的数据一般是私有的）
   * `props`中的数据是只读的，`state`中的数据是可以修改的

## 怎样美化？

在JSX中，如果想写行内样式，不能为`style`设置字符串的值

下列写法错误！！！！！！！！！！！！！！！！！！！！！！！！

```JSX
return <div>
    <h1 style="color:red">This is a Comment List.</h1>
</div>
```

**我们应该使用双花括号的写法**

```JSX
return <div>
    <h1 style={{color:"red"}}>This is a Comment List.</h1>
</div>
```

> 注意不要使用连字符写法，而是应该写成小驼峰的形式
>
> `fontSize` `textAlign` `fontWeight`
>
> 等等

# 20190712

### CSS样式表模块化

css没有作用域的概念

css样式表导入后是全局生效的，会有冲突问题

我们需要**为css样式表启用模块化**

> 在create-react-app 2.0以前，它本身是不带css-modules的
>
> 我是用的create-react-app 3.0.1
>
> 这样直接将`[name].css`改为`[name].module.css`就可以达到css样式表模块化的效果

* 导入样式表

  ```jsx
  import css from "../css/commentitem.module.css";
  ```

* 使用样式表

  ```jsx
  
  ```

注意：css模块化只针对**类选择器**和**id选择器**生效

​	    css模块化**不会将标签选择器模块化**



### 取消CSS样式表模块化

```css
:gobal(.test){
    font-style	:italic;
}
```

使用`global`参数可以将被模块化的选择器变为对全局生效

（使用`local`参数可以将未被模块化的选择器模块化，一般不用）



## 在React中实现事件绑定

* 在react中有一套自己的事件绑定机制

* 事件名要用**小驼峰**命名

* 语法：`onClick = { function }`

* ```JSX
  <button onClick = { () => this.myClickHandler() }>按钮</button>
  ```

* <a href="../Tasks/React-todo-mvc/my-app/src/components/BindEvent.jsx">这是一个绑定事件函数的组件</a>



## `this.setState`

在React中如果想要修改state中的数据，推荐使用`this.setState({})`

注意：该方法是**异步**的！

如果使用`setState`方法修改了`this.state`中的数据，我们如果要访问更新后的数据，则必须使用回调函数，否则访问到的则是修改前的数据

## 绑定UI页面的内容与this.state

* 默认情况下，在React中如果页面上的表单元素绑定了state上的状态值，那么每当state上状态值变化，必然会自动把最新的状态值同步到页面上

* 反过来，在UI页面上的表单元素值如果变化了，想要把最新的值同步到state中，此时React是没有这种自动的同步机制的，我们必须：

  * 在React中**手动监听表单元素的onChange事件**

  * 在onChange事件中，手动获取文本框的值

    * 通过事件参数`e`获取

    * 通过`this.refs`获取

    * ```javascript
      console.log(e.target.value);
      console.log(this.refs.txt.value);
      ```

  * 程序员调用`this.setState({ })`手动把最新的值同步到state中

  <a href="../Tasks/React-todo-mvc/my-app/src/components/BindInputValue.jsx">这是一个将页面值绑定到state的实例</a>



## 组件的生命周期

* 生命周期与生命周期函数
  * 每个组件的实例从**创建、运行到销毁** ，在这个过程中，会发生一些事件，这些事件就叫做**组件的生命周期函数**
* React组件的生命周期
  * **组件创建阶段**：一辈子只执行一次
    * componentWillMount
    * render
    * componentDidMount
  * **组件运行阶段**：按需执行，根据`props`属性或`state`的状态，有选择的执行0次~多次
    * componentWillReceiveProps
    * shouldComponentUpdate
    * componentWillUpdate
    * render
    * componentDidUpdate
  * **组件销毁阶段**：一辈子执行一次
    * componentWillUnmount



## webpack

webpack是一个现代JavaScript应用程序的**静态模块打包器（module bundler）**

### 基本概念

#### 入口（entry）

**入口起点**指示webpack应该使用哪个模块来作为构建其内部依赖图的开始

可以通过在webpack配置中配置`entry`属性来指定一个或多个入口起点

默认值为`./src`

#### 出口（output）

出口属性告诉webpack在哪里输出它所创建的bundles以及如何明明这些文件

默认值为`./dist`

#### loader

loader让webpack处理非js文件（webpack自身只能理解js）

loader将所有类型的文件转换为webpack能够处理的有效模块

> test属性

用于标识出应该被**对应loader**进行转换的某个或某些文件

> use属性

表示进行转换时应该使用哪个loader

```javascript
const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

#### 插件（plugins）

插件的使用范围很广，包括打包优化、压缩、重新定义环境中的变量等等

想要使用一个插件，我们只需要`require()`它，再将它添加到`plugins`数组中

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
    ...
    plugins: [
        new HtmlWebpackPlugin({templates: "./src/index.html"})
    ]
}
```

