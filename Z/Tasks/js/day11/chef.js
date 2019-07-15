class Chef extends Staff {
    constructor(name, salary) {
        super(name, salary);
        this.dishList = [];
    }

    updateCookList(order) {
        let dishList = order || this.dishList;
        let list = document.getElementById("cook-list");
        list.innerHTML = "";
        for (let i = 0; i < dishList.length; i++) {
            let dish = document.createElement("li");
            dish.innerHTML = dishList[i].name;
            list.appendChild(dish);
        }
    }

    startCook() {
        let status = document.getElementById("cook-status");
        let i = 0;
        while (this.dishList.length > 0) {
            let dish = this.dishList[0];

            let temp = [];
            for (let k = 1; k < this.dishList.length; k++) {
                temp.push(this.dishList[k]);
            }
            this.dishList = temp;

            for (let j = 0; j < dish.time; j++) {
                setTimeout((dish) => {
                    status.innerText = "烹饪" + dish.name + "还需" + (dish.time - j) + "秒"
                }, (i * basicTime + j * basicTime), dish);
            }
            i += dish.time;
            setTimeout((dishList, dish) => {
                waiter.serve(dish, dishList.length);
                this.updateCookList(dishList)
            }, i * 1000, this.dishList, dish);
        }
        setTimeout(() => Chef.finishCook(), i * 1000);
    }

    static finishCook() {
        let status = document.getElementById("cook-status");
        status.innerText = "空闲"
    }
}