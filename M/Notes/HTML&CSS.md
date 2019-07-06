<<<<<<< HEAD
<<<<<<< HEAD
（一）CSS
=============
css基础语法
-------------
>selector {declaration1; declaration2; ... declarationN }  
>selector {property: value}  
=======
# （一）CSS

## css基础语法

> selector {declaration1; declaration2; ... declarationN }  
> selector {property: value}  
>>>>>>> d409266... Update HTML&CSS.md

- color五种方法：

> p { color: #ff0000; }  
> p { color: #f00; }  
> p { color: red; }  
> p { color: rgb(255,0,0); }  
> p { color: rgb(100%,0%,0%); }   

- 多种属性值

  ```
  p
  {  
  text-align: center;  
  color: black;  
  font-family: arial;  
  }  
  ```

## CSS高级语法

- selector分组  

  ```
  h1,h2,h3,h4,h5,h6 {  
  color: green;  
  }  
  ```

- 继承问题

  ```
  body {   
  font-family: Verdana, sans-serif;  
  }  
  ```

  一般来说，子元素继承父元素的属性。有些浏览器会忽略继承问题。  

- 派生选择器  

<<<<<<< HEAD
       <li><strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong></li> 
       
=======
# （一）CSS

## css基础语法

> selector {declaration1; declaration2; ... declarationN }  
> selector {property: value}  

- color五种方法：

> p { color: #ff0000; }  
> p { color: #f00; }  
> p { color: red; }  
> p { color: rgb(255,0,0); }  
> p { color: rgb(100%,0%,0%); }   

- 多种属性值

  ```
  p
  {  
  text-align: center;  
  color: black;  
  font-family: arial;  
  }  
  ```

## CSS高级语法

- selector分组  

  ```
  h1,h2,h3,h4,h5,h6 {  
  color: green;  
  }  
  ```

- 继承问题

  ```
  body {   
  font-family: Verdana, sans-serif;  
  }  
  ```

  一般来说，子元素继承父元素的属性。有些浏览器会忽略继承问题。  

- 派生选择器  

=======
>>>>>>> d409266... Update HTML&CSS.md
  ```
  <li><strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong></li> 
  ```

<<<<<<< HEAD
>>>>>>> f0a3f5c... Update HTML&CSS.md
=======
>>>>>>> d409266... Update HTML&CSS.md
在选择器后可以加上strong元素进行申明，会对该选择器中申明中strong元素包括的部分产生影响。  

- id选择器

<<<<<<< HEAD
<<<<<<< HEAD
      #red {color:red;}
      #green {color:green;}
      <p id="red">这个段落是红色。</p>
      <p id="green">这个段落是绿色。</p>
    
=======
  ```
  #red {color:red;}
  #green {color:green;}
  <p id="red">这个段落是红色。</p>
  <p id="green">这个段落是绿色。</p>
  ```

>>>>>>> d409266... Update HTML&CSS.md
- id选择器常常建立于派生选择器

  ```
  #sidebar p {
  ```

    text-align: right;
    margin-top: 0.5em;
    }

- 类选择器

  ```
  .center {text-align: center}
  ```

     <h1 class="center">
     This heading will be center-aligned
     </h1>

  ```
  <p class="center">
  This paragraph will also be center-aligned.
  </p>
  ```

- class也可以做派生选择器

  ```
  .fancy td {
  color: #f60; 
  background: #666;
  ```

    }  

- 元素可以被类选择

  ```
  td.fancy {
  ```

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

  - 如何创建css  

  1.外部样式表  

  用link标签链接到样式表，link在<head>中

    <head>
          <link rel="stylesheet" type="text/css" href="mystyle.css" />
          </head>

  外部样式表以css为后缀保存，不要在属性值与单位之间留有空格。

  2.内部样式表

 使用 <style> 标签在文档头部定义内部样式表

```
<head>
<style type="text/css">
hr {color: sienna;}
p {margin-left: 20px;}
body {background-image: url("images/back40.gif");}
</style> 
</head>    
```

  3.复合链接  
  颜色属性将被继承于外部样式表，而文字排列（text-alignment）和字体尺寸（font-size）会被内部样式表中的规则取代。

- nth-child() 选择器

  :nth-child(*n*) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。

  *n* 可以是数字、关键词或公式。

  n=odd；n=even

  

##   CSS样式

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

##   css属性

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

  #  （二） flex布局

- ## 基本概念

  布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。  
  Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。  
  任何一个容器都可以指定为 Flex 布局。  
  行内元素也可以使用 Flex 布局。  
  注意，设为 Flex 布局以后，<strong>子元素的float、clear和vertical-align属性将失效。</strong>

- ## 主轴和交叉轴

  容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
  项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

- ## 属性  

  - ### 容器属性

####    1.flex-direction  

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

row（水平方向，默认从左端开始，默认值）

row-reverse（反向）

column（垂直方向，从上自下）

####     2.flex-wrap

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

nowrap 不换，默认值

wrap 第一行在上方

reverse 第一行在下方

####    3.flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

####    4.justisy-content

`justify-content`属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

flex-start 左对齐

flex-end 右对齐

center 居中

space-between 两端对齐，间距相等

space-around 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

####   5.align-items

align-items属性定义项目在交叉轴上如何对齐。

> ```css
> .box {
>   align-items: flex-start | flex-end | center | baseline | stretch;
> }
> ```

flex-start上对齐

flex-end 下对齐

center 中心对齐

baseline 项目的第一行文字基线对齐

stretch auto占满空间

####   6.align-content

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- `flex-start`：与交叉轴的起点对齐。

- `flex-end`：与交叉轴的终点对齐。

- `center`：与交叉轴的中点对齐。

- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。

- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

- `stretch`（默认值）：轴线占满整个交叉轴。

  - ### 项目属性 

    #### 1.order

    ```css
    .item {
      order: <integer>;
    }
    ```

    按数值大小，数值越小，排序越前。

    #### 2.flex-grow

    ```css
    .item {
      flex-grow: <number>; /* default 0 */
    }
    ```

  ​        number默认值为1，若为2的话比其他的项目占的面积大一倍

  ####        3.flex-shrink

  ```css
  .item {
    flex-shrink: <number>; /* default 1 */
  }
  ```

​      如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为       0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。

####              4.flex-basis

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

默认为auto，也可以指定长度length

​            5.flex

​             flex是shrink grow basis的简略形式，默认值为`0 1 auto`。

​            6.align-self     

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

- ## flex实战

- #### 1.骰子的布局

- ```markup
  <div class="box">
    <span class="item"></span>
  </div>
  ```

div是一个容器，span元素代表一个flex项目。

- 单项目

```css
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

justify-content 水平轴

align-item 交叉轴

- 双项目

flex-direction 用于多个项目 默认横向row

```css
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
```

align-item:center 交叉轴中央

```css
.box {
  display: flex;
}

.item:nth-child(2) {
  align-self: center;
}
```

对单个元素进行控制

```css
.box {
  display: flex;
  justify-content: space-between;
}

.item:nth-child(2) {
  align-self: flex-end;
}
```

- 三项目

  ```css
  .box {
    display: flex;
  }
  
  .item:nth-child(2) {
    align-self: center;
  }
  
<<<<<<< HEAD
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
<<<<<<< HEAD
  
      
=======
  ```
  #red {color:red;}
  #green {color:green;}
  <p id="red">这个段落是红色。</p>
  <p id="green">这个段落是绿色。</p>
  ```

- id选择器常常建立于派生选择器

  ```
  #sidebar p {
  ```

    text-align: right;
    margin-top: 0.5em;
    }

- 类选择器

  ```
  .center {text-align: center}
  ```

     <h1 class="center">
     This heading will be center-aligned
     </h1>

  ```
  <p class="center">
  This paragraph will also be center-aligned.
  </p>
  ```

- class也可以做派生选择器

  ```
  .fancy td {
  color: #f60; 
  background: #666;
  ```

    }  

