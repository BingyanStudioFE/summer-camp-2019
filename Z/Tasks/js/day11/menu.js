function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

class Menu {
    constructor() {
        this.list = [];
    }

    add(name, cost, price, time) {
        this.list.push(new Dish(name, cost, price, time));
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
            this.instance = new Menu();
        }
        return this.instance;
    }
}