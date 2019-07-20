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

router.get('/',async(ctx,next) => {
    var fs = require('fs');
    ctx.response.body=fs.readFileSync('./Register.html').toString();
})

router.post('/user',async(ctx,next) => {
    let postData = await parsePostData( ctx );
    postData.success = true;
    ctx.response.body = postData;
})

// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
    return new Promise((resolve, reject) => {
      try {
        let postdata = "";
        ctx.req.addListener('data', (data) => {
          postdata += data
        })
        ctx.req.addListener("end",function(){
          let parseData = parseQueryStr( postdata )
          resolve( parseData )
        })
      } catch ( err ) {
        reject(err)
      }
    })
  }
  
  // 将POST请求参数字符串解析成JSON
  function parseQueryStr( queryStr ) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log( queryStrList )
    for (  let [ index, queryStr ] of queryStrList.entries()  ) {
      let itemList = queryStr.split('=')
      queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
    }
    return queryData
  }
/*
router.get('/memberData',async(ctx,next) => {
    var fs = require('fs');
    var data = fs.readFileSync('./memberData.json').toString();
    ctx.response.type='xml';
    ctx.response.body = data;
})

router.get('/hello/:name',async(ctx,next) => {
    var name = ctx.params.name;
    ctx.response.body = '<h1>Hello, '+name+'!</h1>';
})
*/
app.use(router.routes());

// 在端口2019监听:
app.listen(2019);
console.log('app started at port 2019...');