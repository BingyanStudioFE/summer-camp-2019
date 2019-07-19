// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

const router = require('koa-router')();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    console.log('Process ${ctx.request.method} ${ctx.request.url}');
    await next();
});
app.use('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
  //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    if (req.method == 'OPTIONS') {
      res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }
    else {
      next();
    }
  });