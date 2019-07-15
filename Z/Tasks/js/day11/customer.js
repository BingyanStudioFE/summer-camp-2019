class Customer {
    constructor() {
        this.seatNumber = 0;
        this.eatList = [];
    }

    order(time) {
        let status = document.getElementById("customer-status");
        for (let i = 0; i < time; i++) {
            setTimeout(function () {
                status.innerText = "点单还需" + (time - i) + "秒";
            }, i * basicTime);
        }
    }

    eat(dish) {
        let status = document.getElementById("customer-status");
        const dishList = document.querySelectorAll('#customer-dish-list li');
        let temp = {};
        for (let i = 0; i < dishList.length; i++) {
            if (dishList[i].innerText === dish.name) {
                temp = dishList[i];
                break;
            }
        }
        temp.innerText = dish.name + "已上";
        status.innerText = "开始用餐";
        setTimeout(function () {
            temp.innerText = dish.name + "已吃完";
        }, 3000)
    }

    static sit() {
        let status = document.getElementById("customer-status");
        status.innerText = "入座";
    }

    static finish() {
        let status = document.getElementById("customer-status");
        status.innerText = "点单完毕";
    }

    static orderDish() {
        return Menu.getInstance().getRandom();
    }

}