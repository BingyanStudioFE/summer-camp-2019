## CSS

> CSS指**层叠样式表**（Cascading Style Sheets）

- 样式定义如何显示HTML元素
- 为了解决内容与表现分离的问题，HTML4.0中添加了样式

#### 语法

selector {declaration1;declaration2;...declarationN}选择器加上一条或多条声明

- 选择器通常是需要改变央视的HTML元素

- 每条声明由一个属性和一个值组成

selector {property:value}

##### 一些规则

1. 颜色属性的值有三种表示方法：
   - 十六进制颜色值，如p  {  color: #ff0000  }
   - CSS缩写形式，如p { color: #f00 }
   - RGB值: p { color : rgb(255,0,0); }或者p { color: rgb(100%,0%,0%); }

2. 如果属性的值为若干单词，则要给值加引号

3. 空格、换行、分号的代码常用格式:

   ```css
   body {
     color: #000;
     background: #fff;
     margin: 0;
     padding: 0;
     font-family: Georgia, Palatino, serif;
     }
   ```

## 盒模型

盒模型就是认为每个html标签都是一个小方块，然后这个小方块又包着几个小方块，如同盒子一层层地包裹着。

![img](https://user-gold-cdn.xitu.io/2017/10/25/9cb491d4bd5d326aeb16632280411283?imageslim)

1. 分类

   盒模型有两种，W3C标准盒模型和IE盒模型。W3C标准盒模型地width和height只包含内容content，不包含border和padding，表示content的大小；IE盒模型的属性width，height包含border和padding，表示盒子的大小。

2. 组成部分含义

   css的盒模型由content（内容）、padding（内边距）、border（边框）、margin（外边距）组成。但盒子大小由content+padding+border几部分决定，margin算是盒子占据的位置，但不属于盒子的大小。

## Flex布局

Flex（Flexible Box），意为“弹性布局”，用来为盒模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。





盒模型，flex，圣杯布局，骰子

### 阴影效果

box-shadow属性可以给div加外阴影，格式是`box-shadow:``5px` `5px` `10px` `gray``;`

前两个值分别表示阴影水平方向和垂直方向的偏移量；第三个值表示模糊距离；最后一个值是阴影颜色。

- 在块级元素中设置**字体居中**：水平居中可以用text-align: center；垂直居中可以用line-height：px（这个是设置行高，把行高设置为和块级元素等高就垂直居中了）。