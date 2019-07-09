//在test模块中编写greet函数

var s = "Hello";

function greet(name) 
{
    console.log(`${s}, ${name}!`);
}

// greet("WORLD");

//将函数greet作为模块的输出暴露出去
module.exports = greet;

