const fs = require("fs");

//读文件时要加第二个参数：编码(可选参数)
//否则会输出原始的buffer
fs.readFile("./node/fs_write.txt", "utf8", function(err, data)
{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data);
})