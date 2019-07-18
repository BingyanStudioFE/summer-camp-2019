Ajax是"Asynchronous JavaScript and XML"(**异步JavaScript与XML技术**)的缩写，它不是JavaScript的规范，是一种浏览器端开发技术。

传统的web网页用form表单进行交互，用户点击"Submit"按钮提交表单，浏览器刷新整个页面，然后再新页面告诉你操作成功了还是失败了。如果由于网络太慢或其他原因，就会得到一个404界面。总结且来就是：**一次HTTP请求对应一个界面**。

而Ajax的改进在于，让用户留在当前页面中，同时发出新的HTTP请求。为了实现这个，就必须用JavaScript发送这个请求，接收到数据后再用JavaScript更新页面。这样一来，就实现了**页面的局部数据刷新**。

Ajax技术在**jQuery库**中有相应的对象来处理，但Ajax也可以通过**原生JavaScript**手动实现。

### 如何用原生JavaScript实现Ajax

在现代浏览器上写Ajax重要依靠XMLHttpRequest对象：

```javascript
'use strict';
function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}
function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();

alert('请求已发送，请等待响应...');
```

当创建了XMLHttpRequest对象后，要先设置onreadystatechange的回调函数。在回调函数中，通过判断readyState === 4判断请求是否完成；若已完成，再根据status === 200判断是否是一个成功的响应。

XMLHttpRequest对象的open（）方法有3个参数，第一个参数制定是GET还是POST，第二个参数指定URL地址，第三个参数Async指定是否使用同步，默认是true，不用写。

> 注意，千万不要把第三个参数指定为false，否则浏览器会停止响应，知道Ajax请求完成。在请求过程中浏览器会处于“假死”状态。

最后调用send（）方法才真正发送请求。GET请求不需要参数，POST请求需要把body部分以字符串或者FormData对象传进去。

### 安全限制（跨域问题）

上面代码的URL是**相对路径**。如果你把它改为另一个域名下的路径（比如`'http://www.sina.com.cn/'`），再运行肯定会报错，在chrome控制台里还能看到错误信息。

这是浏览器的同源策略导致的。默认情况下JavaScript在发送Ajax请求时，URL的域名必须与当前页面域名完全一致。

完全一致的意思是，**域名**要相同（`www.example.com`和`example.com`不同），**协议**要相同（`http`和`https`不同），**端口号**要相同（默认是`:80`端口，它和`:8080`就不同）。

用JavaScript请求外域（也就是其他网站）的URL有以下几种方法：

1. 通过flash插件发送HTTP请求，这可以绕过浏览器的安全限制。但必须安装flash而且跟flash交互，flash用起来又比较麻烦，现在用的越来越少。

2. 在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器：

   ```js
   '/proxy?url=http://www.sina.com.cn'
   ```

   代理服务器再把结果返回，这样就遵守了浏览器的同源策略。