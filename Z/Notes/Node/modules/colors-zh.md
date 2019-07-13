# Node.js npm colors

# colors

> get colors in your node.js console

在你的 node.js 控制台中获取颜色

## get color and style in your node.js console（在你的 node.js 控制台中获取颜色和风格）

![这里写图片描述](https://img-blog.csdn.net/20170215181129983)

## 安装

> npm install colors

## colors and styles（颜色和风格）

### text colors（文本颜色）

- black（黑色）
- red（红色）
- green（绿色）
- yellow（黄色）
- blue（蓝色）
- magenta（品红/洋红/紫红）
- cyan（青色）
- white（白色）
- gray（灰色）
- grey（灰色）

### background colors（背景颜色）

- bgBlack（黑色）
- bgRed（红色）
- bgGreen（绿色）
- bgYellow（黄色）
- bgBlue（蓝色）
- bgMagenta（品红/洋红/紫红）
- bgCyan（青色）
- bgWhite（白色）

### styles（风格）

- reset（重置）
- bold（加粗）
- dim（暗淡）
- italic（斜体）
- underline（下划线）
- inverse（反色）
- hidden（隐藏）
- strikethrough（删除线）

### extras（额外项）

- rainbow（彩虹 - 红，黄，绿，蓝，紫红,）
- zebra（有斑纹的）
- america（美国国旗颜色 - 红，白，蓝）
- trap（圈套 - 乱码）
- random（随机颜色）

## Usage（使用）

> By popular demand, `colors` now ships with two types of usages!

应大众的要求，`colors`现在提供了两种使用方式！

> The super nifty way

超级漂亮的方式

```
var colors = require('colors');

console.log('hello'.green); // outputs green text 
console.log('i like cake and pies'.underline.red) // outputs red underlined text 
console.log('inverse the color'.inverse); // inverses the color 
console.log('OMG Rainbows!'.rainbow); // rainbow 
console.log('Run the trap'.trap); // Drops the bass（降低音）1234567
```

> or a slightly less nifty way which doesn’t extend `String.prototype`

或者一个没有继承 `String.prototype` 的稍微不那么漂亮的方式

```
var colors = require('colors/safe');

console.log(colors.green('hello')); // outputs green text 
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text 
console.log(colors.inverse('inverse the color')); // inverses the color 
console.log(colors.rainbow('OMG Rainbows!')); // rainbow 
console.log(colors.trap('Run the trap')); // Drops the bass1234567
```

> I prefer the first way. Some people seem to be afraid of extending `String.prototype` and prefer the second way.

我更喜欢第一种方式。相当多的人看起来害怕继承 `String.prototype` 并且更喜欢第二种方式。

> If you are writing good code you will never have an issue with the first approach. If you really don’t want to touch String.prototype, the second usage will not touch String native object.

如果你的编码能力较好，那么对第一种方式将不会有任何问题。如果你实在不想接触 String.prototype，第二种使用方式将不会接触到字符串的对象。

## Disabling Colors（禁用 colors）

> To disable colors you can pass the following arguments in the command line to your application:

你可以在命令行中通过传递如下的参数到你的应用程序来禁用 colors：

```
node myapp.js -no-color1
```

## Console.log [string substitution](http://nodejs.org/docs/latest/api/console.html#console_console_log_data)（控制台打印替换后的字符串）

```
var name = 'Marak';
console.log(colors.green('Hello %s'), name);
// outputs -> 'Hello Marak' 123
```

## Custom themes（自定义主题）

### Using standard API（使用标准的 API）

```
var colors = require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// outputs red text 
console.log("this is an error".error);

// outputs yellow text 
console.log("this is a warning".warn);1234567891011121314151617181920
```

### Using string safe API（使用字符串安全的 API）

```
var colors = require('colors/safe');

// set single property 
var error = colors.red;
error('this is red');

// set theme 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// outputs red text 
console.log(colors.error("this is an error"));

// outputs yellow text 
console.log(colors.warn("this is a warning"));12345678910111213141516171819202122232425
```

> You can also combine them:

你也可以将他们合并：

```
var colors = require('colors');

colors.setTheme({
  custom: ['red', 'underline']
});

console.log('test'.custom);1234567
```

Protip: There is a secret undocumented style in colors. If you find the style you can summon him.

提示：colors 中有一个秘密的无明文规定的风格。如果你发现了这种风格，你就可以召唤它。

**Protip 是新一代的 jQuery 提示插件。**