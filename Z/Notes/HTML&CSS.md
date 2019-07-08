

# HTML

## 标签

### 基础

#### 文档类型

`<!DOCTYPE>` 声明必须是 HTML 文档的第一行，位于 `<html>` 标签之前。

```html
<!DOCTYPE html>
```

#### 文档结构

`<html>` 与` </html> `标签限定了文档的开始点和结束点，在它们之间是文档的头部和主体。

`<title> `元素可定义文档的标题。

`<body>` 元素定义文档的主体。

```html
<html>

<head>
  <title>文档的标题</title>
</head>

<body>
  文档的内容... ...
</body>

</html>>
```

#### 标题

`<h1> - <h6>` 标签可定义标题。`<h1>` 定义最大的标题。`<h6>` 定义最小的标题。

```html
<h1>这是标题 1</h1>
<h2>这是标题 2</h2>
<h3>这是标题 3</h3>
<h4>这是标题 4</h4>
<h5>这是标题 5</h5>
<h6>这是标题 6</h6>
```

#### 段落

`<p>` 标签定义段落。

```html
<p>This is some text in a very short paragraph</p>
```

#### 换行

`<br>`可插入一个简单的换行符。

在 XHTML 中，把结束标签放在开始标签中，也就是 `<br />`。

```html
<p>
To break<br />lines<br />in a<br />paragraph,<br />use the br tag.
</p>
```

#### 水平线

`<p>` 标签定义段落。

在 XHTML 中，`<hr>` 必须被正确地关闭，比如 `<hr />`。

```html
<h1>This is header 1</h1>
<hr />
<p>This is some text</p>
```

#### 注释

注释标签用于在源代码中插入注释。注释不会显示在浏览器中。

```html
<!--这是一段注释。注释不会在浏览器中显示。-->
```

### 表单

#### 表单

`<form>` 标签用于为用户输入创建 HTML 表单。

表单能够包含 input 元素，比如文本字段、复选框、单选框、提交按钮等等。

#### 输入

`<input>` 标签用于搜集用户信息。

根据不同的 type 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、复选框、掩码后的文本控件、单选按钮、按钮等等。

```html
<form action="form_action.asp" method="get">
  First name: <input type="text" name="fname" />
  Last name: <input type="text" name="lname" />
  <input type="submit" value="Submit" />
</form>
```

#### 多行输入

`<textarea>` 标签定义多行的文本输入控件。

```html
<textarea rows="3" cols="20">
在w3school，你可以找到你所需要的所有的网站建设教程。
</textarea>
```

#### 按钮

`<button>` 标签定义一个按钮。

在 button 元素内部，可以放置内容，比如文本或图像。这是该元素与使用 input 元素创建的按钮之间的不同之处。

```html
<button type="button">Click Me!</button>
```

#### 选择

select 元素可创建单选或多选菜单。

`<select>` 元素中的`<option>`标签用于定义列表中的可用选项。

```html
<select>
  <option value ="volvo">Volvo</option>
  <option value ="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
```

#### 标记

`<label>` 标签为 input 元素定义标注（标记）。

label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。

`<label>` 标签的 for 属性应当与相关元素的 id 属性相同。

```html
<form>
  <label for="male">Male</label>
  <input type="radio" name="sex" id="male" />
  <br />
  <label for="female">Female</label>
  <input type="radio" name="sex" id="female" />
</form>
```

#### 分组

`<fieldset>`标签将表单内容的一部分打包，生成一组相关表单的字段。

当一组表单元素放到 `<fieldset>` 标签内时，浏览器会以特殊方式来显示它们，它们可能有特殊的边界、3D 效果，或者甚至可创建一个子表单来处理这些元素。

`<legend>`标签为 fieldset 元素定义标题。

```html
<form>
  <fieldset>
    <legend>health information</legend>
    height: <input type="text" />
    weight: <input type="text" />
  </fieldset>
</form>
```

### 框架

`<frame>` 标签定义 frameset 中的一个特定的窗口（框架）。

`<frameset>` 元素可定义一个框架集。它被用来组织多个窗口（框架）。每个框架存有独立的文档。在其最简单的应用中，frameset 元素仅仅会规定在框架集中存在多少列或多少行。您必须使用 cols 或 rows 属性。

```html
<html>

<frameset cols="25%,50%,25%">
  <frame src="frame_a.htm" />
  <frame src="frame_b.htm" />
  <frame src="frame_c.htm" />
</frameset>

</html>
```

### 图像

`<img>` 标签有两个必需的属性：src 属性 和 alt 属性。

```html
<img src="/i/eg_tulip.jpg"  alt="上海鲜花港 - 郁金香" /
```

| 属性 | 值   | 描述                 |
| ---- | ---- | -------------------- |
| alt  | text | 规定图像的替代文本。 |
| src  | URL  | 规定显示图像的 URL。 |

### 链接

#### 链接

`<a>` 标签定义超链接，用于从一张页面链接到另一张页面。

`<a>` 元素最重要的属性是 href 属性，它指示链接的目标。

在所有浏览器中，链接的默认外观是：

- 未被访问的链接带有下划线而且是蓝色的
- 已被访问的链接带有下划线而且是紫色的
- 活动链接带有下划线而且是红色的

```html
<a href="http://www.w3school.com.cn">W3School</a>
```

#### 链接CSS

`<link>` 标签定义文档与外部资源的关系。

`<link>` 标签最常见的用途是链接样式表。

```html
<head>
<link rel="stylesheet" type="text/css" href="theme.css" />
</head>
```

### 列表

`<ul>` 标签定义无序列表。

`<ol>` 标签定义有序列表。

`<li>` 标签定义列表项目。

```html
<ol>
   <li>Coffee</li>
   <li>Tea</li>
   <li>Milk</li>
</ol>

<ul>
   <li>Coffee</li>
   <li>Tea</li>
   <li>Milk</li>
</ul>
```

### 表格

#### 表格

`<table>` 标签定义 HTML 表格。

`<tr>` 元素定义表格行，`<th>` 元素定义表头，`<td>` 元素定义表格单元。

`<caption>` 元素定义表格标题。

caption 标签必须紧随 table 标签之后。只能对每个表格定义一个标题。通常这个标题会被居中于表格之上。

```html
<table border="1">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
```

#### 表格分组

`<thead>` 标签定义表格的表头。`<tbody>` 标签表格主体（正文）。

`<tfoot>` 标签定义表格的页脚（脚注或表注）。

```html
<table border="1">
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>

  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>

  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table>
```

### 节

#### 块级节

`<div>` 可定义文档中的分区或节（division/section）。

`<div>` 标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。

如果用 id 或 class 来标记 `<div>`，那么该标签的作用会变得更加有效。

```html
<div style="color:#00FF00">
  <h3>This is a header</h3>
  <p>This is a paragraph.</p>
</div>
```

#### 行内节

`<span>` 标签被用来组合文档中的行内元素。

```html
<p><span>some text.</span>some other text.</p>
```

####  HTML5新增节

`<header>` 标签定义文档的页眉（介绍信息）。

`<section>` 标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。

`<article>` 标签规定独立的自包含内容。

`<aside>` 标签定义其所处内容之外的内容。

`<footer>` 标签定义文档或节的页脚。

```html
<header>
<h1>Welcome to my homepage</h1>
<p>My name is Donald Duck</p>
</header>

<section>
  <h1>PRC</h1>
  <p>The People's Republic of China was born in 1949...</p>
</section>

<article>
  <h1>Internet Explorer 9</h1>
  <p>Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月 14 日发布.....</p>
</article>

<aside>
<h4>Epcot Center</h4>
The Epcot Center is a theme park in Disney World, Florida.
</aside>

<footer>
  <p>Posted by: W3School</p>
  <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
</footer>
```

### 元信息

#### 头部

`<head>` 标签用于定义文档的头部，它是所有头部元素的容器。`<head>` 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。

```html
<html>

<head>
  <title>文档的标题</title>
</head>

<body>
  文档的内容... ...
</body>

</html>
```

#### 元信息

`<meta>` 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。