- 元素可以被类选择

  ```
  td.fancy {
  ```

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

  - 如何创建css  

  1.外部样式表  

  用link标签链接到样式表，link在<head>中

    <head>
          <link rel="stylesheet" type="text/css" href="mystyle.css" />
          </head>

  外部样式表以css为后缀保存，不要在属性值与单位之间留有空格。

  2.内部样式表

 使用 <style> 标签在文档头部定义内部样式表

```
<head>
<style type="text/css">
hr {color: sienna;}
p {margin-left: 20px;}
body {background-image: url("images/back40.gif");}
</style> 
</head>    
```

  3.复合链接  
  颜色属性将被继承于外部样式表，而文字排列（text-alignment）和字体尺寸（font-size）会被内部样式表中的规则取代。

- nth-child() 选择器

  :nth-child(*n*) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。

  *n* 可以是数字、关键词或公式。

  n=odd；n=even

  

##   CSS样式

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

##   css属性

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

  #  （二） flex布局

- ## 基本概念

  布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。  
  Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。  
  任何一个容器都可以指定为 Flex 布局。  
  行内元素也可以使用 Flex 布局。  
  注意，设为 Flex 布局以后，<strong>子元素的float、clear和vertical-align属性将失效。</strong>

- ## 主轴和交叉轴

  容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
  项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

- ## 属性  

  - ### 容器属性

####    1.flex-direction  

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

row（水平方向，默认从左端开始，默认值）

row-reverse（反向）

column（垂直方向，从上自下）

####     2.flex-wrap

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

nowrap 不换，默认值

wrap 第一行在上方

reverse 第一行在下方

####    3.flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

####    4.justisy-content

