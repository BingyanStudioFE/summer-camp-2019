# requestAnimationFrame

### requestAnimationFrame

随着前端的发展，css已经能够实现非常多的动画特效，但是仍然存在css无法完成的动画任务（比如页面滚动），通常的解决方案都是使用js中的setInterval来设置定时器来实现动画特效，比如下面的一个基本的动画循环。

```js
(function() {
  function updateAnimations() {
    doAnimation1();
    doAnimation2();
  }
  setInterval(updateAnimations, 100);
})();
```

该代码实现的功能是每隔100毫秒执行函数操作来达到动画效果，然而，使用计时器真的可靠吗？ 答案当然是 **no**

由于JavaScript是单线程的，所以定时器的实现是在当前任务队列完成后再执行定时器的回调的，假如当前队列任务执行时间大于定时器设置的延迟时间，那么定时器就不是那么可靠了，如下所示：

```js
let startTime = new Date().getTime();
setTimeout(()=>{
  let endTime = new Date().getTime();
  console.log(endTime - startTime);
},50)

for(let i=0;i<20000;i++) {
  console.log(1);
}
```

输出如下



![示例](https://user-gold-cdn.xitu.io/2018/2/13/1618f7c0f49e7fd2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



可以看到，设置了50毫秒后执行，实际执行延迟时间远大于这个数值，这就会导致动画效果并不会达到想要的效果。

动画是由浏览器按照一定的频率一帧一帧的绘制的，由css实现的动画的优势就是浏览器知道动画的开始及每一帧的循环间隔，能够在恰当的时间刷新UI，给用户一种流畅的体验，而setInterval或setTimeout实现的JavaScript动画就没有这么可靠了，因为浏览器压根就无法保证每一帧渲染的时间间隔，一般情况下，每秒平均刷新次数能够达到60帧，就能够给人流畅的体验，即每过 1000/60 毫秒渲染新一帧即可，但从上面的例子知，这一点单靠定时器是无法保证的。 为此，requestAnimationFrame应运而生，其作用就是让浏览器流畅的执行动画效果。可以将其理解为专门用来实现动画效果的api，通过这个api,可以告诉浏览器某个JavaScript代码要执行动画，浏览器收到通知后，则会运行这些代码的时候进行优化，实现流畅的效果，而不再需要开发人员烦心刷新频率的问题了。

使用方法如下：

```js
function animationWidth() {
  var div = document.getElementById('box');
  div.style.width = parseInt(div.style.width) + 1 + 'px';

  if(parseInt(div.style.width) < 200) {
    requestAnimationFrame(animationWidth)
  }
}
requestAnimationFrame(animationWidth);
复制代码
```

效果如下(GIF录制的有点卡。。。实际效果请参考[示例](https://link.juejin.im/?target=https%3A%2F%2Fzhaolyang.github.io%2FblogBlogBlog%2Fjavascript%2FrequestAnimationFrame%2Fdemo.html))：

![示例](https://user-gold-cdn.xitu.io/2018/2/13/1618f7bc6acd9f5c?imageslim)



可以看到，requestAnimationFrame接受一个动画执行函数作为参数，这个函数的作用是仅执行一帧动画的渲染，并根据条件判断是否结束，如果动画没有结束，则继续调用requestAnimationFrame并将自身作为参数传入。从示例来看，得到了效果平滑流畅的动画，这样就巧妙地避开了每一帧动画渲染的时间间隔问题。

在高级浏览器中，开发人员不用去操心每一帧动画渲染的时间间隔问题，而针对低版本浏览器，则需要使用setTimeout来模拟requestAnimationFrame,且针对不同浏览器对requestAnimationFrame的实现，这个api的名字也略有差异，针对低版本浏览器的模拟requestAnimationFrame的写法如下(来自张鑫旭大神的博客)：

```js
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
```

具体含义不做解释，如果遇到低版本浏览器的动画需求，你只需要把这段代码丢进去定义一个低配版requestAnimationFrame方法即可（珍爱生命，远离老浏览器啊）。