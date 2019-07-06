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
  
  
 （二） flex布局
  ==================
  
      
