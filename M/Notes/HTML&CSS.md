（一）CSS
=============
css基础语法
-------------
>selector {declaration1; declaration2; ... declarationN }  
>selector {property: value}  

- color五种方法：
>p { color: #ff0000; }  
>p { color: #f00; }  
>p { color: red; }  
>p { color: rgb(255,0,0); }  
>p { color: rgb(100%,0%,0%); }   

- 多种属性值

      p
      {  
      text-align: center;  
      color: black;  
      font-family: arial;  
      }  

CSS高级语法
---------- 
- selector分组  

      h1,h2,h3,h4,h5,h6 {  
      color: green;  
      }  
  
- 继承问题

      body {   
      font-family: Verdana, sans-serif;  
      }  
一般来说，子元素继承父元素的属性。有些浏览器会忽略继承问题。  
 
- 派生选择器  

       <li><strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong></li> 
       
在选择器后可以加上strong元素进行申明，会对该选择器中申明中strong元素包括的部分产生影响。  

- id选择器

      #red {color:red;}
      #green {color:green;}
      <p id="red">这个段落是红色。</p>
      <p id="green">这个段落是绿色。</p>
    
- id选择器常常建立于派生选择器

        #sidebar p {
	  text-align: right;
	  margin-top: 0.5em;
	  }
	  
- 类选择器

        .center {text-align: center}
       <h1 class="center">
       This heading will be center-aligned
       </h1>

        <p class="center">
        This paragraph will also be center-aligned.
        </p>

- class也可以做派生选择器
  
       .fancy td {
       color: #f60; 
       background: #666;
	  }  
	  
- 元素可以被类选择
   
       td.fancy {
	   color: #f60;
	   background: #666;
	  }
- 属性选择器
     写在头部<head>
      可以对“是否出现title=进行筛选”，用[title]或者是[title=xxxx]进行申明
	
      [title]
      {
      color:red;
      }
      
      
      <body>
      <h1>可以应用样式：</h1>
      <h2 title="Hello world">Hello world</h2>
      <a title="W3School" href="http://w3school.com.cn">W3School</a>

      <hr />

      <h1>无法应用样式：</h1>
      <h2>Hello world</h2>
      <a href="http://w3school.com.cn">W3School</a>
      </body>
      
  也可以对是否出现“title=xxxx”进行筛选  
  - 设置表单样式（？）
  申明input[type="text']
  input[type="button"]
  
  - 如何创建css  
  
  1.外部样式表  
  
  用link标签链接到样式表，link在<head>中
	
	  <head>
          <link rel="stylesheet" type="text/css" href="mystyle.css" />
          </head>
  外部样式表以css为后缀保存，不要在属性值与单位之间留有空格。
  
  2.内部样式表
  
 使用 <style> 标签在文档头部定义内部样式表
 
    <head>
    <style type="text/css">
    hr {color: sienna;}
    p {margin-left: 20px;}
    body {background-image: url("images/back40.gif");}
    </style> 
    </head>    
     
  3.复合链接  
  颜色属性将被继承于外部样式表，而文字排列（text-alignment）和字体尺寸（font-size）会被内部样式表中的规则取代。
  
  CSS样式
  ---------------
  - 背景  
  background-color,用padiing增加内边距。默认值transparent。   
  background-image:url(xxxx)    
  - 表格  
  th：表头  
  td：标准单元格  
  th 元素内部的文本通常会呈现为居中的粗体文本，而 td 元素内的文本通常是左对齐的普通文本。  
  border:边框
  border-collapse：边框折叠
  
      <head>
      <style type="text/css">
      table
      {
      border-collapse:collapse;
      }

     table, td, th
    {
    border:1px solid black;
    }
    </style>
    </head>
    <body>
    <table>
    <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    </tr>
    <tr>
    <td>Bill</td>
    <td>Gates</td>
    </tr>
    <tr>
    <td>Steven</td>
    <td>Jobs</td>
    </tr>
    </table>
  width:宽  
  height：高  
  width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。  
  
  - 边框  
  元素框的最内部分是实际的内容，直接包围内容的是内边距（padding）。内边距呈现了元素的背景。内边距的边缘是边框（width）。边框以外是外边距（margin），外边距默认是透明的，因此不会遮挡其后的任何元素。  
  
  css属性
  ---------
  - display属性
  
          <html>
          <head>
          <style type="text/css">
          p {display: inline}
          div {display: none}
          </style>
          </head>

         <body>
         <p>本例中的样式表把段落元素设置为内联元素。</p>

         <p>p元素会显示出来！</p>

         <div>div 元素的内容不会显示出来！</div>
         </body>
         </html>
  display:inline  
  display:null  
  dispaly:flex or flex-inline  
  
  - position属性
  
      h2
      {
      position:absolute;
      left:100px;
      top:150px;
      } 
absolute  
生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。  
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。  
fixed  
生成绝对定位的元素，相对于浏览器窗口进行定位。  
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。  
relative  
生成相对定位的元素，相对于其正常位置进行定位。  
因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。  
static  
默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。  
inherit  
规定应该从父元素继承 position 属性的值。  
 
 - float属性
left  
元素向左浮动。  
right  
元素向右浮动。  
none  
默认值。元素不浮动，并会显示在其在文本中出现的位置。  
inherit
规定应该从父元素继承 float 属性的值。  
 （二） flex布局
  ==================
 - 基本概念
布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。  
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。  
任何一个容器都可以指定为 Flex 布局。  
行内元素也可以使用 Flex 布局。  
注意，设为 Flex 布局以后，<strong>子元素的float、clear和vertical-align属性将失效。</strong>

- 主轴和交叉轴
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

-属性
  - flex-direction  
  - flex-wrap  
  - flex-flow  
  -justify-content  
  -align-items  
  -align-content  
