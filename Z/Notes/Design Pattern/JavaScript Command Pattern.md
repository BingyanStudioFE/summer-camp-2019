# JavaScript 命令模式

## 1 命令模式的定义

命令模式：用于将一个请求封装成为对象，从而使你可用不同的请求对客户进行参数化；对请求排队或者记录请求日志，以及执行可撤销的操作。
也就是说：该模式旨在将函数的调用，请求和操作封装成为一个单一的对象，然后对这个对象进行一系列的处理。 命令模式中的命令：指的是一个指向某些特定事情的指令。

## 2 现实中的命令模式

命令模式应用场景：有时向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的命令背后的操作是什么此时希望一种松耦合的方式来设计软件，使得请求发送者和请求接收者能够消除彼此之间的耦合关系。
。例如在一个快餐店，用户向服务员点餐。服务员将用户的需求记录在清单上。

- 请求者点菜：参数是菜名（我要什么菜），时间（什么时候要）。该需求封装起来后，如果有变化我可以修改参数。
- 命令模式将点餐内容封装成为命令对象，命令对象就是填写的清单。
- 用户不知道接收者(厨师)是谁，也不知道厨师的炒菜方式与步骤。
- 请求者可以要求修改命令执行时间：例如晚1小时再要

## 3 菜单例子

现在我们需要实现一个界面，包含很多个按钮。每个按钮有不同的功能，我们利用命令模式来完成。

- 程序员A专门负责绘制按钮[客户点菜]
  通过setCommand函数，通过command创建命令。command就是服务员

```html
<html>
    <body>
        <button id="MenuBar">MenuBar</button>
        <button id="SubMenu">SubMenu</button>
        <button id="subMenu2">subMenu2</button>
    </body>
    <script>
        var menuBarEl = document.getElementById( 'MenuBar');
        var subMenuEl = dxocument.getElementById( 'SubMenu');
        var subMenuEl2 = dxocument.getElementById( 'subMenu2');

        var setCommand = function(button, command) {
            button.addEventListener('click', function() {
                command.execute();
            });
        }
    </script>
</html>
```

- 程序员B,C 负责编写每个按钮的点击后具体发生的功能函数(厨师炒菜步骤)

```
// 使用面向对象的思想创建功能函数
var MenuBar= function(name) {
    this.name = name;
}
MenuBar.prototype.refresh = function() {
    console.log(this.name + '刷新完成');
}


// 使用闭包的思想创建功能函数
var subMenu = function(name) {
    return {
        add: function() {
            console.log(name + '菜单增加完毕');
        },
        del: function() {
            console.log(name + '菜单删除完毕');
        }
    }
}
复制代码
```

- 程序员D封装命令(服务员)

```
// 创建刷新任务命令
var MenuBarCommand = function(receiver) {
    this.receiver = receiver;
}
MenuBarCommand.prototype.execute = function() {
    this.receiver.refresh();
}
// 创建新增菜单命令
var subMenuAddCommand = function(reciever) {
        return {
            execute: function() {
                reciever.add();
            }
        }
    };

// 创建删除菜单命令
var subMenuDelCommand = function(reciever) {
        return {
            execute: function() {
                reciever.del();
            }
        }
    };
复制代码
```

- 整个流程已经准备完毕，我们开始`点餐`触发操作。

```
// 服务员需要知道厨师是谁
var menuBarCommand = new MenuBarCommand(new MenuBar('addMenu'));
// 点餐员告诉服务员点餐
setCommand(menuBarEl, menuBarCommand);

// 服务员需要知道厨师是谁（添加菜单）
var subMenuCommand_add = subMenuAddCommand(subMenu('add_subMenu'));
// 点餐员告诉服务员点餐
setCommand(subMenuEl, subMenuCommand_add);

var subMenuCommand_del = subMenuDelCommand(subMenu('del_subMenu'));
setCommand(subMenuEl2, subMenuCommand_del);
复制代码
```

- javascript中的命令模式 上面看起来，所谓命令模式就像是给对象的某个方法取了execute的名字。感觉command和receiver这两个无中生有的角色把简单的事情复杂化了。本来可以通过下面的方式就可以完成：

```
var bindClick = function(button, fn) {
    button.addEventListener('click', fn);
}

var subMenu =  {
    add: function(name) {
        console.log(name + '菜单增加完毕');
    },
    del: function(name) {
        console.log(name + '菜单删除完毕');
    }

bindClick(subMenuEl, subMenu.add('subMenu'));
复制代码
```

