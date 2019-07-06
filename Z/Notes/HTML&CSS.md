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

# CSS

