class Waiter extends Staff {
    constructor(name, salary) {
        super(name, salary);
        this.customer = {};
    }

    serve(dish, num) {
        let status = document.getElementById("waiter-status");
        status.innerText = "上菜";
        Waiter.go();
        setTimeout(() => this.customer.eat(dish), 500);
        if (num) {
            setTimeout(() => {
                Waiter.back();
                status.innerText = "取菜";
            }, 500);
        }
        setTimeout(() => Waiter.finishWork(), 1000);
    }

    static order() {
        let status = document.getElementById("waiter-status");
        status.innerText = "点菜";
    }

    static submit() {
        let status = document.getElementById("waiter-status");
        status.innerText = "下单";
        Waiter.back();
        setTimeout(() => Waiter.finishWork(), 500);
    }

    static go() {
        let pos = document.getElementById("waiter-wrapper");
        pos.style.top = "240px";
        pos.style.left = "575px";
    }

    static back() {
        let pos = document.getElementById("waiter-wrapper");
        pos.style.top = "10px";
        pos.style.left = "320px"
    }

    static finishWork() {
        let status = document.getElementById("waiter-status");
        status.innerText = "空闲";
    }

}