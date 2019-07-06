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

盒模型，flex，圣杯布局，骰子