这样的说法时正确的，之前的实例是模拟传统的面向对象语言的命令模式的实现，命令模式将过程式的请求封装到command对象的execute()方法里。通过封装方法的调用，我们可以把运算块包装成形。command对象可以被四处传递。客户端在调用命令的时候，不需要关心事情是如何进行的。

- 命令模式的由来：其实是回调(callback)函数的一个面向对象的替代品。
  javascript将函数作为一等对象的语言，跟策略模式一样，命令模式已经早已融入到了javascript语言中。运算块不一定需要封装到command.execute()中，可也以封装在普通函数中。函数作为一等对象，本省就可以四处传递。即使我们依然需要请求`接收者`，那也未必使用面向对象的方式，闭包也可以完成同样的功能(上面的例子中subMenu使用的是闭包)。

## 4 撤销命令

这里我们还是对点餐的例子来实现。我们向餐厅定了一个盒饭，在6点的送来。

```
// 顾客点餐
var Customer = function(command) {
    return {
        book: function(food, time) {
            return command.execute(food, time);
        },
        undo: function(menu) {
            command.undo(menu);
        }
    };
}

// 服务员，拥有点餐方法和撤销点餐方法
var foodCommand = function(cook){
    return {
        execute: function(food, time) {
            var timer = cook.willCook(food, time);
            return timer;
        }, 
        undo: function(food) {
            cook.unCook(food);
        }
    };
}

// 厨师
var cook = function() {
    return {
        willCook: function(food, time) {
            console.log('时间在' + time + "：开始煮：" + food);
            var timer = setTimeout(function() {
                console.log(food + '完成了');
            }, time);
            return timer;
        },
        unCook: function(timer) {
            clearTimeout(timer);
        }
    };
}

var command = foodCommand(cook());
var customer = Customer(command);
var receipt = customer.book('西红寺炒鸡蛋', 5000); // 5秒后炒完菜

customer.undo(receipt); //  做了取消操作，则不会炒菜
复制代码
```

## 5 命令队列

在订餐的故事中，如果订单的数量过多而厨师的人手不够，则应该让这些订单排队处理，第一个订单完成后，再完成第二个订单。
把`请求`封装成为`命令对象`的有点：对象的生命周期几乎是永久的，除非我们主动回收它。也就是说，`命令对象`的生命周期与初始化请求发生的时间无关，`命令对象`的execute方法可在程序原型的任何时刻执行。即使订单的预定操作早就发生，但是我们的`命令对象`任然有生命。
我们可以把封装的`订单命令`压入一个队列堆栈，当前的`订单命令`执行完毕，就主动通知队列，此时去除正在队列中等待的第一个命令对象并执行它。
我们应该如何在当前的订单完成以后通知队列，通常可以使用队列函数，但是我们还可以选择发布-订阅模式。即在一个订单完成以后发布一个消息，订阅者接收到这个消息，开始执行下一个订单内容。

- 发布者是厨师cook
- 订阅者是顾客
- 中介是command

下面是错误的例子，我还不知道怎么讲发布订阅和命令模式结合在一起，谁看到了请指点一下：

```
var Customer = function(command) {
    return {
        book: function(food) {
            return command.execute(food);
        }
    };
}

var Command = function(cook) {
    return {
        execute: function(food) {
            cook.subscribe('cook', function() {
                console.log(food + 'complete');
            });
        }
    };
}

var Cook = function() {
    var cache = [];
    return {
        subscribe: function(food, fn) {
            if (!(food in cache)) {
                cache[food] = [];
            }
            cache[food].push(fn);
        },
        notify: function(food) {
            var fns = cache[food];
            if (!fns || fns.length === 0) {
                return;
            }
            fns.map(function(fn) {
                fn();
            });
        }
    };
}
var cook = Cook();
var customer = Customer(Command(cook));
customer.book('青菜炒茄子');
customer.book('黄瓜炒花椒');

cook.notify('cook');
复制代码
```

## 6 代理模式与命令模式区别

跟许多其他语言不同， JavaScript 可以用高阶函数非常方便地实现命令模式。命令模式在 JavaScript 语言中是一种隐形的模式。

- 在代理(委托)模式中，调用者就是委托者，执行者就是被委托者，委托者和被委托者接口定义是相同的；在命令模式中，调用者不关注执行者的接口定义是否和它一致。
- 在调用时机上，代理模式的具体执行是只能在特定的调用者内部执行(接口相同)；命令模式的具体执行可以在任何调用者内部执行(接口不相同也可以)。