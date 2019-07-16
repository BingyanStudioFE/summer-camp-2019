class Customer {
    constructor() {
        this.seatNumber = 0;
        this.status = '';
        this.eatList = [];
        this.eating = false;
    }

    orderDish() {
        let status = document.getElementById("customer-status");
        for (let i = 0; i < time; i += 1000) {
            setTimeout((i) => {
                status.innerText = "点单还需" + (time - i) / 1000 + '秒'
            }, i);
        }
    }

    order() {
        let list = Menu.getInstance().getRandom();
        let result = [];
        for (let i = 0; i < list.length; i++) {
            let newDish = new Dish(list[i].name, list[i].cost, list[i].price, list[i].time);
            newDish.seat = this.seatNumber;
            newDish.status = "未被处理";
            result.push(newDish);
        }
        return result;
    }

    eat() {
        let needEat = [];
        if (this.status !== "等待上菜") {
            return;
        }
        for (let i = 0; i < this.eatList.length; i++) {
            if (this.eatList[i].status === "已上桌") {
                needEat.push(this.eatList[i]);
            }
        }
        if (needEat.length === 0) {
            return;
        }
        let toEat = needEat[parseInt(needEat.length * Math.random())];
        let runTime = 3 * Data.basicTime;
        for (let i = 0; i <= runTime; i += 1000) {
            if (i === runTime) {
                setTimeout(() => {
                    this.status = "等待上菜";
                    toEat.status = "已吃完";
                }, i);
            } else {
                setTimeout(() => {
                    this.status = "食用" + toEat.name + "，还剩" + (runTime - i) / 1000 + "秒";
                }, i)
            }
        }
    }

    static sit() {
        let status = document.getElementById("customer-status");
        status.innerText = "入座";
    }

    static finish() {
        let status = document.getElementById("customer-status");
        status.innerText = "点菜完毕";
    }

}