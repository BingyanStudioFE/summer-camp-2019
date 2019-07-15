class Waiter extends Staff {
    constructor(name, salary) {
        super(name, salary);
        this.customer = {};
    }

    static order() {
        let pos = document.getElementById("waiter-wrapper");
        let status = document.getElementById("waiter-status");
        status.innerText = "点单";
        pos.style.top = "225px";
        pos.style.left = "550px";
    }

    static submit() {
        let pos = document.getElementById("waiter-wrapper");
        let status = document.getElementById("waiter-status");
        status.innerText = "下单";
        pos.style.top = "10px";
        pos.style.left = "320px";
        setTimeout(function (status) {
            status.innerText = "空闲";
        }, 500, status);
    }

    serve(dish) {
        let pos = document.getElementById("waiter-wrapper");
        let status = document.getElementById("waiter-status");
        status.innerText = "上菜";
        pos.style.top = "225px";
        pos.style.left = "550px";
        setTimeout(function (pos) {
            pos.style.top = "10px";
            pos.style.left = "320px";
        }, 500, pos);
        setTimeout(function (status) {
            status.innerText = "空闲";
        }, 1000, status);
        this.customer.eat(dish);
    }

    static getInstance(name, salary) {
        if (!this.instance) {
            this.instance = new Waiter(name, salary);
        }
        return this.instance;
    }
}