const os = require("os");
const path = require("path");
const url = require("url");

//获取系统总内存
var mem_kb = os.totalmem();
console.log(`${mem_kb/1024/1024/1024}G`);

//获取文件后缀
console.log(path.extname("E:/BingYan/summer-camp-2019/O/20190705.md"));

//获取表单get提交参数
//http://itcast.cn?name=Shaun&age=18
console.log(url.parse("http://itcast.cn?name=Shaun&age=18", true));

var obj = url.parse("http://itcast.cn?name=Shaun&age=18", true);
console.log(obj.query.name);
console.log(obj.query.age);