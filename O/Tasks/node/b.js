//导入模块实例：将b.js导入a.js

function add()
{
    console.log("this is add");
}

function del()
{
    console.log("this is del");
}

exports.add = add;
exports.del = del;