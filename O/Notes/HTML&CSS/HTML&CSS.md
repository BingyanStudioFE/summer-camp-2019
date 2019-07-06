# 20190706

### HTML&CSS复习

#### 盒模型

内容区宽度：			width

内边距：				padding

边框：				border

外边距：				margin

#### 基本布局与定位

> 流

块元素从上往下流，各元素之间有一个换行

内联元素从左上到右下流



> 内联元素与块元素的外边距

浏览器并排放置两个内联元素时，会将它们的外边距**叠加**

浏览器上下防止两个块元素时，会将它们共同的外边距**折叠**

当元素互相嵌套时，**只要两个垂直外边距碰到一起，它们就会折叠**。例如如果外面的元素有一个边框，那么两个元素的外边距就不会碰到一起，也就不会折叠。



> float：浮动元素

1. 浮动一个元素时，如果希望他在某个元素后面，就将要浮动的元素的HTML紧挨在那个元素的下面
2. 块元素会忽略浮动元素；内联元素围绕浮动元素排列
3. 块元素、内联元素都可以浮动
4. 浮动元素的步骤
   * 指定一个标识
   * 指定一个宽度（width）
   * 设置float属性

#### 绝对定位

1. 当指定一个元素绝对定位时，**浏览器将它从流中完全删除**
2. 浏览器根据left、right、top、bottom属性定位该元素
3. 块元素、内联元素都会忽略绝对定位的元素
4. 块元素、内联元素都可以使用绝对定位
5. 绝对定位的位置是相对于**距离它最近的父元素指定的**
6. 相对于浮动定位，绝对定位可以**保证内容的顺序**

#### 相对定位

1. 相对定位与绝对定位很类似，但元素**仍在页面流中**
2. 相对定位是相对其外围包含元素定位

#### 固定定位

1. 固定定位是**相对于浏览器窗口边界** 的，而不是页面边界。



### flex布局：轴线布局

#### flex容器

> 指定flex容器

```css
.container {
    display:		flex/inline-flex;
}
```

> flex容器的属性

1. **flex-direction：row/row-reverse/column/column-reverse;**

   *决定主轴（main axis）的方向*

   row：水平，起点左端

   row-reverse：水平，起点右端

   column：垂直，起点上端

   column-reverse：垂直，起点下端

2. **flex-wrap：nowrap/wrap/wrap-reverse**

   *决定容器内项目是否能换行*

   nowrap：主轴尺寸固定，空间不足，不换行而**调整项目尺寸**

   wrap：主轴超出容器时换行，第一行在上

   wrap-reverse：主轴超出容器时换行，第一行在下

3. **justify-content：flex-start/flex-end/center/space-between/space-around**

   *定义项目在主轴（main axis）的对齐方式* 

   ` 以当flex-direction:row时为例`

   flex-start：左对齐

   flex-end：右对齐

   center：居中

   space-between：两端对齐，项目间距相等

   space-around：每个项目**两侧的距离**相等（项目间距是项目与边缘距离的两倍）

4. **align-items：flex-start/flex-end/center/baseline/stretch**

   *定义项目在交叉轴（cross axis）的对齐方式*

    ` 以当flex-direction:row时为例`

   flex-start：交叉轴起点对齐

   flex-end：交叉轴终点对齐

   center：交叉轴中点对齐

   baseline：项目第一行文字（一般是文字底部）对齐

   stretch：当项目高度未设定（或auto）时，将占满整个容器高度

5. **align-content：flex-start/flex-end/center/space-between/space-around/stretch**

   flex-start：与交叉轴的起点对齐。

   flex-end：与交叉轴的终点对齐。

   center：与交叉轴的中点对齐。

   space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。

   space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

   stretch（默认值）：轴线占满整个交叉轴。

#### flex项目

1. **order：\<integar>**

   定义项目排列顺序；数值越小，排列越靠前

2. **flex-grow：\<number>**

   定义项目放大比例

   默认为0，即即使存在剩余空间也不放大

   属性为1的项目将等分剩余空间

   属性为2的项目占据剩余空间是为1的项目的两倍

3. **flex-shrink：\<number>**

   定义项目缩小比例

   默认为1，即空间不足时都等比例缩小

   属性为0的项目在空间不足时不会缩小

4. **flex-basis**

   定义分配多余空间前，该项目占据的主轴空间

   浏览区根据这个属性，计算主轴是否有多余空间

   默认值为auto，即项目本来的大小（由width、height）决定

5. **flex**

   flex-grow、flex-shrink、flex-basis的简写

6. **align-self：flex-start/flex-end/center/baseline/stretch**

   允许单个项目有与其他项目不一样的对齐方式

   默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

   就相当于align-items属性的单个项目的应用

### grid布局：二维布局

#### 基本概念

容器和项目：container、item

行和列：row、column

单元格：cell

网格线：grid line

#### 容器属性

1. **diplay：grid/inline-grid**

   指定容器采用网格布局，可以是块级元素和内联元素

2. **grid-template-columns：px、百分比**

   **grid-template-rows：px、百分比**

   定义每一列的列宽、行高

   > repeat

   重复某个参数值或某种模式的参数

   ```css
   grid-template-columns:repeat(2, 100px, 20px, 80px);
   grid-template-columns:repeat(4, 25%);
   ```

   > auto-fill

   当单元格大小固定、容器大小不确定时，如果我们希望每一行/列容纳尽可能多的单元格时可以使用autofill

   ```css
   grid-template-columns:repeat(auto-fill,100px);
   ```

   > fr

   fraction缩写，表示片段

   如果两列宽分别为1fr和2fr，则表示后者是前者的两倍

   fr也可以和绝对宽度结合使用

   ```css
   grid-template-columns: 150px 1fr 2fr;
   ```

3. **row-gap**

   **column-gap**

   **gap**

   设置项目的行间距、列间距

4. **grid-template-areas**
