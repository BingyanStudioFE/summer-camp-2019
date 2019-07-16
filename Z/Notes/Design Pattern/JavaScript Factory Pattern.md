# JavaScript 工厂模式

## 1 什么是工厂模式?

工厂模式是用来创建对象的一种最常用的设计模式。我们不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂。工厂模式根据抽象程度的不同可以分为：`简单工厂`，`工厂方法`和`抽象工厂`。

### 1.1 简单工厂模式

`简单工厂模式`又叫`静态工厂模式`，由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象。

在实际的项目中，我们常常需要根据用户的权限来渲染不同的页面，高级权限的用户所拥有的页面有些是无法被低级权限的用户所查看。所以我们可以在不同权限等级用户的构造函数中，保存该用户能够看到的页面。在根据权限实例化用户。使用ES6重写简单工厂模式时，我们不再使用构造函数创建对象，而是使用class的新语法，并使用static关键字将简单工厂封装到`User`类的静态方法中.代码如下：

```js
//User类
class User {
  //构造器
  constructor(opt) {
    this.name = opt.name;
    this.viewPage = opt.viewPage;
  }

  //静态方法
  static getInstance(role) {
    switch (role) {
      case 'superAdmin':
        return new User({ name: '超级管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据', '权限管理'] });
        break;
      case 'admin':
        return new User({ name: '管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据'] });
        break;
      case 'user':
        return new User({ name: '普通用户', viewPage: ['首页', '通讯录', '发现页'] });
        break;
      default:
        throw new Error('参数错误, 可选参数:superAdmin、admin、user')
    }
  }
}

//调用
let superAdmin = User.getInstance('superAdmin');
let admin = User.getInstance('admin');
let normalUser = User.getInstance('user');
复制代码
```

`User`就是一个简单工厂，在该函数中有3个实例中分别对应不同的权限的用户。当我们调用工厂函数时，只需要传递`superAdmin`, `admin`, `user`这三个可选参数中的一个获取对应的实例对象。

简单工厂的优点在于，你只需要一个正确的参数，就可以获取到你所需要的对象，而无需知道其创建的具体细节。但是在函数内包含了所有对象的创建逻辑（构造函数）和判断逻辑的代码，每增加新的构造函数还需要修改判断逻辑代码。当我们的对象不是上面的3个而是30个或更多时，这个函数会成为一个庞大的超级函数，便得难以维护。**所以，简单工厂只能作用于创建的对象数量较少，对象的创建逻辑不复杂时使用**。

### 1.2 工厂方法模式

工厂方法模式的本意是将**实际创建对象的工作推迟到子类**中，这样核心类就变成了抽象类。但是在JavaScript中很难像传统面向对象那样去实现创建抽象类。所以在JavaScript中我们只需要参考它的核心思想即可。我们可以将工厂方法看作是一个实例化对象的工厂类。虽然ES6也没有实现`abstract`，但是我们可以使用`new.target`来模拟出抽象类。`new.target`指向直接被`new`执行的构造函数，我们对`new.target`进行判断，如果指向了该类则抛出错误来使得该类成为抽象类。

在简单工厂模式中，我们每添加一个构造函数需要修改两处代码。现在我们使用工厂方法模式改造上面的代码，刚才提到，工厂方法我们只把它看作是一个实例化对象的工厂，它只做实例化对象这一件事情！

```js
class User {
  constructor(name = '', viewPage = []) {
    if(new.target === User) {
      throw new Error('抽象类不能实例化!');
    }
    this.name = name;
    this.viewPage = viewPage;
  }
}

class UserFactory extends User {
  constructor(name, viewPage) {
    super(name, viewPage)
  }
  create(role) {
    switch (role) {
      case 'superAdmin': 
        return new UserFactory( '超级管理员', ['首页', '通讯录', '发现页', '应用数据', '权限管理'] );
        break;
      case 'admin':
        return new UserFactory( '普通用户', ['首页', '通讯录', '发现页'] );
        break;
      case 'user':
        return new UserFactory( '普通用户', ['首页', '通讯录', '发现页'] );
        break;
      default:
        throw new Error('参数错误, 可选参数:superAdmin、admin、user')
    }
  }
}

let userFactory = new UserFactory();
let superAdmin = userFactory.create('superAdmin');
let admin = userFactory.create('admin');
let user = userFactory.create('user');
复制代码
```

### 1.3 抽象工厂模式

上面介绍了简单工厂模式和工厂方法模式都是直接生成实例，但是抽象工厂模式不同，抽象工厂模式并不直接生成实例， 而是用于`对产品类簇`的创建。

上面例子中的`superAdmin`，`admin`，`user`三种用户角色，其中user可能是使用不同的社交媒体账户进行注册的，例如：`wechat，qq，weibo`。那么这三类社交媒体账户就是对应的类簇。在抽象工厂中，类簇一般用父类定义，并在父类中定义一些抽象方法，再通过抽象工厂让子类继承父类。所以，**抽象工厂其实是实现子类继承父类的方法**。

上面提到的抽象方法是指声明但不能使用的方法。在其他传统面向对象的语言中常用`abstract`进行声明，但是在JavaScript中，`abstract`是属于保留字，但是我们可以通过在类的方法中抛出错误来模拟抽象类。

```js
function getAbstractUserFactory(type) {
  switch (type) {
    case 'wechat':
      return UserOfWechat;
      break;
    case 'qq':
      return UserOfQq;
      break;
    case 'weibo':
      return UserOfWeibo;
      break;
    default:
      throw new Error('参数错误, 可选参数:superAdmin、admin、user')
  }
}

let WechatUserClass = getAbstractUserFactory('wechat');
let QqUserClass = getAbstractUserFactory('qq');
let WeiboUserClass = getAbstractUserFactory('weibo');

let wechatUser = new WechatUserClass('微信小李');
let qqUser = new QqUserClass('QQ小李');
let weiboUser = new WeiboUserClass('微博小李');
```