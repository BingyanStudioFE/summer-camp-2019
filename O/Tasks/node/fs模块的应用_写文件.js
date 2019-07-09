const fs = require("fs");


//利用fs模块写入文件
//function是回调函数
fs.writeFile("./node/fs_write.txt", "Hello, Shaun", function(err)
{
    //err有数据 则写入失败
    //err没数据 则写入成功
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("Succeeded");
})

