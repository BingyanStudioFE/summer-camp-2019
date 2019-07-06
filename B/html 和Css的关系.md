# html 和Css的关系

1.html是网页内容的载体

2.css样式是表现

3.javascript是来实现网页上的特效效果

# html

<pre>font-size:12px; 设置文字的大小
color:#930;设置颜色
text-align:center;设置文字居中

<img src="   " >设置图片

不区分大小写

<pre>
    html	
    	head    /head 中可以有title   script    style    link    meta
    	body    /body    网页的主要内容   h1   p   a   img 
    /html
</pre>

<pre>
    head
    	title   /title网页的标题信息，会出现在浏览器的标题栏里
    	meta
    	link
    	style     /style
    	script    /script
    /head
</pre>

<!--注释-->

<pre>	em   /em   强调 斜体   <em>强调斜体</em>

<pre>strong   /strong   强调 粗体  <strong>强调粗体</strong>

<pre>span为其他的文字设置为不同的格式，颜色之类的

<pre>q    /q   引用文本自动加双引号     <q>引用</q>

br /   相当于回车

输入空格要输入& nbsp   如果直接输入空格，输入多个空格只会显示一个空格

hr水平横线<hr/>



address   /address 地址  默认斜体和em一样

code   /code   代码语言一行

pre   /pre  大段代码

<ul><li>没有顺序的ul</li><li>没有顺序的</li></ul>



<ol><li>有顺序的ol</li><li>有顺序的 </li></ol>



div把网页分成栏目   块

div id=""   /div    可以给div命名

<table>
    <tr>
        <th>产品名称</th>
        <th>品牌</th>
        <th>库存量</th>
        <th>入库时间</th>
    </tr>
    <tr>
        <td>耳机</td>
        <td>联想</td>
        <td>500</td>
        <td>2003-1-2</td>
    </tr>
    <tr>
        <td>U盘</td>
        <td>金士顿</td>
        <td>120</td>
        <td>2013-8-10</td>
    </tr>
    <tr>
        <td>U盘</td>
        <td>爱国者</td>
		<td>133</td>
        <td>2013-3-25</td>
    </tr>
</table>

为边框加css

<style type="text/css">table tr td th {border:1px solid #000;}</style>

表格可以添加摘要和标题

#### 摘要

不会在浏览器显示出来<table summary="表格简述内容">

#### 标题

<table>
    <caption>标题文本<caption>
</table>



  <a>链接

<a href="http://www.baidu.com"></a>

mailto 可以链接email地址   不详细说明

<img src="4.jpg">

img src=""  插入图片   alt=""  图像显示不成功时显示的文字   title=" "鼠标放上面时显示的文本

<from method="传送方式" action="服务器文件">

</from>

from成对出现

action浏览者输入的数据被传送到的地方，比如一个PHP页面

method 数据传送的方式(get/post)

<input type="text/password" name="名称" value="文本"/>

type="text"时输入框为文本输入框

type="password"时输入框为密码输入框

name：为文本框命名

value：为文本框输入设置默认值

<textarea rows="行数" cols="列数">文本</textarea>

textarea成对出现

cols列数

rows行数

单选框、复选框

单选框：只能选一个

复选框：可以选多个

<input type="radio/checkbox" value="值" name="名称" chenked="chenked"/>

type="radio"时为单选

type="checkbox"时为多选

value 提交数据到服务器的值(后台程序PHP使用)

name:为控件命名，以备后台ASP、PHP使用

checked:当设置checked="ckecked"时，该选项默认选中

#### 下拉列表

<option value='提交值'>选项</option>

提交值：向服务器提交的值

选项：显示的值

设置selected="selected"该选项默认被选中

这个也可以多选， 不详细写

<input type="submit" value="提交">

只有当type设置为submit时按钮才有提交作用

<input type="reset" value="重置">

当type为reset时按钮才有重置的功能

####　ｌａｂｅｌ

label标签不会向用户呈现任何特殊效果，它的作用是为鼠标用户改进了可用性。如果你在 label 标签内点击文本，就会触发此控件。就是说，当用户单击选中该label标签时，浏览器就会自动将焦点转到和标签相关的表单控件上（就自动选中和该label标签相关连的表单控件上）。

语法：

```
<label for="控件id名称">
```

注意：标签的 for 属性中的值应当与相关控件的 id 属性值一定要相同。

例子：

```
<form>
  <label for="male">男</label>
  <input type="radio" name="gender" id="male" />
  <br />
  <label for="female">女</label>
  <input type="radio" name="gender" id="female" />
  <label for="email">输入你的邮箱地址</label>
  <input type="email" id="email" placeholder="Enter email">
</form>
```

