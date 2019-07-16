let Factory = function () {
};

Factory.create = function (str, node) {
    let obj = {};
    switch (str) {
        case "football-field" :
            obj = new footballField();
            if (node && node.nodeType === 1) {
                obj.container = node;
                obj.drawFieldBySVGIn(node);
            }
            return obj;
        case "footballer":
            obj = new Footballer();
            obj.randomVNum();
            if (node && node.classname === "football-field") {
                node.sporterList.push(obj);
                obj.container = node;
            }
            return obj;
    }
};