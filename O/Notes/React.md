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



## 在项目中使用React

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

### 安装babel

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