`justify-content`属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

flex-start 左对齐

flex-end 右对齐

center 居中

space-between 两端对齐，间距相等

space-around 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

####   5.align-items

align-items属性定义项目在交叉轴上如何对齐。

> ```css
> .box {
>   align-items: flex-start | flex-end | center | baseline | stretch;
> }
> ```

flex-start上对齐

flex-end 下对齐

center 中心对齐

baseline 项目的第一行文字基线对齐

stretch auto占满空间

####   6.align-content

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- `flex-start`：与交叉轴的起点对齐。

- `flex-end`：与交叉轴的终点对齐。

- `center`：与交叉轴的中点对齐。

- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。

- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

- `stretch`（默认值）：轴线占满整个交叉轴。

  - ### 项目属性 

    #### 1.order

    ```css
    .item {
      order: <integer>;
    }
    ```

    按数值大小，数值越小，排序越前。

    #### 2.flex-grow

    ```css
    .item {
      flex-grow: <number>; /* default 0 */
    }
    ```

  ​        number默认值为1，若为2的话比其他的项目占的面积大一倍

  ####        3.flex-shrink

  ```css
  .item {
    flex-shrink: <number>; /* default 1 */
  }
  ```

​      如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为       0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。

####              4.flex-basis

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

默认为auto，也可以指定长度length

​            5.flex

​             flex是shrink grow basis的简略形式，默认值为`0 1 auto`。

​            6.align-self     

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

- ## flex实战

- #### 1.骰子的布局

- ```markup
  <div class="box">
    <span class="item"></span>
  </div>
  ```

div是一个容器，span元素代表一个flex项目。

- 单项目

```css
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

justify-content 水平轴

align-item 交叉轴

- 双项目

flex-direction 用于多个项目 默认横向row

```css
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
```

align-item:center 交叉轴中央

```css
.box {
  display: flex;
}

.item:nth-child(2) {
  align-self: center;
}
```

对单个元素进行控制

```css
.box {
  display: flex;
  justify-content: space-between;
}

.item:nth-child(2) {
  align-self: flex-end;
}
```

- 三项目

  ```css
  .box {
    display: flex;
  }
  
  .item:nth-child(2) {
    align-self: center;
  }
  
=======
>>>>>>> d409266... Update HTML&CSS.md
  .item:nth-child(3) {
    align-self: flex-end;
  }
  ```

- 四项目

```css
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
}
```

做成两排两列，html代码如下

```markup
<div class="box">
  <div class="column">
    <span class="item"></span>
    <span class="item"></span>
  </div>
  <div class="column">
    <span class="item"></span>
    <span class="item"></span>
  </div>
</div>
```

```css
box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
```

###  2.网格布局

```css
<div class="Grid">
  <div class="Grid-cell">...</div>
  <div class="Grid-cell">...</div>
  <div class="Grid-cell">...</div>
</div>
```

```css
.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
}
```

最简单的网格布局，就是平均分布，需要设置项目的自动缩放。

**百分比布局**

```markup
<div class="Grid">
  <div class="Grid-cell u-1of4">...</div>
  <div class="Grid-cell">...</div>
  <div class="Grid-cell u-1of3">...</div>
</div>
```

```css
.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
}

.Grid-cell.u-full {
  flex: 0 0 100%;
}

.Grid-cell.u-1of2 {
  flex: 0 0 50%;
}

.Grid-cell.u-1of3 {
  flex: 0 0 33.3333%;
}

.Grid-cell.u-1of4 {
  flex: 0 0 25%;
}
```

### 3.圣杯布局

头部（header），躯干（body），尾部（footer）。

其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。

```markup
<body class="HolyGrail">
  <header>...</header>
  <div class="HolyGrail-body">
    <main class="HolyGrail-content">...</main>
    <nav class="HolyGrail-nav">...</nav>
    <aside class="HolyGrail-ads">...</aside>
  </div>
  <footer>...</footer>
</body>
```

> ```css
> .HolyGrail {
>   display: flex;
>   min-height: 100vh;
>   flex-direction: column;
> }
> 
> header,
> footer {
>   flex: 1;
> }
> 
> .HolyGrail-body {
>   display: flex;
>   flex: 1;
> }
> 
> .HolyGrail-content {
>   flex: 1;
> }
> 
> .HolyGrail-nav, .HolyGrail-ads {
>   /* 两个边栏的宽度设为12em */
>   flex: 0 0 12em;
> }
> 
> .HolyGrail-nav {
>   /* 导航放到最左边 */
>   order: -1;
> }
> ```

如果是小屏幕，躯干的三栏自动变为垂直叠加。
<<<<<<< HEAD
>>>>>>> f0a3f5c... Update HTML&CSS.md
=======
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
>>>>>>> 90866b1... Update HTML&CSS.md
=======
>>>>>>> d409266... Update HTML&CSS.md
