let Interface = function (name, methods) {
    this.name = name;
    this.methods = [];
    for (let i = 0; i < methods.length; i++) {
        this.methods.push(methods[i]);
    }
};
Interface.ensureImplement = function (object) {
    for (let i = 1; i < arguments.length; i++) {
        let inter = arguments[i];
        if (inter.constructor !== Interface) {
            throw  new Error("如果是接口类的话，就必须是Interface类型");
        }
        for (let j = 0; j < inter.methods.length; j++) {
            let method = inter.methods[j];
            if (!object[method] || typeof object[method] != "function") {
                throw  new Error("实现类中没有完全实现接口中的所有方法")
            }
        }
    }
};

function extend(subClass, superClass) {
    var F = function () {
    };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superClass = superClass.prototype;
}