`<meta>` 标签位于文档的头部，不包含任何内容。`<meta>` 标签的属性定义了与文档相关联的名称/值对。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>title</title>
</head>
```

### JS脚本

`<script>` 标签用于定义客户端脚本，比如 JavaScript。

script 元素既可以包含脚本语句，也可以通过 src 属性指向外部脚本文件。

```html
<!--内联-->
<script type="text/javascript">
document.write("Hello World!")
</script>
<!--外部-->
<script type="text/javascript" src="data.js"></script>
```

### 插件

`<embed>` 标签定义嵌入的内容，比如插件。

```html
<embed src="helloworld.swf" />
```

# HTML编码规范




[1 前言](#user-content-1-%E5%89%8D%E8%A8%80)

[2 代码风格](#user-content-2-%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC)

　　[2.1 缩进与换行](#user-content-21-%E7%BC%A9%E8%BF%9B%E4%B8%8E%E6%8D%A2%E8%A1%8C)

　　[2.2 命名](#user-content-22-%E5%91%BD%E5%90%8D)

　　[2.3 标签](#user-content-23-%E6%A0%87%E7%AD%BE)

　　[2.4 属性](#user-content-24-%E5%B1%9E%E6%80%A7)

[3 通用](#user-content-3-%E9%80%9A%E7%94%A8)

　　[3.1 DOCTYPE](#user-content-31-doctype)

　　[3.2 编码](#user-content-32-%E7%BC%96%E7%A0%81)

　　[3.3 CSS 和 JavaScript 引入](#user-content-33-css-%E5%92%8C-javascript-%E5%BC%95%E5%85%A5)

[4 head](#user-content-4-head)

　　[4.1 title](#user-content-41-title)

　　[4.2 favicon](#user-content-42-favicon)

　　[4.3 viewport](#user-content-43-viewport)

[5 图片](#user-content-5-%E5%9B%BE%E7%89%87)

[6 表单](#user-content-6-%E8%A1%A8%E5%8D%95)

　　[6.1 控件标题](#user-content-61-%E6%8E%A7%E4%BB%B6%E6%A0%87%E9%A2%98)

　　[6.2 按钮](#user-content-62-%E6%8C%89%E9%92%AE)

　　[6.3 可访问性 (A11Y)](#user-content-63-%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7-a11y)

[7 多媒体](#user-content-7-%E5%A4%9A%E5%AA%92%E4%BD%93)

[8 模板中的 HTML](#user-content-8-%E6%A8%A1%E6%9D%BF%E4%B8%AD%E7%9A%84-html)





## 1 前言


HTML 作为描述网页结构的超文本标记语言，在百度一直有着广泛的应用。本文档的目标是使 HTML 代码风格保持一致，容易被理解和被维护。




## 2 代码风格


### 2.1 缩进与换行


#### [强制] 使用 `4` 个空格做为一个缩进层级，不允许使用 `2` 个空格 或 `tab` 字符。

解释：
对于非 HTML 标签之间的缩进，比如 script 或 style 标签内容缩进，与 script 或 style 标签的缩进同级。

示例：

```html
<style>
/* 样式内容的第一级缩进与所属的 style 标签对齐 */
ul {
    padding: 0;
}
</style>
<ul>
    <li>first</li>
    <li>second</li>
</ul>
<script>
// 脚本代码的第一级缩进与所属的 script 标签对齐
require(['app'], function (app) {
    app.init();
});
</script>
```

#### [建议] 每行不得超过 `120` 个字符。

解释：

过长的代码不容易阅读与维护。但是考虑到 HTML 的特殊性，不做硬性要求。


### 2.2 命名



#### [强制] `class` 必须单词全字母小写，单词间以 `-` 分隔。

#### [强制] `class` 必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。

示例：

```html
<!-- good -->
<div class="sidebar"></div>

<!-- bad -->
<div class="left"></div>
```

#### [强制] 元素 `id` 必须保证页面唯一。

解释：

同一个页面中，不同的元素包含相同的 `id`，不符合 `id` 的属性含义。并且使用 `document.getElementById` 时可能导致难以追查的问题。


#### [建议] `id` 建议单词全字母小写，单词间以 `-` 分隔。同项目必须保持风格一致。


#### [建议] `id`、`class` 命名，在避免冲突并描述清楚的前提下尽可能短。

示例：

```html
<!-- good -->
<div id="nav"></div>
<!-- bad -->
<div id="navigation"></div>

<!-- good -->
<p class="comment"></p>
<!-- bad -->
<p class="com"></p>

<!-- good -->
<span class="author"></span>
<!-- bad -->
<span class="red"></span>
```

#### [强制] 禁止为了 `hook 脚本`，创建无样式信息的 `class`。

解释：

不允许 `class` 只用于让 JavaScript 选择某些元素，`class` 应该具有明确的语义和样式。否则容易导致 CSS class 泛滥。

使用 `id`、属性选择作为 hook 是更好的方式。


#### [强制] 同一页面，应避免使用相同的 `name` 与 `id`。

解释：

IE 浏览器会混淆元素的 `id` 和 `name` 属性， `document.getElementById` 可能获得不期望的元素。所以在对元素的 `id` 与 `name` 属性的命名需要非常小心。

一个比较好的实践是，为 `id` 和 `name` 使用不同的命名法。

示例：

```html
<input name="foo">
<div id="foo"></div>
<script>
// IE6 将显示 INPUT
alert(document.getElementById('foo').tagName);
</script>
````


### 2.3 标签


#### [强制] 标签名必须使用小写字母。

示例：

```html
<!-- good -->
<p>Hello StyleGuide!</p>

<!-- bad -->
<P>Hello StyleGuide!</P>
```

#### [强制] 对于无需自闭合的标签，不允许自闭合。

解释：

常见无需自闭合标签有 `input`、`br`、`img`、`hr` 等。


示例：

```html
<!-- good -->
<input type="text" name="title">

<!-- bad -->
<input type="text" name="title" />
```

#### [强制] 对 `HTML5` 中规定允许省略的闭合标签，不允许省略闭合标签。

解释：

对代码体积要求非常严苛的场景，可以例外。比如：第三方页面使用的投放系统。


示例：

```html
<!-- good -->
<ul>
    <li>first</li>
    <li>second</li>
</ul>

<!-- bad -->
<ul>
    <li>first
    <li>second
</ul>
```


#### [强制] 标签使用必须符合标签嵌套规则。

解释：

比如 `div` 不得置于 `p` 中，`tbody` 必须置于 `table` 中。

