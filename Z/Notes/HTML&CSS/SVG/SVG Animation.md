## SVG SMIL animation动画

### 一、SVG SMIL animation概览

**1. SMIL是什么？**
SMIL不是指「水蜜梨」，而是[Synchronized Multimedia Integration Language](http://www.w3.org/TR/REC-smil)（同步多媒体集成语言）的首字母缩写简称，是有标准的。本文所要介绍的SVG动画就是基于这种语言。

SMIL允许你做下面这些事情：

- 动画元素的数值属性（X, Y, …）
- 动画属性变换（平移或旋转）
- 动画颜色属性
- 沿着运动路径运动

注意到“沿着运动路径运动”这一条没？前面的三条CSS3都是可以有所担当的，最后这一条，呵呵，CSS3只能蹲在墙角画圈圈了！
![墙角画圈圈](https://image.zhangxinxu.com/image/blog/201408/qjhqq.png)

> SVG的动画元素是和SMIL开发组合作开发的。SMIL开发组和SVG开发组合作开发了SMIL动画规范，在规范中制定了一个基本的XML动画特征集合。SVG吸收了SMIL动画规范当中的动画优点，并提供了一些SVG继承实现。

**2. 强大之处是？**
除了可以实现「路径动画」，SVG animation最强大的地方在于：™只要在页面放几个`animate`元素，没有任何CSS, 没有任何JS，页面上的元素就像是没吃草的马儿一样，愉快地跑起来了。你会发现，我勒个去，原来要实现个动画效果这么简单。什么CSS3动画，哪边凉快哪边呆着吧！

唷，不信？给你个马，看它跑不跑！

```
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <g> 
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马</text>
    <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 160 160" to="360 160 160" repeatCount="indefinite"/>
  </g>
</svg>
```

![旋转木马](https://www.zhangxinxu.com/study/201408/horse.svg)

如何？是不是看到了童年梦幻的旋转木马效果？![img](https://mat1.gtimg.com/www/mb/images/face/101.gif) 纳尼？你没看到。请检查您现在使用的浏览器，IE浏览器(包括IE11)是不支持的哦，亲~

![SVG SMIL animation的浏览器支持表](https://image.zhangxinxu.com/image/blog/201408/2014-08-28_163516.png)

如果不是浏览器原因，那就是缓存作祟，可以点击这里浏览器访问：[horse.svg](https://www.zhangxinxu.com/study/201408/horse.svg)。

### 二、SVG animation元素及效果概览

5大元素，1统江湖。

![5大受损 一个对策](https://image.zhangxinxu.com/image/blog/201408/5-1.jpg)

1. <set>
2. <animate>
3. <animateColor>
4. <animateTransform>
5. <animateMotion>

这5个元素犹如篮球场上的5名队员，分别实现不同类别的动画。

**1. set**
`set`意思设置，此元素没有动画效果。你可能会疑问了，既然这个元素没有动画效果，怎么会是animation五大天团成员之一呢？

OK, 这样的，虽然`set`虽然不能触发连续的动画，但是，其还是可以实现基本的延迟功能。就是指：可以在特定时间之后修改某个属性值（也可以是CSS属性值）。

举个例子，下面这个「马」会在`3`秒之后从横坐标`160`的位置移动`60`这个位置。

![3秒后会移动的马](https://www.zhangxinxu.com/study/201408/horse-set.svg)

如果您确信您的浏览器够坚挺，同时没看到马儿突然的位移效果（缓存），您可以狠狠地点击这里：[horse-set.svg](http://www.zhangxinxu.com/study/201408/horse-set.svg)

直接在浏览器中打开SVG一睹真容吧~~

相关代码如下：

```
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <g> 
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">
      马
      <set attributeName="x" attributeType="XML" to="60" begin="3s" />
    </text>
  </g>
</svg>
```

这里出现了`attributeName`, `attributeType`等属性。其含义有些顾名即可思意，有些需要点拨，这些属性后面会统一讲解。

**2. animate**
基础动画元素。实现单属性的动画过渡效果。类似Snap.svg的`animate()`方法支持的动画效果。

下面这个马儿奔跑的效果就是使用的`animate`元素（没有动画效果点这里[horse-animate.svg](https://www.zhangxinxu.com/study/201408/horse-animate.svg)）：
![不停奔跑的马](https://www.zhangxinxu.com/study/201408/horse-animate.svg)

代码如下：

```
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <g> 
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">
    马
      <animate attributeName="x" from="160" to="60" begin="0s" dur="3s" repeatCount="indefinite" />
    </text>
  </g>
</svg>
```

这里除了新增`from`, `dur`这两个通俗易懂的属性外，还蹦出了个repeatCount属性，同上，含义会后面统一讲解。

**3. animateColor**
一看就知道是颜色动画。不过，animate可以实现其功能与效果，因此，此属性已经被废弃。可谓因为兄弟相争而年少陨落的天王。逝者已矣，过去的就让它过去吧~~

**4. animateTransform**
此元素就是一开始给大家开眼界用到的那个元素。一看就知道实现`transform`变换动画效果的。知识是一脉相承的，这里的`transform`变换与CSS3的`transform`变换，以及Snap.svg.js中的`transform()`方法都是一个路数。

为避免效果重复，现在附上一个快速长大的马的效果（没有效果点这里[horse-scale.svg](https://www.zhangxinxu.com/study/201408/horse-scale.svg)）：
![快速长大的马](https://www.zhangxinxu.com/study/201408/horse-scale.svg)

SVG代码为：

```
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <g> 
    <text font-family="microsoft yahei" font-size="80" y="100" x="100">马</text>
    <animateTransform attributeName="transform" begin="0s" dur="3s"  type="scale" from="1" to="1.5" repeatCount="indefinite"/>
  </g>
</svg>
```

**5. animateMotion**
`animateMotion`元素可以让SVG各种图形沿着特定的`path`路径运动~

先来感受一匹走山路的马的英姿（没有效果点这里[horse-motion.svg](https://www.zhangxinxu.com/study/201408/horse-motion.svg)）：
![走山路的马](https://www.zhangxinxu.com/study/201408/horse-motion.svg)

SVG code as follow:

```
<svg width="360" height="200" xmlns="http://www.w3.org/2000/svg">
  <text font-family="microsoft yahei" font-size="40" x="0" y="0" fill="#cd0000">马
    <animateMotion path="M10,80 q100,120 120,20 q140,-50 160,0" begin="0s" dur="3s" repeatCount="indefinite"/>
  </text>
  <path d="M10,80 q100,120 120,20 q140,-50 160,0" stroke="#cd0000" stroke-width="2" fill="none" />
</svg>
```

跟上面的SVG代码相比，少个组标签`g`元素。无妨。只要动画元素是图形元素子元素就可以。后面的`path`元素与动画效果无关，只是为了让大家看清楚路径轨迹线条。关于`path`的一系列参数值，可以参考我之前的文章：“[深度掌握SVG路径path的贝塞尔曲线指令](http://www.zhangxinxu.com/wordpress/2014/06/deep-understand-svg-path-bezier-curves-command/)”。

不过上面这个马走得有点假，怎么马儿一直都是水平的啊，这不符合物理学定律，是不科学的。我们可以小小处理下，让表现更真实：

```
<svg width="360" height="200" xmlns="http://www.w3.org/2000/svg">
  <text font-family="microsoft yahei" font-size="40" x="0" y="0" fill="#cd0000">马
    <animateMotion path="M10,80 q100,120 120,20 q140,-50 160,0" begin="0s" dur="3s" rotate="auto" repeatCount="indefinite"/>
  </text>
  <path d="M10,80 q100,120 120,20 q140,-50 160,0" stroke="#cd0000" stroke-width="2" fill="none" />
</svg>
```

![走山路的马](https://www.zhangxinxu.com/study/201408/horse-motion-rotate.svg)

哈，这样才有爬坡的感觉嘛（没有效果点这里[horse-motion-rotate.svg](https://www.zhangxinxu.com/study/201408/horse-motion-rotate.svg)）！

**6. 自由组合**
实际制作时候的动画，不可能总是一个属性修改。比方说，位置和透明度同时变化，怎么办呢？So easy! 直接组合就好了。![img](https://mat1.gtimg.com/www/mb/images/face/29.gif)

如下代码：

```
<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate attributeName="x" from="160" to="60" begin="0s" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" begin="0s" dur="3s" repeatCount="indefinite" />
    </text>
</svg>
```

实现的是马儿入山影无踪的意境（没有效果点这里[horse-combine.svg](https://www.zhangxinxu.com/study/201408/horse-combine.svg)）：
![马儿入山影无踪](https://www.zhangxinxu.com/study/201408/horse-combine.svg)

OK, 至此，体验SVG animation动画效果的旅程就结束了。如果您单纯就是来感受感受开阔下眼界，下面的文字内容可以快速掠过了。如果您是要深入学习SVG animation动画，下面的参数详解篇实在是不容错过。

### 三、SVG animation参数详解

**1. attributeName = <attributeName>**
要变化的元素属性名称，① 可以是元素直接暴露的属性，例如，对于本文反复出现的「马」对应的`text`元素上的`x`, `y`或者`font-size`; ② 可以是CSS属性。例如，透明度`opacity`.

**2. attributeType = “CSS | XML | auto”**
`attributeType`支持三个固定参数，`CSS`/`XML`/`auto`. 用来表明`attributeName`属性值的列表。`x`, `y`以及`transform`就属于`XML`, `opacity`就属于`CSS`. `auto`为默认值，自动判别的意思（实际上是先当成CSS处理，如果发现不认识，直接XML类别处理）。因此，如果你不确信某属性是XML类别还是CSS类别的时候，我的建议是不设置`attributeType`值，直接让浏览器自己去判断，几乎无差错。

不知大家有没有和我一样的疑问：“既然浏览器酱可以自己判断属性类别，那这个属性还有什么意义吗？”我琢磨着，可能某些属性，XML能其作用，CSS也能其作用，例如`font-size`, 此时就需要明确下归属。

**3. from, to, by, values**
上面4个属性是一个家族的，是最具哲理的一个家族。他们解决的是非常有哲理的问题：你从哪里来？要到哪里去？……

- from = “**<value>**“

  动画的起始值。

- to = “**<value>**“

  指定动画的结束值。

- by = “**<value>**“

  动画的相对变化值。

- values = “**<list>**“

  用分号分隔的一个或多个值，可以看出是动画的多个关键值点。

`from`, `to`, `by`, `values`虽然属于一个家族，但是相互之间还是有制约关系的。有以下一些规则：
**a.** 如果动画的起始值与元素的默认值是一样的，`from`参数可以省略。
**b.** （不考虑`values`）`to`,`by`两个参数至少需要有一个出现。否则动画效果没有。`to`表示绝对值，`by`表示相对值。拿位移距离，如果`from`是`100`, `to`值为`160`则表示移动到`160`这个位置，但是，如果`by`值是`160`，则表示移动到`100+160=260`这个位置。
**c.** 如果`to`,`by`同时出现，则`by`打酱油，只识别`to`.
**d.** 如果`to`,`by`,`values`都没设置，自然没动画效果。如果任意（包括`from`）一个属性的值不合法，规范上说是没有动画效果。但是，据我测试，FireFox浏览器确实如此，但是Chrome特意做了写容错处理。例如，本来是数值的属性，写了个诸如`a`这个不合法的值，其会当作`0`来处理，动画效果依然存在。
**e.** `values`可以是一个值或多值。根据我在Chrome浏览器下的测试，是一个值的时候是没有动画效果。多值时候有动画效果。当`values`值设置并能识别时候，`from`, `to`, `by`的值都会被忽略。那`values`属性是干什么的呢？别看名字挺大众的，其还是有些功力的。我们实现动画，不可能就是单纯的从a位置到b位置，有时候，需要去c位置过渡下。此时，实际上有3个动画关键点。而`from`, `to`/`by`只能驾驭两个，此时就是`values`大显身手的时候了！例如下面这个聪明的马儿来回跑的效果（没有效果点这里[horse-values.svg](https://www.zhangxinxu.com/study/201408/horse-values.svg)）：
![马儿来回跑](https://www.zhangxinxu.com/study/201408/horse-values.svg)

相关SVG代码如下：

```
<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="150" x="160">
        马
        <animate attributeName="x" values="160;40;160" dur="3s" repeatCount="indefinite" />
    </text>
</svg>
```

总结下，也就是`from-to`动画、`from-by`动画、`to`动画、`by`动画以及`values`动画。

**4. begin, end**
`begin`指动画开始的时间，看上去很简单。设个时间，延迟嘛~~实际上非也非也，上面出现的`beigin="3s"`只是最简单最基本的表示。

`begin`的定义是分号分隔的一组值。看到没？是一组值，单值只是其中的情况之一。例如，`beigin="3s;5s"`表示的是`3s`之后动画走一下，`6s`时候动画再走一下（如果之前动画没走完，会立即停止从头开始）。所以，如果一次动画时间为`3s`, 即`dur="3s"`，同时没有`repeatCount`属性时候，我们可以看到动画似乎连续执行了`2`次。

**时间值**
既然这里提到了时间，就顺势讲简单一下SVG animation中的时间表示(也适用于`dur`, `end`属性)。常见单位有 `"h"`|`"min"`|`"s"`|`"ms"`

时间值支持的格式和规则相当复杂，例如我我规范上看到这个：`1997-07-16T19:20:30.45+01:00`. 以及洋洋洒洒N多看不懂的示意。尼玛，这个要通透我周末钓鱼时间都没了，关键是没有必要。所以，我们还是了解下最常见的基本使用。

上面的单位含义都是英文单位的缩写。例如`h`表示小时(hour).

时间值支持小数写法，因此，`90s`我们也可以使用`1.5miu`表示。时间值还支持`hh:mm:ss`这种写法，因此，`90s`我们也可以使用`01:30`表示。

还有一点，十进制的小数值是秒的浮点定义。什么意思呢？就是如果`begin="1.5"`没有单位，这里的小数点表示秒，也就是`1.5s`的意思。所以，上面N次出现的`beigin="3s"`也可以简写作`beigin="3"`. 我测了下，FireFox和Chrome浏览器都是支持的。

```
begin`的单值除了普通value，还有下面这些类别的value：
`offset-value` | `syncbase-value` | `event-value` | `repeat-value` | `accessKey-value` | `media-marker-value` | `wallclock-sync-value` | `"indefinite"
```

① `offset-value`表示偏移值，数值前面有`+`或`-`. 应该指相对于documentdocument的`begin`值而言。
② `syncbase-value`基于同步确定的值。语法为：`[元素的id].begin/end +/- 时间值`. 就是说借用其他元素的begin值再加加减减，这个可以准确实现两个独立元素的动画级联效果。OK，看完下面的例子一定会豁然开朗，对于上面的`offset-value`也会有一定的认知。

这样的代码：

```
<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate id="x" attributeName="x" to="60" begin="0s" dur="3s" fill="freeze" />
        <animate attributeName="y" to="100" begin="x.end" dur="3s" fill="freeze" />
    </text>
</svg>
```

于是，实现了一个马儿折线跑的效果，先横向移动，再无缝纵向移动（没有效果点这里[horse-animate-x-y.svg](https://www.zhangxinxu.com/study/201408/horse-animate-x-y.svg)）。
![马儿折线跑](https://www.zhangxinxu.com/study/201408/horse-animate-x-y.svg)

如果您发现没有效果，可以狠狠地点击这里直接在浏览器中显示SVG：[horse-animate-x-y.svg](http://www.zhangxinxu.com/study/201408/horse-animate-x-y.svg)

可以看到，后面`attributeName`为`y`的元素的`begin`值是`x.end`. `x.end`中的`x`就是上面一个`animate`元素的`id`值，而`end`是动画元素都有的一个属性，动画结束的时间。因此，`begin="x.end"`意思就是，当`id`为`x`的元素动画结束的时候，我执行动画。非常类似于PowerPoint动画的“上一个动画之后”的选项。

当然，我们还可以增加一些偏移值，例如`begin="x.end-1s"`, 就表示`id`为`x`的元素动画结束前一秒开始纵向移动。

③ `event-value`这个表示与事件相关联的值。类似于PowerPoint动画的“点击执行该动画”。语法是：`[元素的id].[事件类型] +/- 时间值`. 举个例子，点击下图的圆圈圈，马儿它就会自己跑！

马

SVG代码如下：

```
<svg id="svg" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle id="circle" cx="100" cy="100" r="50"></circle>
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate attributeName="x" to="60" begin="circle.click" dur="3s" />
    </text>
</svg>
```

代码的关键点就是上面红色高亮的`begin="circle.click"`, 其中`circle`为`circle`元素（黑色圆）的`id`, `click`表示点击事件。含义一目了然，如果你想点击圆圈圈2秒钟后马儿才跑，很简单，偏移时间加上就可以了——`begin="circle.click+2s"`.

主要注意的是，这类与事件关联的SVG需要内联在页面中，否则`click`什么的都是徒劳。

④ `repeat-value`指重复多少次之后干嘛干嘛。语法为：`[元素的id].repeat(整数) +/- 时间值`. 举个例子，下面这个马儿会在水平运动2次之后，斜向运动（没有效果点这里[horse-repeat-value.svg](https://www.zhangxinxu.com/study/201408/horse-repeat-value.svg)）……
![马儿跑了2次后变向](https://www.zhangxinxu.com/study/201408/horse-repeat-value.svg)

SVG代码如下：

```
<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate id="x" attributeName="x" to="60" begin="0s" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y" to="100" begin="x.repeat(2)" dur="3s" fill="freeze" />
    </text>
</svg>
```

`begin="x.repeat(2)"`指`id`为`x`的元素的动画重复`2`次后执行~~

⑤ `accessKey-value`定义快捷键。即按下某个按键动画开始。语法为：`accessKey(" character ")`. `character`表示快捷键所在的字符，举个例子，按下`s`键动画走起。SVG代码如下：

```
<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate attributeName="x" to="60" begin="accessKey(s)" dur="3s" repeatCount="indefinite" />
    </text>
</svg>
```

SVG实时显示如下：
马

按下键盘上的字母`"s"`, 理论上动画就会执行。但是，据我测试，我的Chrome浏览器（版本36）上是没有效果的，FireFox浏览器效果杠杠的！所以，如果您的浏览器没有效果，但是手上有火狐，可以复制下面这个地址去FireFox浏览器下感受下：http://www.zhangxinxu.com/study/201408/horse-accesskey-value.svg

⑥ `wallclock-sync-value`指真实世界的时钟时间定义。时间语法是基于在ISO8601中定义的语法。例如上面提到的`1997-07-16T19:20:30.45+01:00`这个让人呵呵呵的时间表示。

⑦ `"indefinite"`就是这个字符串值，表示“无限等待”。据说需要`beginElement()`方法触发或者指向该动画元素的超链接(SVG中的`a`元素)。
下面代码是`beginElement()`方法触发的例子：

```
<svg id="svg" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate attributeName="x" to="60" begin="indefinite" dur="3s" />
    </text>
</svg>
var animate = document.getElementsByTagName("animate")[0];
if (animate) {
    document.getElementById("svg").onclick = function() {
        animate.beginElement();
    };
}
```

上面是HTML代码，下面是JS代码。意思很简单，点击我们的`svg`, 触发`animate`元素的`beginElement()`方法，前提是`begin="indefinite"`. 由于牵扯JS, 文章页拘谨了，您可以狠狠地点击这里：[beginElement()方法触发SVG动画demo](http://www.zhangxinxu.com/study/201408/svg-animation-beginelement.html)

超链接触发的例子参见下面：
马点击我

SVG代码如下：

```
<svg width="320" height="200" font-family="microsoft yahei" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
     <text font-size="120" y="160" x="160">马
          <animate id="animate" attributeName="x" to="60" begin="indefinite" dur="3s" repeatCount="indefinite" />
     </text>
     <a xlink:href="#animate">
          <text x="10" y="20" fill="#cd0000" font-size="30">点击我</text>
     </a>
</svg>
```

从上面代码可以看出，动画触发条件很简单，只要`a`元素的`xlink:href`指向的我们的动画元素就可以了。

如果上面SVG没效果，可以试试点击这里直接浏览器中访问：[horse-begin-link.svg](http://www.zhangxinxu.com/study/201408/horse-begin-link.svg)

最后，搞一段规范上出现的一段文字：

> If no begin is specified, the default value is “0” – the animation begins when the document begins. If there is any error in the argument value syntax for begin, the default value for begin will be used.

意思是，没有`begin`或者`begin`参数解析异常，都当作`0`处理。

说到现在基本上都是`begin`属性，实际上`end`与`begin`除了名字和字面含义不一样，其值的种类与表意都是一模一样的，我这里就不重复啰嗦了。

**5. dur**
`dur`属性值比`begin`简单了好几层楼，就后面两种：常规时间值 | `"indefinite"`.

“常规时间值”就是`3s`之类的正常值；`"indefinite"`指事件无限。试想下，动画时间无限，实际上就是动画压根不执行的意思。因此，设置为`"indefinite"`跟没有`dur`是一个意思，与`dur`解析异常一个意思。

**6. calcMode, keyTimes, keySplines**
这几个参数是控制动画先快还是先慢类似这样作用的。

`calcMode`属性支持4个值：`discrete` | `linear` | `paced` | `spline`. 中文意思分别是：“离散”|“线性”|“踏步”|“样条”。

- discrete

  `from`值直接跳到`to`值。

- linear

  animateMotion元素以外元素的`calcMode`默认值。动画从头到尾的速率都是一致的。

- paced

  通过插值让动画的变化步调平稳均匀。仅支持线性数值区域内的值，这样点之间“距离”的概念才能被计算（如`position`, `width`, `height`等）。如果”`paced`“指定，任何`keyTimes`或`keySplines`值都会打酱油。

- spline

  插值定义贝塞尔曲线。`spline`点的定义在`keyTimes`属性中，每个时间间隔控制点由`keySplines`定义。

**keyTimes = “<list>”**
跟上面提到的`<list>`类似，都是分号分隔一组值。`keyTimes`总名字上看是关键时间点的意思，大致就是这个意思。前面提到过`values`也是多值，这里有一些约定的规则：首先，`keyTimes`值的数目要和`values`一致，如果是`from/to/by`动画，`keyTimes`就必须有两个值。然后对于`linear`和`spline`动画，第一个数字要是`0`, 最后一个是`1`。 最后，每个连续的时间值必须比它前面的值大或者相等。

`paced`模式下，`keyTimes`会被忽略；`keyTimes`定义错误，也会被忽略；`dur`为`indefinite`也会被忽略。

**keySplines = “<list>”**
`keySplines`表示的是与`keyTimes`相关联的一组贝塞尔控制点（默认`0 0 1 1`）。每个控制点使用4个浮点值表示：`x1 y1 x2 y2`. 只有模式是`spline`时候这个参数才有用，也是分号分隔，值范围`0~1`，总是比`keyTimes`少一个值。

如果`keySplines`值不合法或个数不对，是没有动画效果的。

叨叨这么多，规范的术语还真是拗口，不急，我们先感受例子，然后再给大家通俗解释：
如下4个SVG，只展示重要部分代码：

```
<animate attributeName="x" dur="5s" values="0; 20; 160" calcMode="linear" />
<animate attributeName="x" dur="5s" values="0; 20; 160" calcMode="paced"/>
<animate attributeName="x" dur="5s" values="0; 80; 160" keyTimes="0; .8; 1" calcMode="linear"/>
<animate attributeName="x" dur="5s" values="0; 80; 160" keyTimes="0; .8; 1" calcMode="spline"  keySplines=".5 0 .5 1; 0 0 1 1" />
```

其效果为……您可以狠狠地点击这里：[calcMode, keyTimes, keySplines属性demo](http://www.zhangxinxu.com/study/201408/svg-animation-calcmode.html)

可以看到到4匹马上半途中你追我赶的经常场面：
![四架马车截图](https://image.zhangxinxu.com/image/blog/201408/2014-08-31_015731.png)

|      | ![Example keySplines01 - keySplines of 0 0 1 1 (the default)](http://www.w3.org/TR/2001/REC-smil-animation-20010904/interpSpline01.png)*keySplines=”0 0 1 1″(the default)* |      | ![Example keySplines02 - keySplines of .5 0 .5 1](http://www.w3.org/TR/2001/REC-smil-animation-20010904/interpSpline02.png)*keySplines=”.5 0 .5 1″* |
| ---- | ------------------------------------------------------------ | ---- | ------------------------------------------------------------ |
|      | ![Example keySplines03 - keySplines of 0 .75 .25 1](http://www.w3.org/TR/2001/REC-smil-animation-20010904/interpSpline03.png)*keySplines=”0 .75 .25 1″* |      | ![Example keySplines04 - keySplines of 1 0 .25 .25](http://www.w3.org/TR/2001/REC-smil-animation-20010904/interpSpline04.png)*keySplines=”1 0 .25 .25″* |

拿最后一个SVG说事吧，实际上就是`values`, `keyTimes`, `keySplines`三个人之间事情。`values`确定动画的关键位置，`keyTimes`确定到这个关键点需要的时间，`keySplines`确定的是每个时间点段之间的贝塞尔曲线，也就是具体的缓动表现。我们平时CSS3写的`transition`动画效果，也是这么回事，这是`values`值就两个，所以，`keyTimes`只能是`0;1`, 贝塞尔曲线就只有一个，要不`ease`, 要不`linear`等。

**7. repeatCount, repeatDur**
`repeatCount`表示动画执行次数，可以是合法数值或者”`indefinite`“（动画循环到电脑死机）。

`repeatDur`定义重复动画的总时间。可以是普通时间值或者”`indefinite`（”动画循环到电脑死机）。

例如这个：

```
<animate attributeName="x" to="60" dur="3s" repeatCount="indefinite" repeatDur="10s" />
```

动画只玩执行完整`3`个 `+` 一个`1/3`个动画。因为repeat总时间就`10s`而已。

**8. fill**
`fill`表示动画间隙的填充方式。支持参数有：`freeze` | `remove`. 其中`remove`是默认值，表示动画结束直接回到开始的地方。`freeze`“冻结”表示动画结束后像是被冻住了，元素保持了动画结束之后的状态。

**9. accumulate, additive**
`accumulate`是累积的意思。支持参数有：`none` | `sum`. 默认值是`none`. 如果值是`sum`表示动画结束时候的位置作为下次动画的起始位置。

`additive`控制动画是否附加。支持参数有：`replace` | `sum`. 默认值是`replace`. 如果值是`sum`表示动画的基础知识会附加到其他低优先级的动画上，

举两个例子，下面是例子1：

```
<img ...>
   <animateMotion begin="0" dur="5s" path="[some path]" additive="sum" fill="freeze" />
   <animateMotion begin="5s" dur="5s" path="[some path]" additive="sum" fill="freeze" />
   <animateMotion begin="10s" dur="5s" path="[some path]" additive="sum" fill="freeze" />
</img>
```

这里轮到第二个动画的时候，路径是从第一个动画路径结束地方开始的，于是，3个动画完美无缝连接起来了。

例子2：

```
<animateTransform attributeName="transform" type="scale" from="1" to="3" dur="10s" repeatCount="indefinite" additive="sum"/>
<animateTransform attributeName="transform" type="rotate" from="0 30 20" to="360 30 20" dur="10s" fill="freeze" repeatCount="indefinite" additive="sum"/>;
```

这里，两个动画同时都是`transform`，都要使用一个`type`属性，好在这个例子`additive="sum"`是累加的而不是`replace`替换。于是，我们就可以是实现一边旋转一边放大的效果（没有效果点这里[horse-animate-sum.svg](https://www.zhangxinxu.com/study/201408/horse-animate-sum.svg)）。

![旋转放大木马](https://www.zhangxinxu.com/study/201408/horse-animate-sum.svg)

**10. restart**
`restart`这个属性诞生的背景如下：很多动画呢，其触发可能与事件相关，例如，点击某圆圈，马儿就跑。而且，似乎没点一次，马儿就跑一下。现在，存在这种情况，希望马儿只跑一次，之后在点击就没有反应。这种需求的出现迫使`restart`参数的出现。支持的参数有：`always` | `whenNotActive` | `never`.

`always`是默认值，表示总是，也就是点一次圈圈，马儿跑一下。`whenNotActive`表示动画正在进行的时候，是不能重启动画的。`never`表示动画是一波流。

很好理解的参数，就不举例了。

`11. min, max`
`min/max`表示动画执行最短和最长时间。支持参数为时间值和`"media"`（媒介元素有效）, `max`还支持`indefinite`.

`12. ...`
等其他遗漏参数。

### 四、动画的暂停与播放(补充于2015-10-08)

今天有同事询问如何暂停动画。是酱样子的，SVG animation中是有内置的API可以暂停和启动动画的。语法为：

```
// svg指当前svg DOM元素
// 暂停
svg.pauseAnimations();

// 重启动
svg.unpauseAnimations()
```