class Customer {
    constructor() {
        this.seatNumber = 0;
        this.eatList = [];
        this.eating = false;
    }

    order(time) {
        let status = document.getElementById("customer-status");
        for (let i = 0; i < time; i++) {
            setTimeout(() => {
                status.innerText = "点菜还需" + (time - i) + "秒";
            }, i * basicTime);
        }
    }

    eat(dish) {
        let status = document.getElementById("customer-status");
        const dishList = document.querySelectorAll("#customer-dish-list li");
        let temp = {};
        for (let i = 0; i < dishList.length; i++) {
            if (dishList[i].innerText === dish.name) {
                temp = dishList[i];
                break;
            }
        }
        status.innerText = "开始用餐";
        temp.innerText = dish.name + "已上";
        let timer = setInterval(() => {
            this.beginEat(temp, dish, timer);
        }, 100);
    }

    beginEat(temp, dish, timer) {
        if (!this.eating) {
            this.eating = true;
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    temp.innerText = dish.name + "还需" + (3 - i) + "秒吃完";
                }, i * basicTime);
            }
            setTimeout(() => {
                temp.innerText = dish.name + "已吃完";
                clearInterval(timer);
                this.eating = false;
            }, 3000)
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

    static orderDish() {
        return menu.getRandom();
    }

}