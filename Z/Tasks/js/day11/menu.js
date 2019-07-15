class Menu {
    constructor() {
        this.list = [];
    }

    add(name, cost, price, time) {
        this.list.push(new Dish(name, cost, price, time));
    }

    updateMenu() {
        let menuList = document.getElementById("menu-wrapper");
        menuList.innerHTML = "";
        menuList.innerHTML += "<div>MENU</div>";
        for (let i = 0; i < this.list.length; i++) {
            let item = document.createElement("div");
            item.innerHTML = this.list[i].name + ": " + this.list[i].price + "$";
            menuList.appendChild(item);
        }
    }

    getRandom() {
        let times = randomNum(1, 4);
        let order = [];
        for (let i = 0; i < times; i++) {
            let index = randomNum(0, 3);
            order.push(this.list[index]);
        }
        return order;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}