详细的标签嵌套规则参见[HTML DTD](http://www.cs.tut.fi/~jkorpela/html5.dtd)中的 `Elements` 定义部分。


#### [建议] HTML 标签的使用应该遵循标签的语义。

解释：

下面是常见标签语义

- p - 段落
- h1,h2,h3,h4,h5,h6 - 层级标题
- strong,em - 强调
- ins - 插入
- del - 删除
- abbr - 缩写
- code - 代码标识
- cite - 引述来源作品的标题
- q - 引用
- blockquote - 一段或长篇引用
- ul - 无序列表
- ol - 有序列表
- dl,dt,dd - 定义列表


示例：

```html
<!-- good -->
<p>Esprima serves as an important <strong>building block</strong> for some JavaScript language tools.</p>

<!-- bad -->
<div>Esprima serves as an important <span class="strong">building block</span> for some JavaScript language tools.</div>
```


#### [建议] 在 CSS 可以实现相同需求的情况下不得使用表格进行布局。

解释：

在兼容性允许的情况下应尽量保持语义正确性。对网格对齐和拉伸性有严格要求的场景允许例外，如多列复杂表单。


#### [建议] 标签的使用应尽量简洁，减少不必要的标签。

示例：

```html
<!-- good -->
<img class="avatar" src="image.png">

<!-- bad -->
<span class="avatar">
    <img src="image.png">
</span>
```



### 2.4 属性


#### [强制] 属性名必须使用小写字母。

示例：

```html
<!-- good -->
<table cellspacing="0">...</table>

<!-- bad -->
<table cellSpacing="0">...</table>
```


#### [强制] 属性值必须用双引号包围。

解释：

不允许使用单引号，不允许不使用引号。


示例：

```html
<!-- good -->
<script src="esl.js"></script>

<!-- bad -->
<script src='esl.js'></script>
<script src=esl.js></script>
```

#### [建议] 布尔类型的属性，建议不添加属性值。

示例：

```html
<input type="text" disabled>
<input type="checkbox" value="1" checked>
```


#### [建议] 自定义属性建议以 `xxx-` 为前缀，推荐使用 `data-`。

解释：

使用前缀有助于区分自定义属性和标准定义的属性。


示例：

```html
<ol data-ui-type="Select"></ol>
```



## 3 通用


### 3.1 DOCTYPE


#### [强制] 使用 `HTML5` 的 `doctype` 来启用标准模式，建议使用大写的 `DOCTYPE`。

示例：

```html
<!DOCTYPE html>
```

#### [建议] 启用 IE Edge 模式。

示例：

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

#### [建议] 在 `html` 标签上设置正确的 `lang` 属性。

解释：

有助于提高页面的可访问性，如：让语音合成工具确定其所应该采用的发音，令翻译工具确定其翻译语言等。


示例：

```html
<html lang="zh-CN">
```


### 3.2 编码


#### [强制] 页面必须使用精简形式，明确指定字符编码。指定字符编码的 `meta` 必须是 `head` 的第一个直接子元素。

解释：

见 [HTML5 Charset能用吗](http://www.qianduan.net/html5-charset-can-it.html) 一文。

示例：

```html
<html>
    <head>
        <meta charset="UTF-8">
        ......
    </head>
    <body>
        ......
    </body>
</html>
```

#### [建议] `HTML` 文件使用无 `BOM` 的 `UTF-8` 编码。

解释：

`UTF-8` 编码具有更广泛的适应性。`BOM` 在使用程序或工具处理文件时可能造成不必要的干扰。



### 3.3 CSS 和 JavaScript 引入


#### [强制] 引入 `CSS` 时必须指明 `rel="stylesheet"`。

示例：

```html
<link rel="stylesheet" href="page.css">
```


#### [建议] 引入 `CSS` 和 `JavaScript` 时无须指明 `type` 属性。

解释：

`text/css` 和 `text/javascript` 是 `type` 的默认值。


#### [建议] 展现定义放置于外部 `CSS` 中，行为定义放置于外部 `JavaScript` 中。

解释：

结构-样式-行为的代码分离，对于提高代码的可阅读性和维护性都有好处。


#### [建议] 在 `head` 中引入页面需要的所有 `CSS` 资源。

解释：

在页面渲染的过程中，新的CSS可能导致元素的样式重新计算和绘制，页面闪烁。


#### [建议] `JavaScript` 应当放在页面末尾，或采用异步加载。

解释：

将 `script` 放在页面中间将阻断页面的渲染。出于性能方面的考虑，如非必要，请遵守此条建议。


示例：

```html
<body>
    <!-- a lot of elements -->
    <script src="init-behavior.js"></script>
</body>
```


#### [建议] 移动环境或只针对现代浏览器设计的 Web 应用，如果引用外部资源的 `URL` 协议部分与页面相同，建议省略协议前缀。

解释：

使用 `protocol-relative URL` 引入 CSS，在 `IE7/8` 下，会发两次请求。是否使用 `protocol-relative URL` 应充分考虑页面针对的环境。


示例：

```html
<script src="//s1.bdstatic.com/cache/static/jquery-1.10.2.min_f2fb5194.js"></script>
```






## 4 head


### 4.1 title


#### [强制] 页面必须包含 `title` 标签声明标题。

#### [强制] `title` 必须作为 `head` 的直接子元素，并紧随 `charset` 声明之后。

解释：

`title` 中如果包含 ASCII 之外的字符，浏览器需要知道字符编码类型才能进行解码，否则可能导致乱码。


示例：

```html
<head>
    <meta charset="UTF-8">
    <title>页面标题</title>
</head>
```

### 4.2 favicon


#### [强制] 保证 `favicon` 可访问。

解释：

在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 `favicon.ico` 。为了保证 favicon 可访问，避免 404，必须遵循以下两种方法之一：

1. 在 Web Server 根目录放置 `favicon.ico` 文件。
2. 使用 `link` 指定 favicon。


示例：

```html
<link rel="shortcut icon" href="path/to/favicon.ico">
```

### 4.3 viewport


#### [建议] 若页面欲对移动设备友好，需指定页面的 `viewport`。

解释：

viewport meta tag 可以设置可视区域的宽度和初始缩放大小，避免在移动设备上出现页面展示不正常。

比如，在页面宽度小于 `980px` 时，若需 iOS 设备友好，应当设置 viewport 的 `width` 值来适应你的页面宽度。同时因为不同移动设备分辨率不同，在设置时，应当使用 `device-width` 和 `device-height` 变量。

另外，为了使 viewport 正常工作，在页面内容样式布局设计上也要做相应调整，如避免绝对定位等。关于 viewport 的更多介绍，可以参见 [Safari Web Content Guide的介绍](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW26)




## 5 图片



#### [强制] 禁止 `img` 的 `src` 取值为空。延迟加载的图片也要增加默认的 `src`。

解释：

`src` 取值为空，会导致部分浏览器重新加载一次当前页面，参考：<https://developer.yahoo.com/performance/rules.html#emptysrc>


#### [建议] 避免为 `img` 添加不必要的 `title` 属性。

解释：

多余的 `title` 影响看图体验，并且增加了页面尺寸。

#### [建议] 为重要图片添加 `alt` 属性。

解释：

可以提高图片加载失败时的用户体验。

#### [建议] 添加 `width` 和 `height` 属性，以避免页面抖动。

#### [建议] 有下载需求的图片采用 `img` 标签实现，无下载需求的图片采用 CSS 背景图实现。

解释：

1. 产品 logo、用户头像、用户产生的图片等有潜在下载需求的图片，以 `img` 形式实现，能方便用户下载。
2. 无下载需求的图片，比如：icon、背景、代码使用的图片等，尽可能采用 CSS 背景图实现。



## 6 表单


### 6.1 控件标题


#### [强制] 有文本标题的控件必须使用 `label` 标签将其与其标题相关联。

解释：

有两种方式：

1. 将控件置于 `label` 内。
2. `label` 的 `for` 属性指向控件的 `id`。

推荐使用第一种，减少不必要的 `id`。如果 DOM 结构不允许直接嵌套，则应使用第二种。


示例：

```html
<label><input type="checkbox" name="confirm" value="on"> 我已确认上述条款</label>

<label for="username">用户名：</label> <input type="textbox" name="username" id="username">
```


### 6.2 按钮


#### [强制] 使用 `button` 元素时必须指明 `type` 属性值。

解释：

`button` 元素的默认 `type` 为 `submit`，如果被置于 `form` 元素中，点击后将导致表单提交。为显示区分其作用方便理解，必须给出 `type` 属性。


示例：

```html
<button type="submit">提交</button>
<button type="button">取消</button>
```

#### [建议] 尽量不要使用按钮类元素的 `name` 属性。

解释：

由于浏览器兼容性问题，使用按钮的 `name` 属性会带来许多难以发现的问题。具体情况可参考[此文](http://w3help.org/zh-cn/causes/CM2001)。


### 6.3 可访问性 (A11Y)


#### [建议] 负责主要功能的按钮在 DOM 中的顺序应靠前。

解释：

负责主要功能的按钮应相对靠前，以提高可访问性。如果在 CSS 中指定了 `float: right` 则可能导致视觉上主按钮在前，而 DOM 中主按钮靠后的情况。


示例：

```html
<!-- good -->
<style>
.buttons .button-group {
    float: right;
}
</style>

<div class="buttons">
    <div class="button-group">
        <button type="submit">提交</button>
        <button type="button">取消</button>
    </div>
</div>

<!-- bad -->
<style>
.buttons button {
    float: right;
}
</style>

<div class="buttons">
    <button type="button">取消</button>
    <button type="submit">提交</button>
</div>
```

#### [建议] 当使用 JavaScript 进行表单提交时，如果条件允许，应使原生提交功能正常工作。

解释：

当浏览器 JS 运行错误或关闭 JS 时，提交功能将无法工作。如果正确指定了 `form` 元素的 `action` 属性和表单控件的 `name` 属性时，提交仍可继续进行。


示例：

```html
<form action="/login" method="post">
    <p><input name="username" type="text" placeholder="用户名"></p>
    <p><input name="password" type="password" placeholder="密码"></p>
</form>
```

#### [建议] 在针对移动设备开发的页面时，根据内容类型指定输入框的 `type` 属性。

解释：

根据内容类型指定输入框类型，能获得能友好的输入体验。


示例：

```html
<input type="date">
```





## 7 多媒体



#### [建议] 当在现代浏览器中使用 `audio` 以及 `video` 标签来播放音频、视频时，应当注意格式。

解释：

音频应尽可能覆盖到如下格式：

* MP3
* WAV
* Ogg

视频应尽可能覆盖到如下格式：

* MP4
* WebM
* Ogg

#### [建议] 在支持 `HTML5` 的浏览器中优先使用 `audio` 和 `video` 标签来定义音视频元素。

#### [建议] 使用退化到插件的方式来对多浏览器进行支持。

示例：

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    <object width="100" height="50" data="audio.mp3">
        <embed width="100" height="50" src="audio.swf">
    </object>
</audio>

<video width="100" height="50" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
    <object width="100" height="50" data="video.mp4">
        <embed width="100" height="50" src="video.swf">
    </object>
</video>
```

#### [建议] 只在必要的时候开启音视频的自动播放。


#### [建议] 在 `object` 标签内部提供指示浏览器不支持该标签的说明。

示例：

```html
<object width="100" height="50" data="something.swf">DO NOT SUPPORT THIS TAG</object>
```




## 8 模板中的 HTML


#### [建议] 模板代码的缩进优先保证 HTML 代码的缩进规则。

示例：

```html
<!-- good -->
{if $display == true}
<div>
    <ul>
    {foreach $item_list as $item}
        <li>{$item.name}<li>
    {/foreach}
    </ul>
</div>
{/if}

<!-- bad -->
{if $display == true}
    <div>
        <ul>
    {foreach $item_list as $item}
        <li>{$item.name}<li>
    {/foreach}
        </ul>
    </div>
{/if}
```

#### [建议] 模板代码应以保证 HTML 单个标签语法的正确性为基本原则。

示例：

```html
<!-- good -->
<li class="{if $item.type_id == $current_type}focus{/if}">{ $item.type_name }</li>

<!-- bad -->
<li {if $item.type_id == $current_type} class="focus"{/if}>{ $item.type_name }</li>
```

#### [建议] 在循环处理模板数据构造表格时，若要求每行输出固定的个数，建议先将数据分组，之后再循环输出。

示例：

```html
<!-- good -->
<table>
    {foreach $item_list as $item_group}
    <tr>
        {foreach $item_group as $item}
        <td>{ $item.name }</td>
        {/foreach}
    <tr>
    {/foreach}
</table>

<!-- bad -->
<table>
<tr>
    {foreach $item_list as $item}
    <td>{ $item.name }</td>
        {if $item@iteration is div by 5}
    </tr>
    <tr>
        {/if}
    {/foreach}
</tr>
</table>
```

# CSS编码规范




[1 前言](#user-content-1-%E5%89%8D%E8%A8%80)

[2 代码风格](#user-content-2-%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC)

　　[2.1 文件](#user-content-21-%E6%96%87%E4%BB%B6)

　　[2.2 缩进](#user-content-22-%E7%BC%A9%E8%BF%9B)

　　[2.3 空格](#user-content-23-%E7%A9%BA%E6%A0%BC)

　　[2.4 行长度](#user-content-24-%E8%A1%8C%E9%95%BF%E5%BA%A6)

　　[2.5 选择器](#user-content-25-%E9%80%89%E6%8B%A9%E5%99%A8)

　　[2.6 属性](#user-content-26-%E5%B1%9E%E6%80%A7)

[3 通用](#user-content-3-%E9%80%9A%E7%94%A8)

　　[3.1 选择器](#user-content-31-%E9%80%89%E6%8B%A9%E5%99%A8)

　　[3.2 属性缩写](#user-content-32-%E5%B1%9E%E6%80%A7%E7%BC%A9%E5%86%99)

　　[3.3 属性书写顺序](#user-content-33-%E5%B1%9E%E6%80%A7%E4%B9%A6%E5%86%99%E9%A1%BA%E5%BA%8F)

　　[3.4 清除浮动](#user-content-34-%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8)

　　[3.5 !important](#user-content-35-important)

　　[3.6 z-index](#user-content-36-z-index)

[4 值与单位](#user-content-4-%E5%80%BC%E4%B8%8E%E5%8D%95%E4%BD%8D)

　　[4.1 文本](#user-content-41-%E6%96%87%E6%9C%AC)

　　[4.2 数值](#user-content-42-%E6%95%B0%E5%80%BC)

　　[4.3 url()](#user-content-43-url)

　　[4.4 长度](#user-content-44-%E9%95%BF%E5%BA%A6)

　　[4.5 颜色](#user-content-45-%E9%A2%9C%E8%89%B2)

　　[4.6 2D 位置](#user-content-46-2d-%E4%BD%8D%E7%BD%AE)

[5 文本编排](#user-content-5-%E6%96%87%E6%9C%AC%E7%BC%96%E6%8E%92)

　　[5.1 字体族](#user-content-51-%E5%AD%97%E4%BD%93%E6%97%8F)

　　[5.2 字号](#user-content-52-%E5%AD%97%E5%8F%B7)

　　[5.3 字体风格](#user-content-53-%E5%AD%97%E4%BD%93%E9%A3%8E%E6%A0%BC)

　　[5.4 字重](#user-content-54-%E5%AD%97%E9%87%8D)

　　[5.5 行高](#user-content-55-%E8%A1%8C%E9%AB%98)

[6 变换与动画](#user-content-6-%E5%8F%98%E6%8D%A2%E4%B8%8E%E5%8A%A8%E7%94%BB)

[7 响应式](#user-content-7-%E5%93%8D%E5%BA%94%E5%BC%8F)

[8 兼容性](#user-content-8-%E5%85%BC%E5%AE%B9%E6%80%A7)

　　[8.1 属性前缀](#user-content-81-%E5%B1%9E%E6%80%A7%E5%89%8D%E7%BC%80)

　　[8.2 Hack](#user-content-82-hack)

　　[8.3 Expression](#user-content-83-expression)





## 1 前言


CSS 作为网页样式的描述语言，在百度一直有着广泛的应用。本文档的目标是使 CSS 代码风格保持一致，容易被理解和被维护。

虽然本文档是针对 CSS 设计的，但是在使用各种 CSS 的预编译器(如 less、sass、stylus 等)时，适用的部分也应尽量遵循本文档的约定。




## 2 代码风格


### 2.1 文件


#### [建议] `CSS` 文件使用无 `BOM` 的 `UTF-8` 编码。

解释：

UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。

### 2.2 缩进


#### [强制] 使用 `4` 个空格做为一个缩进层级，不允许使用 `2` 个空格 或 `tab` 字符。


示例：

```css
.selector {
    margin: 0;
    padding: 0;
}
```

### 2.3 空格


#### [强制] `选择器` 与 `{` 之间必须包含空格。

示例：

```css
.selector {
}
```

#### [强制] `属性名` 与之后的 `:` 之间不允许包含空格， `:` 与 `属性值` 之间必须包含空格。

示例：

```css
margin: 0;
```

#### [强制] `列表型属性值` 书写在单行时，`,` 后必须跟一个空格。

示例：

```css
font-family: Arial, sans-serif;
```

### 2.4 行长度


#### [强制] 每行不得超过 `120` 个字符，除非单行不可分割。

解释：

常见不可分割的场景为URL超长。


#### [建议] 对于超长的样式，在样式值的 `空格` 处或 `,` 后换行，建议按逻辑分组。

示例：

```css
/* 不同属性值按逻辑分组 */
background:
    transparent url(aVeryVeryVeryLongUrlIsPlacedHere)
    no-repeat 0 0;

/* 可重复多次的属性，每次重复一行 */
background-image:
    url(aVeryVeryVeryLongUrlIsPlacedHere)
    url(anotherVeryVeryVeryLongUrlIsPlacedHere);

/* 类似函数的属性值可以根据函数调用的缩进进行 */
background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.04, rgb(88,94,124)),
    color-stop(0.52, rgb(115,123,162))
);
```

### 2.5 选择器


#### [强制] 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。

示例：

```css
/* good */
.post,
.page,
.comment {
    line-height: 1.5;
}

/* bad */
.post, .page, .comment {
    line-height: 1.5;
}
```

#### [强制] `>`、`+`、`~` 选择器的两边各保留一个空格。

示例：

```css
/* good */
main > nav {
    padding: 10px;
}

label + input {
    margin-left: 5px;
}

input:checked ~ button {
    background-color: #69C;
}

/* bad */
main>nav {
    padding: 10px;
}

label+input {
    margin-left: 5px;
}

input:checked~button {
    background-color: #69C;
}
```

#### [强制] 属性选择器中的值必须用双引号包围。

解释：

不允许使用单引号，不允许不使用引号。


示例：

```css
/* good */
article[character="juliet"] {
    voice-family: "Vivien Leigh", victoria, female;
}

/* bad */
article[character='juliet'] {
    voice-family: "Vivien Leigh", victoria, female;
}
```

### 2.6 属性


#### [强制] 属性定义必须另起一行。

示例：

```css
/* good */
.selector {
    margin: 0;
    padding: 0;
}

/* bad */
.selector { margin: 0; padding: 0; }
```

#### [强制] 属性定义后必须以分号结尾。

示例：

```css
/* good */
.selector {
    margin: 0;
}

/* bad */
.selector {
    margin: 0
}
```






## 3 通用




### 3.1 选择器


#### [强制] 如无必要，不得为 `id`、`class` 选择器添加类型选择器进行限定。

解释：

在性能和维护性上，都有一定的影响。


示例：


```css
/* good */
#error,
.danger-message {
    font-color: #c00;
}

/* bad */
dialog#error,
p.danger-message {
    font-color: #c00;
}
```

#### [建议] 选择器的嵌套层级应不大于 `3` 级，位置靠后的限定条件应尽可能精确。

示例：

```css
/* good */
#username input {}
.comment .avatar {}

/* bad */
.page .header .login #username input {}
.comment div * {}
```



### 3.2 属性缩写



#### [建议] 在可以使用缩写的情况下，尽量使用属性缩写。

示例：

```css
/* good */
.post {
    font: 12px/1.5 arial, sans-serif;
}

/* bad */
.post {
    font-family: arial, sans-serif;
    font-size: 12px;
    line-height: 1.5;
}
```

#### [建议] 使用 `border` / `margin` / `padding` 等缩写时，应注意隐含值对实际数值的影响，确实需要设置多个方向的值时才使用缩写。

解释：

`border` / `margin` / `padding` 等缩写会同时设置多个属性的值，容易覆盖不需要覆盖的设定。如某些方向需要继承其他声明的值，则应该分开设置。


示例：

```css
/* centering <article class="page"> horizontally and highlight featured ones */
article {
    margin: 5px;
    border: 1px solid #999;
}

/* good */
.page {
    margin-right: auto;
    margin-left: auto;
}

.featured {
    border-color: #69c;
}

/* bad */
.page {
    margin: 5px auto; /* introducing redundancy */
}

.featured {
    border: 1px solid #69c; /* introducing redundancy */
}
```


### 3.3 属性书写顺序


#### [建议] 同一 rule set 下的属性在书写时，应按功能进行分组，并以 **Formatting Model（布局方式、位置） > Box Model（尺寸） > Typographic（文本相关） > Visual（视觉效果）** 的顺序书写，以提高代码的可读性。

解释：

- Formatting Model 相关属性包括：`position` / `top` / `right` / `bottom` / `left` / `float` / `display` / `overflow` 等
- Box Model 相关属性包括：`border` / `margin` / `padding` / `width` / `height` 等
- Typographic 相关属性包括：`font` / `line-height` / `text-align` / `word-wrap` 等
- Visual 相关属性包括：`background` / `color` / `transition` / `list-style` 等

另外，如果包含 `content` 属性，应放在最前面。


示例：

```css
.sidebar {
    /* formatting model: positioning schemes / offsets / z-indexes / display / ...  */
    position: absolute;
    top: 50px;
    left: 0;
    overflow-x: hidden;

    /* box model: sizes / margins / paddings / borders / ...  */
    width: 200px;
    padding: 5px;
    border: 1px solid #ddd;

    /* typographic: font / aligns / text styles / ... */
    font-size: 14px;
    line-height: 20px;

    /* visual: colors / shadows / gradients / ... */
    background: #f5f5f5;
    color: #333;
    -webkit-transition: color 1s;
       -moz-transition: color 1s;
            transition: color 1s;
}
```


### 3.4 清除浮动



#### [建议] 当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置 `clear` 或触发 `BFC` 的方式进行 `clearfix`。尽量不使用增加空标签的方式。

解释：

触发 BFC 的方式很多，常见的有：

* float 非 none
* position 非 static
* overflow 非 visible

如希望使用更小副作用的清除浮动方法，参见 [A new micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/) 一文。

另需注意，对已经触发 BFC 的元素不需要再进行 clearfix。


### 3.5 !important


#### [建议] 尽量不使用 `!important` 声明。


#### [建议] 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 `!important` 定义样式。

解释：

必须注意的是，仅在设计上 `确实不允许任何其它场景覆盖样式` 时，才使用内联的 `!important` 样式。通常在第三方环境的应用中使用这种方案。下面的 `z-index` 章节是其中一个特殊场景的典型样例。



### 3.6 z-index



#### [建议] 将 `z-index` 进行分层，对文档流外绝对定位元素的视觉层级关系进行管理。

解释：

同层的多个元素，如多个由用户输入触发的 Dialog，在该层级内使用相同的 `z-index` 或递增 `z-index`。

建议每层包含100个 `z-index` 来容纳足够的元素，如果每层元素较多，可以调整这个数值。


#### [建议] 在可控环境下，期望显示在最上层的元素，`z-index` 指定为 `999999`。

解释：

可控环境分成两种，一种是自身产品线环境；还有一种是可能会被其他产品线引用，但是不会被外部第三方的产品引用。

不建议取值为 `2147483647`。以便于自身产品线被其他产品线引用时，当遇到层级覆盖冲突的情况，留出向上调整的空间。


#### [建议] 在第三方环境下，期望显示在最上层的元素，通过标签内联和 `!important`，将 `z-index` 指定为 `2147483647`。

解释：

第三方环境对于开发者来说完全不可控。在第三方环境下的元素，为了保证元素不被其页面其他样式定义覆盖，需要采用此做法。




## 4 值与单位


### 4.1 文本


#### [强制] 文本内容必须用双引号包围。

解释：

文本类型的内容可能在选择器、属性值等内容中。


示例：

```css
/* good */
html[lang|="zh"] q:before {
    font-family: "Microsoft YaHei", sans-serif;
    content: "“";
}

html[lang|="zh"] q:after {
    font-family: "Microsoft YaHei", sans-serif;
    content: "”";
}

/* bad */
html[lang|=zh] q:before {
    font-family: 'Microsoft YaHei', sans-serif;
    content: '“';
}

html[lang|=zh] q:after {
    font-family: "Microsoft YaHei", sans-serif;
    content: "”";
}
```

### 4.2 数值


#### [强制] 当数值为 0 - 1 之间的小数时，省略整数部分的 `0`。

示例：

```css
/* good */
panel {
    opacity: .8;
}

/* bad */
panel {
    opacity: 0.8;
}
```

### 4.3 url()


#### [强制] `url()` 函数中的路径不加引号。

示例：

```css
body {
    background: url(bg.png);
}
```


#### [建议] `url()` 函数中的绝对路径可省去协议名。


示例：

```css
body {
    background: url(//baidu.com/img/bg.png) no-repeat 0 0;
}
```


### 4.4 长度


#### [强制] 长度为 `0` 时须省略单位。 (也只有长度单位可省)

示例：

```css
/* good */
body {
    padding: 0 5px;
}

/* bad */
body {
    padding: 0px 5px;
}
```


### 4.5 颜色


#### [强制] RGB颜色值必须使用十六进制记号形式 `#rrggbb`。不允许使用 `rgb()`。 

解释：

带有alpha的颜色信息可以使用 `rgba()`。使用 `rgba()` 时每个逗号后必须保留一个空格。


示例：

```css
/* good */
.success {
    box-shadow: 0 0 2px rgba(0, 128, 0, .3);
    border-color: #008000;
}

/* bad */
.success {
    box-shadow: 0 0 2px rgba(0,128,0,.3);
    border-color: rgb(0, 128, 0);
}
```

#### [强制] 颜色值可以缩写时，必须使用缩写形式。

示例：

```css
/* good */
.success {
    background-color: #aca;
}

/* bad */
.success {
    background-color: #aaccaa;
}
```

#### [强制] 颜色值不允许使用命名色值。

示例：

```css
/* good */
.success {
    color: #90ee90;
}

/* bad */
.success {
    color: lightgreen;
}
```

#### [建议] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。


示例：

```css
/* good */
.success {
    background-color: #aca;
    color: #90ee90;
}

/* good */
.success {
    background-color: #ACA;
    color: #90EE90;
}

/* bad */
.success {
    background-color: #ACA;
    color: #90ee90;
}
```


### 4.6 2D 位置


#### [强制] 必须同时给出水平和垂直方向的位置。

解释：

2D 位置初始值为 `0% 0%`，但在只有一个方向的值时，另一个方向的值会被解析为 center。为避免理解上的困扰，应同时给出两个方向的值。[background-position属性值的定义](http://www.w3.org/TR/CSS21/colors.html#propdef-background-position)


示例：

```css
/* good */
body {
    background-position: center top; /* 50% 0% */
}

/* bad */
body {
    background-position: top; /* 50% 0% */
}
```





## 5 文本编排


### 5.1 字体族


#### [强制] `font-family` 属性中的字体族名称应使用字体的英文 `Family Name`，其中如有空格，须放置在引号中。

解释：

所谓英文 Family Name，为字体文件的一个元数据，常见名称如下：

| 字体            | 操作系统 | Family Name         |
| --------------- | -------- | ------------------- |
| 宋体 (中易宋体) | Windows  | SimSun              |
| 黑体 (中易黑体) | Windows  | SimHei              |
| 微软雅黑        | Windows  | Microsoft YaHei     |
| 微软正黑        | Windows  | Microsoft JhengHei  |
| 华文黑体        | Mac/iOS  | STHeiti             |
| 冬青黑体        | Mac/iOS  | Hiragino Sans GB    |
| 文泉驿正黑      | Linux    | WenQuanYi Zen Hei   |
| 文泉驿微米黑    | Linux    | WenQuanYi Micro Hei |


示例：

```css
h1 {
    font-family: "Microsoft YaHei";
}
```


#### [强制] `font-family` 按「西文字体在前、中文字体在后」、「效果佳 (质量高/更能满足需求) 的字体在前、效果一般的字体在后」的顺序编写，最后必须指定一个通用字体族( `serif` / `sans-serif` )。

解释：

更详细说明可参考[本文](http://www.zhihu.com/question/19911793/answer/13329819)。

示例：

```css
/* Display according to platform */
.article {
    font-family: Arial, sans-serif;
}

/* Specific for most platforms */
h1 {
    font-family: "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif;
}
```

#### [强制] `font-family` 不区分大小写，但在同一个项目中，同样的 `Family Name` 大小写必须统一。

示例：

```css
/* good */
body {
    font-family: Arial, sans-serif;
}

h1 {
    font-family: Arial, "Microsoft YaHei", sans-serif;
}

/* bad */
body {
    font-family: arial, sans-serif;
}

h1 {
    font-family: Arial, "Microsoft YaHei", sans-serif;
}
```

### 5.2 字号


#### [强制] 需要在 Windows 平台显示的中文内容，其字号应不小于 `12px`。

解释：

由于 Windows 的字体渲染机制，小于 `12px` 的文字显示效果极差、难以辨认。


### 5.3 字体风格


#### [建议] 需要在 Windows 平台显示的中文内容，不要使用除 `normal` 外的 `font-style`。其他平台也应慎用。

解释：

由于中文字体没有 `italic` 风格的实现，所有浏览器下都会 fallback 到 `obilique` 实现 (自动拟合为斜体)，小字号下 (特别是 Windows 下会在小字号下使用点阵字体的情况下) 显示效果差，造成阅读困难。


### 5.4 字重


#### [强制] `font-weight` 属性必须使用数值方式描述。

解释：

CSS 的字重分 100 – 900 共九档，但目前受字体本身质量和浏览器的限制，实际上支持 `400` 和 `700` 两档，分别等价于关键词 `normal` 和 `bold`。

浏览器本身使用一系列[启发式规则](http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight)来进行匹配，在 `<700` 时一般匹配字体的 Regular 字重，`>=700` 时匹配 Bold 字重。

但已有浏览器开始支持 `=600` 时匹配 Semibold 字重 (见[此表](http://justineo.github.io/slideshows/font/#/3/15))，故使用数值描述增加了灵活性，也更简短。

示例：

```css
/* good */
h1 {
    font-weight: 700;
}

/* bad */
h1 {
    font-weight: bold;
}
```

### 5.5 行高


#### [建议] `line-height` 在定义文本段落时，应使用数值。

解释：

将 `line-height` 设置为数值，浏览器会基于当前元素设置的 `font-size` 进行再次计算。在不同字号的文本段落组合中，能达到较为舒适的行间间隔效果，避免在每个设置了 `font-size` 都需要设置 `line-height`。

当 `line-height` 用于控制垂直居中时，还是应该设置成与容器高度一致。


示例：

```css
.container {
    line-height: 1.5;
}
```



## 6 变换与动画



#### [强制] 使用 `transition` 时应指定 `transition-property`。

示例：

```css
/* good */
.box {
    transition: color 1s, border-color 1s;
}

/* bad */
.box {
    transition: all 1s;
}
```

#### [建议] 尽可能在浏览器能高效实现的属性上添加过渡和动画。

解释：

见[本文](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)，在可能的情况下应选择这样四种变换：

* `transform: translate(npx, npx);`
* `transform: scale(n);`
* `transform: rotate(ndeg);`
* `opacity: 0..1;`

典型的，可以使用 `translate` 来代替 `left` 作为动画属性。

示例：

```css
/* good */
.box {
    transition: transform 1s;
}
.box:hover {
    transform: translate(20px); /* move right for 20px */
}

/* bad */
.box {
    left: 0;
    transition: left 1s;
}
.box:hover {
    left: 20px; /* move right for 20px */
}
```




## 7 响应式



#### [强制] `Media Query` 不得单独编排，必须与相关的规则一起定义。

示例：

```css
/* Good */
/* header styles */
@media (...) {
    /* header styles */
}

/* main styles */
@media (...) {
    /* main styles */
}

/* footer styles */
@media (...) {
    /* footer styles */
}


/* Bad */
/* header styles */
/* main styles */
/* footer styles */

@media (...) {
    /* header styles */
    /* main styles */
    /* footer styles */
}
```

#### [强制] `Media Query` 如果有多个逗号分隔的条件时，应将每个条件放在单独一行中。

示例：

```css
@media
(-webkit-min-device-pixel-ratio: 2), /* Webkit-based browsers */
(min--moz-device-pixel-ratio: 2),    /* Older Firefox browsers (prior to Firefox 16) */
(min-resolution: 2dppx),             /* The standard way */
(min-resolution: 192dpi) {           /* dppx fallback */
    /* Retina-specific stuff here */
}
```

#### [建议] 尽可能给出在高分辨率设备 (Retina) 下效果更佳的样式。



## 8 兼容性


### 8.1 属性前缀


#### [强制] 带私有前缀的属性由长到短排列，按冒号位置对齐。

解释：

标准属性放在最后，按冒号对齐方便阅读，也便于在编辑器内进行多行编辑。


示例：

```css
.box {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
```


### 8.2 Hack


#### [建议] 需要添加 `hack` 时应尽可能考虑是否可以采用其他方式解决。

解释：

如果能通过合理的 HTML 结构或使用其他的 CSS 定义达到理想的样式，则不应该使用 hack 手段解决问题。通常 hack 会导致维护成本的增加。

#### [建议] 尽量使用 `选择器 hack` 处理兼容性，而非 `属性 hack`。

解释：

尽量使用符合 CSS 语法的 selector hack，可以避免一些第三方库无法识别 hack 语法的问题。


示例：

```css
/* IE 7 */
*:first-child + html #header {
    margin-top: 3px;
    padding: 5px;
}

/* IE 6 */
* html #header {
    margin-top: 5px;
    padding: 4px;
}
```


#### [建议] 尽量使用简单的 `属性 hack`。

示例：

```css
.box {
    _display: inline; /* fix double margin */
    float: left;
    margin-left: 20px;
}

.container {
    overflow: hidden;
    *zoom: 1; /* triggering hasLayout */
}
```

### 8.3 Expression


#### [强制] 禁止使用 `Expression`。

# 图表配色

## 配色指南

### 标准色

通过整体颜色规范提取和增加，提炼出 6 个标准色，颜色使用较少时，首选标准色；

分别为：`#60acfc 100%` 、`#32d3eb 100%` 、`#5bc49f 100%` 、`#feb64d 100%` 、`#ff7c7c 100%` 、`#9287e7 100%`

![](https://vis.baidu.com/chartcolor/color/charts_color_img01.png)

### 基准色

通过标准色扩展出 24个基准色，相互链接组成基准色环，如果图表用色数量较多，标准色无法满足颜色要求，可以从基准色中进行拓展与标准色近似的色值。

![](https://vis.baidu.com/chartcolor/color/charts_color_img02.png)

### 扩展色

 基础色相可以通过叠加 20% 白或者 10% 黑来扩展出不同明度的颜色，应用于颜色更加丰富的使用场景。

![](https://vis.baidu.com/chartcolor/color/charts_color_img03.png)

## 配色方案

为了方便特定场景下的图表样式，我们归纳了一下几个配色方案建议以供参考。

- 颜色对比型：推荐图表颜色之间对比较为明显的场景下使用；

- 冷色：推荐图表偏冷色系的情况使用；

- 暖色：推荐图表偏暖色系的情况使用。

  ![](https://vis.baidu.com/chartcolor/color/charts_color_img04.png)

## 背景色使用

图表背景颜色必须要很好的衬托图表主体，又不产生喧宾夺主的效果。目前常见的背景色有深色系和浅色系两种。

**深色系**

- 优点：更好的凸显主体，建立良好的视觉层次，反应图表内容，视觉吸引力强；
- 缺点：可读性低、对配色水平要求较高；

**浅色系**

- 优点：适用性广，可读性高；
- 缺点：图表内容不易聚焦；

背景色建议：`#ffffff`  `#f7f7f7`  `#333333`

![](https://vis.baidu.com/chartcolor/color/charts_color_img09.jpg)

# SVG

## 一、概述

SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。

![img](https://www.wangbase.com/blogimg/asset/201808/bg2018080601.jpg)

SVG 文件可以直接插入网页，成为 DOM 的一部分，然后用 JavaScript 和 CSS 进行操作。

> ```markup
> <!DOCTYPE html>
> <html>
> <head></head>
> <body>
> <svg
>   id="mysvg"
>   xmlns="http://www.w3.org/2000/svg"
>   viewBox="0 0 800 600"
>   preserveAspectRatio="xMidYMid meet"
> >
>   <circle id="mycircle" cx="400" cy="300" r="50" />
> <svg>
> </body>
> </html>
> ```

上面是 SVG 代码直接插入网页的例子。

SVG 代码也可以写在一个独立文件中，然后用`<img>`、`<object>`、`<embed>`、`<iframe>`等标签插入网页。

> ```markup
> <img src="circle.svg">
> <object id="object" data="circle.svg" type="image/svg+xml"></object>
> <embed id="embed" src="icon.svg" type="image/svg+xml">
> <iframe id="iframe" src="icon.svg"></iframe>
> ```

CSS 也可以使用 SVG 文件。

> ```css
> .logo {
>   background: url(icon.svg);
> }
> ```

SVG 文件还可以转为 BASE64 编码，然后作为 Data URI 写入网页。

> ```markup
> <img src="data:image/svg+xml;base64,[data]">
> ```

## 二、语法

### 2.1 `<svg>`标签

SVG 代码都放在顶层标签`<svg>`之中。下面是一个例子。

> ```markup
> <svg width="100%" height="100%">
>   <circle id="mycircle" cx="50" cy="50" r="50" />
> </svg>
> ```

<svg>的width属性和height属性，指定了 SVG 图像在 HTML 元素中所占据的宽度和高度。除了相对单位，也可以采用绝对单位（单位：像素）。如果不指定这两个属性，SVG 图像默认大小是300像素（宽） x 150像素（高）。

如果只想展示 SVG 图像的一部分，就要指定`viewBox`属性。

> ```markup
> <svg width="100" height="100" viewBox="50 50 50 50">
>   <circle id="mycircle" cx="50" cy="50" r="50" />
> </svg>
> ```

`<viewBox>`属性的值有四个数字，分别是左上角的横坐标和纵坐标、视口的宽度和高度。上面代码中，SVG 图像是100像素宽 x 100像素高，`viewBox`属性指定视口从`(50, 50)`这个点开始。所以，实际看到的是右下角的四分之一圆。

注意，视口必须适配所在的空间。上面代码中，视口的大小是 50 x 50，由于 SVG 图像的大小是 100 x 100，所以视口会放大去适配 SVG 图像的大小，即放大了四倍。

如果不指定`width`属性和`height`属性，只指定`viewBox`属性，则相当于只给定 SVG 图像的长宽比。这时，SVG 图像的默认大小将等于所在的 HTML 元素的大小。

### 2.2 `<circle>`标签

`<circle>`标签代表圆形。

> ```markup
> <svg width="300" height="180">
>   <circle cx="30"  cy="50" r="25" />
>   <circle cx="90"  cy="50" r="25" class="red" />
>   <circle cx="150" cy="50" r="25" class="fancy" />
> </svg>
> ```

上面的代码定义了三个圆。`<circle>`标签的`cx`、`cy`、`r`属性分别为横坐标、纵坐标和半径，单位为像素。坐标都是相对于`<svg>`画布的左上角原点。

`class`属性用来指定对应的 CSS 类。

> ```css
> .red {
>   fill: red;
> }
> 
> .fancy {
>   fill: none;
>   stroke: black;
>   stroke-width: 3pt;
> }
> ```

SVG 的 CSS 属性与网页元素有所不同。

> - fill：填充色
> - stroke：描边色
> - stroke-width：边框宽度

### 2.3 `<line>`标签

`<line>`标签用来绘制直线。

> ```markup
> <svg width="300" height="180">
>   <line x1="0" y1="0" x2="200" y2="0" style="stroke:rgb(0,0,0);stroke-width:5" />
> </svg>
> ```

上面代码中，`<line>`标签的`x1`属性和`y1`属性，表示线段起点的横坐标和纵坐标；`x2`属性和`y2`属性，表示线段终点的横坐标和纵坐标；`style`属性表示线段的样式。

### 2.4 `<polyline>`标签

`<polyline>`标签用于绘制一根折线。

> ```markup
> <svg width="300" height="180">
>   <polyline points="3,3 30,28 3,53" fill="none" stroke="black" />
> </svg>
> ```

`<polyline>`的`points`属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔。

### 2.5 `<rect>`标签

`<rect>`标签用于绘制矩形。

> ```markup
> <svg width="300" height="180">
>   <rect x="0" y="0" height="100" width="200" style="stroke: #70d5dd; fill: #dd524b" />
> </svg>
> ```

`<rect>`的`x`属性和`y`属性，指定了矩形左上角端点的横坐标和纵坐标；`width`属性和`height`属性指定了矩形的宽度和高度（单位像素）。

### 2.6 `<ellipse>`标签

`<ellipse>`标签用于绘制椭圆。

> ```markup
> <svg width="300" height="180">
>   <ellipse cx="60" cy="60" ry="40" rx="20" stroke="black" stroke-width="5" fill="silver"/>
> </svg>
> ```

`<ellipse>`的`cx`属性和`cy`属性，指定了椭圆中心的横坐标和纵坐标（单位像素）；`rx`属性和`ry`属性，指定了椭圆横向轴和纵向轴的半径（单位像素）。

### 2.7 `<polygon>`标签

`<polygon>`标签用于绘制多边形。

> ```markup
> <svg width="300" height="180">
>   <polygon fill="green" stroke="orange" stroke-width="1" points="0,0 100,0 100,100 0,100 0,0"/>
> </svg>
> ```

`<polygon>`的`points`属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔。

### 2.8 `<path>`标签

`<path>`标签用于制路径。

> ```markup
> <svg width="300" height="180">
> <path d="
>   M 18,3
>   L 46,3
>   L 46,40
>   L 61,40
>   L 32,68
>   L 3,40
>   L 18,40
>   Z
> "></path>
> </svg>
> ```

`<path>`的`d`属性表示绘制顺序，它的值是一个长字符串，每个字母表示一个绘制动作，后面跟着坐标。

> - M：移动到（moveto）
> - L：画直线到（lineto）
> - Z：闭合路径

### 2.9 `<text>`标签

`<text>`标签用于绘制文本。

> ```markup
> <svg width="300" height="180">
>   <text x="50" y="25">Hello World</text>
> </svg>
> ```

`<text>`的`x`属性和`y`属性，表示文本区块基线（baseline）起点的横坐标和纵坐标。文字的样式可以用`class`或`style`属性指定。

### 2.10 `<use>`标签

`<use>`标签用于复制一个形状。

> ```markup
> <svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
>   <circle id="myCircle" cx="5" cy="5" r="4"/>
> 
>   <use href="#myCircle" x="10" y="0" fill="blue" />
>   <use href="#myCircle" x="20" y="0" fill="white" stroke="blue" />
> </svg>
> ```

`<use>`的`href`属性指定所要复制的节点，`x`属性和`y`属性是`<use>`左上角的坐标。另外，还可以指定`width`和`height`坐标。

### 2.11 `<g>`标签

`<g>`标签用于将多个形状组成一个组（group），方便复用。

> ```markup
> <svg width="300" height="100">
>   <g id="myCircle">
>     <text x="25" y="20">圆形</text>
>     <circle cx="50" cy="50" r="20"/>
>   </g>
> 
>   <use href="#myCircle" x="100" y="0" fill="blue" />
>   <use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
> </svg>
> ```

### 2.12 `<defs>`标签

`<defs>`标签用于自定义形状，它内部的代码不会显示，仅供引用。

> ```markup
> <svg width="300" height="100">
>   <defs>
>     <g id="myCircle">
>       <text x="25" y="20">圆形</text>
>       <circle cx="50" cy="50" r="20"/>
>     </g>
>   </defs>
> 
>   <use href="#myCircle" x="0" y="0" />
>   <use href="#myCircle" x="100" y="0" fill="blue" />
>   <use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
> </svg>
> ```

### 2.13 `<pattern>`标签

`<pattern>`标签用于自定义一个形状，该形状可以被引用来平铺一个区域。

> ```markup
> <svg width="500" height="500">
>   <defs>
>     <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
>       <circle fill="#bee9e8" cx="50" cy="50" r="35" />
>     </pattern>
>   </defs>
>   <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
> </svg>
> ```

上面代码中，`<pattern>`标签将一个圆形定义为`dots`模式。`patternUnits="userSpaceOnUse"`表示`<pattern>`的宽度和长度是实际的像素值。然后，指定这个模式去填充下面的矩形。

### 2.14 `<image>`标签

`<image>`标签用于插入图片文件。

> ```markup
> <svg viewBox="0 0 100 100" width="100" height="100">
>   <image xlink:href="path/to/image.jpg"
>     width="50%" height="50%"/>
> </svg>
> ```

上面代码中，`<image>`的`xlink:href`属性表示图像的来源。

### 2.15 `<animate>`标签

`<animate>`标签用于产生动画效果。

> ```markup
> <svg width="500px" height="500px">
>   <rect x="0" y="0" width="100" height="100" fill="#feac5e">
>     <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
>   </rect>
> </svg>
> ```

上面代码中，矩形会不断移动，产生动画效果。

`<animate>`的属性含义如下。

> - attributeName：发生动画效果的属性名。
> - from：单次动画的初始值。
> - to：单次动画的结束值。
> - dur：单次动画的持续时间。
> - repeatCount：动画的循环模式。

可以在多个属性上面定义动画。

> ```markup
> <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
> <animate attributeName="width" to="500" dur="2s" repeatCount="indefinite" />
> ```

### 2.16 `<animateTransform>`标签

`<animate>`标签对 CSS 的`transform`属性不起作用，如果需要变形，就要使用`<animateTransform>`标签。

> ```markup
> <svg width="500px" height="500px">
>   <rect x="250" y="250" width="50" height="50" fill="#4bc0c8">
>     <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 200 200" to="360 400 400" repeatCount="indefinite" />
>   </rect>
> </svg>
> ```

上面代码中，`<animateTransform>`的效果为旋转（`rotate`），这时`from`和`to`属性值有三个数字，第一个数字是角度值，第二个值和第三个值是旋转中心的坐标。`from="0 200 200"`表示开始时，角度为0，围绕`(200, 200)`开始旋转；`to="360 400 400"`表示结束时，角度为360，围绕`(400, 400)`旋转。

## 三、JavaScript 操作

### 3.1 DOM 操作

如果 SVG 代码直接写在 HTML 网页之中，它就成为网页 DOM 的一部分，可以直接用 DOM 操作。

> ```markup
> <svg
>   id="mysvg"
>   xmlns="http://www.w3.org/2000/svg"
>   viewBox="0 0 800 600"
>   preserveAspectRatio="xMidYMid meet"
> >
>   <circle id="mycircle" cx="400" cy="300" r="50" />
> <svg>
> ```

上面代码插入网页之后，就可以用 CSS 定制样式。

> ```css
> circle {
>   stroke-width: 5;
>   stroke: #f00;
>   fill: #ff0;
> }
> 
> circle:hover {
>   stroke: #090;
>   fill: #fff;
> }
> ```

然后，可以用 JavaScript 代码操作 SVG。

> ```javascript
> var mycircle = document.getElementById('mycircle');
> 
> mycircle.addEventListener('click', function(e) {
>   console.log('circle clicked - enlarging');
>   mycircle.setAttribute('r', 60);
> }, false);
> ```

上面代码指定，如果点击图形，就改写`circle`元素的`r`属性。

### 3.2 获取 SVG DOM

使用`<object>`、`<iframe>`、`<embed>`标签插入 SVG 文件，可以获取 SVG DOM。

> ```javascript
> var svgObject = document.getElementById('object').contentDocument;
> var svgIframe = document.getElementById('iframe').contentDocument;
> var svgEmbed = document.getElementById('embed').getSVGDocument();
> ```

注意，如果使用`<img>`标签插入 SVG 文件，就无法获取 SVG DOM。

### 3.3 读取 SVG 源码

由于 SVG 文件就是一段 XML 文本，因此可以通过读取 XML 代码的方式，读取 SVG 源码。

> ```markup
> <div id="svg-container">
>   <svg
>     xmlns="http://www.w3.org/2000/svg"
>     xmlns:xlink="http://www.w3.org/1999/xlink"
>     xml:space="preserve" width="500" height="440"
>   >
>     <!-- svg code -->
>   </svg>
> </div>
> ```

使用`XMLSerializer`实例的`serializeToString()`方法，获取 SVG 元素的代码。

> ```javascript
> var svgString = new XMLSerializer()
>   .serializeToString(document.querySelector('svg'));
> ```

### 3.4 SVG 图像转为 Canvas 图像

首先，需要新建一个`Image`对象，将 SVG 图像指定到该`Image`对象的`src`属性。

> ```javascript
> var img = new Image();
> var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
> 
> var DOMURL = self.URL || self.webkitURL || self;
> var url = DOMURL.createObjectURL(svg);
> 
> img.src = url;
> ```

然后，当图像加载完成后，再将它绘制到`<canvas>`元素。

> ```javascript
> img.onload = function () {
>   var canvas = document.getElementById('canvas');
>   var ctx = canvas.getContext('2d');
>   ctx.drawImage(img, 0, 0);
> };
> ```

## 四、实例：折线图

下面将一张数据表格画成折线图。

> ```markup
> Date |Amount
> -----|------
> 2014-01-01 | $10
> 2014-02-01 | $20
> 2014-03-01 | $40
> 2014-04-01 | $80
> ```

上面的图形，可以画成一个坐标系，`Date`作为横轴，`Amount`作为纵轴，四行数据画成一个数据点。

> ```markup
> <svg width="350" height="160">
>   <g class="layer" transform="translate(60,10)">
>     <circle r="5" cx="0"   cy="105" />
>     <circle r="5" cx="90"  cy="90"  />
>     <circle r="5" cx="180" cy="60"  />
>     <circle r="5" cx="270" cy="0"   />
> 
>     <g class="y axis">
>       <line x1="0" y1="0" x2="0" y2="120" />
>       <text x="-40" y="105" dy="5">$10</text>
>       <text x="-40" y="0"   dy="5">$80</text>
>     </g>
>     <g class="x axis" transform="translate(0, 120)">
>       <line x1="0" y1="0" x2="270" y2="0" />
>       <text x="-30"   y="20">January 2014</text>
>       <text x="240" y="20">April</text>
>     </g>
>   </g>
> </svg>
> ```