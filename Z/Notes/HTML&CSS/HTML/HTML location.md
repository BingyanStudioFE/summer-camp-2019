# Location 对象

## Location 对象

Location 对象包含有关当前 URL 的信息。

Location 对象是 Window 对象的一个部分，可通过 window.location 属性来访问。

## Location 对象属性

| 属性                                                         | 描述                                          |
| :----------------------------------------------------------- | :-------------------------------------------- |
| [hash](http://www.w3school.com.cn/jsref/prop_loc_hash.asp)   | 设置或返回从井号 (#) 开始的 URL（锚）。       |
| [host](http://www.w3school.com.cn/jsref/prop_loc_host.asp)   | 设置或返回主机名和当前 URL 的端口号。         |
| [hostname](http://www.w3school.com.cn/jsref/prop_loc_hostname.asp) | 设置或返回当前 URL 的主机名。                 |
| [href](http://www.w3school.com.cn/jsref/prop_loc_href.asp)   | 设置或返回完整的 URL。                        |
| [pathname](http://www.w3school.com.cn/jsref/prop_loc_pathname.asp) | 设置或返回当前 URL 的路径部分。               |
| [port](http://www.w3school.com.cn/jsref/prop_loc_port.asp)   | 设置或返回当前 URL 的端口号。                 |
| [protocol](http://www.w3school.com.cn/jsref/prop_loc_protocol.asp) | 设置或返回当前 URL 的协议。                   |
| [search](http://www.w3school.com.cn/jsref/prop_loc_search.asp) | 设置或返回从问号 (?) 开始的 URL（查询部分）。 |

## Location 对象方法

| 属性                                                         | 描述                     |
| :----------------------------------------------------------- | :----------------------- |
| [assign()](http://www.w3school.com.cn/jsref/met_loc_assign.asp) | 加载新的文档。           |
| [reload()](http://www.w3school.com.cn/jsref/met_loc_reload.asp) | 重新加载当前文档。       |
| [replace()](http://www.w3school.com.cn/jsref/met_loc_replace.asp) | 用新的文档替换当前文档。 |

## Location 对象描述

Location 对象存储在 Window 对象的 Location 属性中，表示那个窗口中当前显示的文档的 Web 地址。它的 [href 属性](http://www.w3school.com.cn/jsref/prop_loc_href.asp)存放的是文档的完整 URL，其他属性则分别描述了 URL 的各个部分。这些属性与 Anchor 对象（或 Area 对象）的 URL 属性非常相似。当一个 Location 对象被转换成字符串，href 属性的值被返回。这意味着你可以使用表达式 location 来替代 location.href。

不过 Anchor 对象表示的是文档中的超链接，Location 对象表示的却是浏览器当前显示的文档的 URL（或位置）。但是 Location 对象所能做的远远不止这些，它还能控制浏览器显示的文档的位置。如果把一个含有 URL 的字符串赋予 Location 对象或它的 href 属性，浏览器就会把新的 URL 所指的文档装载进来，并显示出来。

除了设置 location 或 location.href 用完整的 URL 替换当前的 URL 之外，还可以修改部分 URL，只需要给 Location 对象的其他属性赋值即可。这样做就会创建新的 URL，其中的一部分与原来的 URL 不同，浏览器会将它装载并显示出来。例如，假设设置了Location对象的 [hash 属性](http://www.w3school.com.cn/jsref/prop_loc_hash.asp)，那么浏览器就会转移到当前文档中的一个指定的位置。同样，如果设置了 [search 属性](http://www.w3school.com.cn/jsref/prop_loc_search.asp)，那么浏览器就会重新装载附加了新的查询字符串的 URL。

除了 URL 属性外，Location 对象的 [reload() 方法](http://www.w3school.com.cn/jsref/met_loc_reload.asp)可以重新装载当前文档，[replace()](http://www.w3school.com.cn/jsref/met_loc_replace.asp) 可以装载一个新文档而无须为它创建一个新的历史记录，也就是说，在浏览器的历史列表中，新文档将替换当前文档。

# location.hash

一个显著变化，就是URL加入了"#!"符号。比如，改版前的用户主页网址为

> 　　http://twitter.com/username

改版后，就变成了

> 　　http://twitter.com/#!/username

在我印象中，这是主流网站第一次将"#"大规模用于直接与用户交互的关键URL中。这表明井号（Hash）的作用正在被重新认识。本文根据[HttpWatch](http://blog.httpwatch.com/2011/03/01/6-things-you-should-know-about-fragment-urls/)的文章，整理与井号有关的所有重要知识点。

一、#的涵义

\#代表网页中的一个位置。其右面的字符，就是该位置的标识符。比如，

> 　　http://www.example.com/index.html#print

就代表网页index.html的print位置。浏览器读取这个URL后，会自动将print位置滚动至可视区域。

为网页位置指定标识符，有两个方法。一是使用锚点，比如<a name="print"></a>，二是使用id属性，比如<div id="print" >。

二、HTTP请求不包括#

\#是用来指导浏览器动作的，对服务器端完全无用。所以，HTTP请求中不包括#。

比如，访问下面的网址，

> 　　http://www.example.com/index.html#print

浏览器实际发出的请求是这样的：

> 　　GET /index.html HTTP/1.1
>
> 　　Host: www.example.com

可以看到，只是请求index.html，根本没有"#print"的部分。

三、#后的字符

在第一个#后面出现的任何字符，都会被浏览器解读为位置标识符。这意味着，这些字符都不会被发送到服务器端。

比如，下面URL的原意是指定一个颜色值：

> 　　http://www.example.com/?color=#fff

但是，浏览器实际发出的请求是：

> 　　GET /?color= HTTP/1.1
>
> 　　Host: www.example.com

可以看到，"#fff"被省略了。只有将#转码为%23，浏览器才会将其作为实义字符处理。也就是说，上面的网址应该被写成：

> 　　http://example.com/?color=%23fff

四、改变#不触发网页重载

单单改变#后的部分，浏览器只会滚动到相应位置，不会重新加载网页。

比如，从

> 　　http://www.example.com/index.html#location1

改成

> 　　http://www.example.com/index.html#location2

浏览器不会重新向服务器请求index.html。

五、改变#会改变浏览器的访问历史

每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用"后退"按钮，就可以回到上一个位置。

这对于ajax应用程序特别有用，可以用不同的#值，表示不同的访问状态，然后向用户给出可以访问某个状态的链接。

值得注意的是，上述规则对IE 6和IE 7不成立，它们不会因为#的改变而增加历史记录。

六、window.location.hash读取#值

window.location.hash这个属性可读可写。读取时，可以用来判断网页状态是否改变；写入时，则会在不重载网页的前提下，创造一条访问历史记录。

七、onhashchange事件

这是一个HTML 5新增的事件，当#值发生变化时，就会触发这个事件。IE8+、Firefox 3.6+、Chrome 5+、Safari 4.0+支持该事件。

它的使用方法有三种：

> 　　window.onhashchange = func;
>
> 　　<body onhashchange="func();">
>
> 　　window.addEventListener("hashchange", func, false);

对于不支持onhashchange的浏览器，可以用setInterval监控location.hash的变化。

八、Google抓取#的机制

默认情况下，Google的网络蜘蛛忽视URL的#部分。

但是，Google还[规定](http://www.google.com/support/webmasters/bin/answer.py?hl=en&answer=174992)，如果你希望Ajax生成的内容被浏览引擎读取，那么URL中可以使用"#!"，Google会自动将其后面的内容转成查询字符串_escaped_fragment_的值。

比如，Google发现新版twitter的URL如下：

> 　　http://twitter.com/#!/username

就会自动抓取另一个URL：

> 　　http://twitter.com/?_escaped_fragment_=/username

通过这种机制，Google就可以索引动态的Ajax内容。