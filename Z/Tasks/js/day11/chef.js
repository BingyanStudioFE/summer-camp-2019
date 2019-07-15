class Chef extends Staff {
    constructor(name, salary) {
        super(name, salary);
        this.dishList = [];
    }

    updateCookList(order) {
        let dishList = order || this.dishList;
        let list = document.getElementById("cook-list");
        // list.innerHTML = "";
        // for (let i = 0; i < dishList.length; i++) {
        //     let dish = document.createElement("li");
        //     dish.innerHTML = dishList[i].name;
        //     list.appendChild(dish);
        // }
        let result = '';
        for (let i = 0; i < dishList.length; i++) {
            result += '<li>' + dishList[i].name + '</li>';
        }
        list.innerHTML = result;
    }

    startCook() {
        let status = document.getElementById("cook-status");
        let i = 0;
        while (this.dishList.length > 0) {
            let dish = this.dishList[0];
            let arr = [];
            for (let k = 1; k < this.dishList.length; k++) {
                arr.push(this.dishList[k]);
            }
            this.dishList = arr;
            for (let j = 0; j < dish.time; j++) {
                setTimeout(function (dish) {
                    status.innerText = "烹饪" + dish.name + "还需" + (dish.time - j) + "秒"
                }, (i * basicTime + j * basicTime), dish);
            }
            i += dish.time;
            setTimeout(function (temp, it, dish) {
                waiter.serve(dish);
                it.updateCookList(temp)
            }, i * 1000, this.dishList, this, dish);
        }
        setTimeout(function () {
            status.innerText = "空闲"
        }, i * 1000);
    }

    static getInstance(name, salary) {
        if (!this.instance) {
            this.instance = new Chef(name, salary);
        }
        return this.instance;
    }
}