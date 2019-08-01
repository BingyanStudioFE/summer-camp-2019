Ajax是"Asynchronous JavaScript and XML"(**异步JavaScript与XML技术**)的缩写，它不是JavaScript的规范，是一种浏览器端开发技术。

传统的web网页用form表单进行交互，用户点击"Submit"按钮提交表单，浏览器刷新整个页面，然后再新页面告诉你操作成功了还是失败了。如果由于网络太慢或其他原因，就会得到一个404界面。总结且来就是：**一次HTTP请求对应一个界面**。

而Ajax的改进在于，让用户留在当前页面中，同时发出新的HTTP请求。为了实现这个，就必须用JavaScript发送这个请求，接收到数据后再用JavaScript更新页面。这样一来，就实现了**页面的局部数据刷新**。

Ajax技术在**jQuery库**中有相应的对象来处理，但Ajax也可以通过**原生JavaScript**手动实现。

### 一、如何用原生JavaScript实现Ajax

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

### 二、安全限制（跨域问题）

上面代码的URL是**相对路径**。如果你把它改为另一个域名下的路径（比如`'http://www.sina.com.cn/'`），再运行肯定会报错，在chrome控制台里还能看到错误信息。

这是浏览器的同源策略导致的。默认情况下JavaScript在发送Ajax请求时，URL的域名必须与当前页面域名完全一致。

完全一致的意思是，**域名**要相同（`www.example.com`和`example.com`不同），**协议**要相同（`http`和`https`不同），**端口号**要相同（默认是`:80`端口，它和`:8080`就不同）。

用JavaScript请求外域（也就是其他网站）的URL有以下几种方法：

1. 通过flash插件发送HTTP请求，这可以绕过浏览器的安全限制。但必须安装flash而且跟flash交互，flash用起来又比较麻烦，现在用的越来越少。

2. 在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器：

   ```js
   '/proxy?url=http://www.sina.com.cn'
   ```

   代理服务器再把结果返回，这样就遵守了浏览器的同源策略。这种方法麻烦之处在于需要服务器端做额外开发。

3. **JSONP**，这个方法有个限制，只能用GET请求，而且要求返回JavaScript。这种方法实际上已利用了浏览器允许跨域引用JavaScript资源：

   ```
   <html>
   <head>
       <script src="http://example.com/abc.js"></script>
       ...
   </head>
   <body>
   ...
   </body>
   </html>
   ```

   JSONP通常以函数调用的形式返回，例如返回：

   ```
   foo('data');
   ```

   这样我们如果在页面中准备好foo（）函数，然后给页面动态添加一个<script>节点，相当于动态读取外域的JavaScript资源，最后就等着接收回调了。

   > 后面见廖雪峰的Ajax教程，写的很清晰，但太多了懒得抄。重点的方法是CORS。
   >
   > 廖雪峰Ajax教程：https://www.liaoxuefeng.com/wiki/1022910821149312/1023022332902400

### 三、原生js获取表单数据

要通过dom操作找到form表单的节点，然后 继续以dom操作的方式读取form表单子节点的value属性；或者直接通过getElementById()方法获取form表单子项。

**注意**：

1. 用getElementById()这个方法查找的时候，传入的参数会与name和id两个属性匹配，先匹配到的就返回了。

2. 要注意的是，由于form元素和input元素有name属性，所以可以通过getElementsByName()方法获取。要注意name属性不唯一所以这个方法返回的是一个集合。

### 四、原生Ajax通过xhr请求发送数据

用Ajax传送数据有GET和POST两种方式：

1. GET方式

   可以用于传输简单数据，大小一般限制在1KB下，数据追加到url中发送（http的header中），也就是说浏览器将各个表单字段元素及其数据按照URL参数的格式附加在请求行中的资源路径后面，中间以问号隔开。

   此外get请求传送的参数因为写在url中，所以会被浏览器缓存下来，别人从历史记录中可以读取到，所以不安全。

2. POST方式

   这种方式下浏览器把各表单字段元素及其数据作为HTTP消息的实体内容发送给Web服务器，因此传输的数据量更大（可达2M），也更安全。

总之，get方式数据量小，效率高，不安全，post反之；get请求参数在Http头部传输，post请求参数在http请求的内容中。

##### 示例：

```javascript
<script type="text/javascript">
    function check(){
        var xmlhttp = new XMLHttpRequest();
    	var userName =document.getElementById("UserName").value;//通过dom操作获取要传的数据
        userName=encodeURI(encodeURI(userName));
        var url="http://192.168.24.140/Classic";//设置url
    	//get方式交互
        xmlhttp.open("GET", url+""+userName, true);
        xmlhttp.onreadystatechange = function(){
            //debugger;
            console.log(xmlhttp.readyState);
            console.log(xmlhttp.status);
                if(xmlhttp.readyState === 4){
                        if(xmlhttp.status === 200){	
                                location.href=value;
                        }else if(xmlhttp.status === 404){
                            alert("文件过时已被删除");
                        }else if(xmlhttp.status === 0){	
                            alert("文件过时已被删除或者网络不通");
                        }
                }
        };
        xmlhttp.send(null);	
    }
</script>
```

##### 注意：

- GET方法使用细节：

  1. 对于涉及到url传递参数的get请求，，被传递的参数都要经过encodeURIComponent方法处理，例如：var url = "update.php?username=" +encodeURIComponent(username) + "&content=" +encodeURIComponent(content)+"&id=1" ;``（这一点目前只有这一个帖子提到，有待后续学习）``

  2. 在url里携带参数的格式是：url资源路径与所传递的参数中间以“？”隔开，传递的参数列表相邻两项参数之间以“&”隔开，示例：

     ```javascript
     var url="__MODULE__/Ucenter/ajax_update"//设置要提交action到后台的那个处理请求的文件名
     url=url+"?userName="+userName+"&passWord="+passWord//为这个路径加上参数用户名和密码
     url=url+"&sid="+Math.random()//为这个路径加上一个随机数
     xmlHttp.open("GET",url,true)//定义请求的参数
     ```

- POST方法使用细节：

  1. 为了确保服务器知道实体中有参数变量，通常要给xhr对象的header设置：

     ```javascript
     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     ```

  2. 参数是名/值一一对应的键值对，每对之间用&隔开，例如：

     ```javascript
     var postData='name=abc&sex=man&age=18';
     xhr.send(postData);
     ```

     另一种传值的方式是参数直接写成JSON的数据格式，示例见下面第二个链接

放一个原生Ajax post和get传值的示例：

> https://blog.csdn.net/lamp113/article/details/50768502

> https://blog.csdn.net/cnzyyh/article/details/79676718