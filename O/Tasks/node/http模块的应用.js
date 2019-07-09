const http = require("http");

//1. 创建web服务器对象（请求和相应）
var server = http.createServer();

//2. 监听请求 -> 响应内容
server.on("request", function(request, response)
{
    //response是一个对象，它包含一个end方法 用来响应用户数据
    console.log("接收到用户请求");
    response.end("Hello, Shaun");
})

//3. 启动服务
server.listen(8080, function()  //8080是端口
{
    console.log("服务器启动成功，通过http://localhost:8080");
})