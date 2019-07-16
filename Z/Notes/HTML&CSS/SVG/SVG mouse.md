# SVG鼠标事件响应的四种写法

SVG有四种常用的鼠标响应的脚本写法(SMIL方式、Attributes方式、JavaScript+SMIL方式、EventListener方式)，根据不同的需要让大家有更多的选择。本文介绍了四种实现SVG鼠标事件的例子。

SVG鼠标事件实现方式的例子效果是：单击一个红色的矩形后，它的填充颜色会变成蓝色

### 1 SMIL方式

例程1 鼠标事件之SMIL方式

```html
<svg>
<rect x="15" y="15" width="40" height="40" fill="red">
<set attributeName="fill" to="blue" begin="click"/>
</rect>
</svg>
```

在前面有关“动画”效果的章节中我们使用过类似的方法，也就是在单击后触发一个动画效果，此例中被改变的是“fill”属性，由红变蓝，中间没有渐变的过程，一次到位。

### 2 Attributes方式

例程2 鼠标事件之Attributes方式

```html
<svg xmlns="http://www.w3.org/2000/svg"
xmlns:xlink=http://www.w3.org/1999/xlink
xmlns:a3="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
a3:scriptImplementation="Adobe">
<script type="text/ecmascript" a3:scriptImplementation="Adobe">
<![CDATA[
function changeColor(evt)
{
var rect = evt.target;
rect.setAttributeNS(null, "fill", "blue")
}
]]></script>
<rect x="5" y="5" width="40" height="40"
fill="red"
οnclick= "changeColor(evt)"/> u
</svg>
```

这种事件触发方式想必大家已经很熟悉了，在上一节中，满眼尽是这种事件触发方式，即把事件触发作为元素的属性与其它其他属性写在一起。事件属性在u处，“onclick”事件调用的是“changeColor”函数，参数是“evt”，这样使得函数内部脚本可以从“evt”获得事件相关信息。这种方式比较常用。

### 3 JavaScript+SMIL方式

例程3 鼠标事件之JavaScript+SMIL方式

```html
<svg οnlοad="makeShape(evt)">
<script><![CDATA[
var svgns = "http://www.w3.org/2000/svg";u
function makeShape(evt) {
svgDoc = evt.target.ownerDocument;
var rect = svgDoc.createElementNS(svgns, "rect");v
rect.setAttributeNS(null, "x", "5");
rect.setAttributeNS(null, "y", "5");
rect.setAttributeNS(null, "width", "40");
rect.setAttributeNS(null, "height", "40");
rect.setAttributeNS(null, "fill", "red");
var set = svgDoc.createElementNS(svgns, "set");
set.setAttributeNS(null, "attributeName", "fill");
set.setAttributeNS(null, "to", "blue");
set.setAttributeNS(null, "begin", "click");
rect.appendChild(set);
svgDoc.rootElement.appendChild(rect);
}
]]></script>
</svg>
```

这个例子没有图形元素的事先定义，所有定义都是通过脚本完成的，包括事件的定义也都是动态脚本完成的，最后在内存中的SVG DOM机构与例程1是类似的。例程3中，v处的“createElementNS”方法，有了一个后缀“NS”是需要添加命名空间参数的，这里的命名空间定义在u处。

### 4 EventListener方式

例程4 鼠标事件之EventListener方式

```html

<svg οnlοad="makeShape(evt)">
<script><![CDATA[
var svgns = "http://www.w3.org/2000/svg";
function makeShape(evt) {
if ( window.svgDocument == null )
svgDoc = evt.target.ownerDocument;
var rect = svgDoc.createElementNS(svgns, "rect");
rect.setAttributeNS(null, "x", 15);
rect.setAttributeNS(null, "y", 15);
rect.setAttributeNS(null, "width", 40);
rect.setAttributeNS(null, "height", 40);
rect.setAttributeNS(null, "fill", "red");
rect.addEventListener("click", changeColor, false); u
svgDoc.documentElement.appendChild(rect);
}
function changeColor(evt) {
var target = evt.target;
target.setAttributeNS(null, "fill", "blue");
}
]]></script>
</svg>
```

这种方法也是经常用到的，W3C为是DOM元素绑定事件处理函数唯一真正的标准方式。原理就是使用“addEventListener”方法来注册事件方法，而且一次性可以很方便地注册很多事件，“EventListener”被称为“事件监听器”。 “addEventListener”这个方法的参数依次是：事件的名称（如：click）、处理该事件的函数名和是否启用事件捕获的布尔量（一般是false）。


例程4中，u处调用了“addEventListener”方法来注册“onclick”事件，事件处理函数是“changeColor”。值得注意的是写在参数里的事件名称，要去掉“on””，所以填写的是“click”，而不是“onclick”。

在“addEventListener”的方法中有一个参数表示是否启用事件捕捉，要理解这个变量的作用，我们需要了解一下在DOM2事件模型中，事件传播的三个阶段。

首先，在捕获阶段（capturing phase），事件是从文档对象（Document object）开始，沿着文档树向下一直到目标对象传播.。如果任何目标对象的祖辈（不包括目标对象本身）也有一些指定注册的捕获事件的处理程序，在事件传播的这个阶段（捕获阶段）将运行它们，是否启用事件捕捉的变量的意义也就在于此。

事件传播的下一个阶段发生在目标对象本身：所有注册到目标对象的对应事件处理程序都被运行。

事件传播的第三阶段是冒泡阶段，或者说按文档层次倒序进行，从目标元素到文档对象（Document object）。尽管所有的事件都受事件传播的捕获阶段（capturing phase）的影响，但是并不是所有类型的事件都冒泡，像“mousedown”这样的一般事件对文档中的其它其他元素是有意义的，所以这些事件才沿着文档层次向上冒泡，并且触发目标元素的祖元素的相应事件的处理程序。通常情况下，原始的输入事件冒泡，而高级的语义事件不会。