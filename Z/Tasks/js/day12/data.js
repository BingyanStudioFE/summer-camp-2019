let Data = {
    basicTime: 1000,
    maxSeat: 4,
    maxQueue: 30,
    customerQueue: [],
    seatQueue: [],
    RestaurantData: null,
    nowCook: [],
    nowWaiter: [],
    nowCookList: [],

    updateBasicTime: function (data) {
        data *= 1000;
        this.basicTime = data;
    },
    getBasicTime: function () {
        return this.basicTime / 1000;
    },

    showBasicTime: function () {
        const time = document.querySelector("#show-basicTime");
        time.innerHTML = this.getBasicTime();
        const button = document.querySelector("#button-basicTime");
        button.onclick = function () {
            const input = document.querySelector("#input-basicTime");
            if (input.value == null || input.value === 0) {
                return;
            }
            Data.updateBasicTime(input.value);
            time.innerHTML = Data.getBasicTime();
        };
        const input = document.querySelector("#input-basicTime");
        input.value = this.getBasicTime();
        input.onchange = function () {
            if (input.value > 10) {
                input.value = 10;
                alert("单位时间不允许超过10");
            } else if (input.value < 1) {
                input.value = 1;
                alert("单位时间不允许小于1");
            }
        }
    },

    comeCustomer: function () {
        let result = parseInt(Math.random() * 4);
        if ((this.customerQueue.length + result) <= this.maxQueue) {
            for (let i = 0; i < result; i++) {
                this.customerQueue.push(Factory.create("Customer"));
            }
        }
    },

    updateCustomer: function () {
        const list1 = document.querySelector("#app #queue-wrapper");
        let result1 = "";
        for (let i = 0; i < this.customerQueue.length; i++) {
            result1 += '<div class = "customer"></div>';
        }
        list1.innerHTML = result1;

        const list2 = document.querySelector("#app #seat-wrapper");
        let result2 = "";
        let status = "";
        for (let i = 0; i < this.seatQueue.length; i++) {
            if (this.seatQueue[i] === undefined) {
                status = "无客";
            } else if (this.seatQueue[i].status === '') {
                status = "已入座";
                this.seatQueue[i].status = "已入座";
            } else {
                status = this.seatQueue[i].status;
            }

            let eatListResult = "";
            if (this.seatQueue[i]) {
                for (let j = 0; j < this.seatQueue[i].eatList.length; j++) {
                    let customerEatListStatus = "未上桌";
                    if (this.seatQueue[i].eatList[j].status === "已上桌") {
                        customerEatListStatus = "已上桌";
                    }
                    if (this.seatQueue[i].eatList[j].status === "已吃完") {
                        customerEatListStatus = "已吃完";
                    }
                    eatListResult += "<li>" + this.seatQueue[i].eatList[j].name + "<br>" + customerEatListStatus + "</li>"
                }
            }


            result2 += '<div class = "customer_in_seat">\
                            <div id = "customer_status_wrapper">\
                                <p>顾客状态：<p>\
                                <p id = "customer-status">' + status + '</p>\
                                <div class = "image_Customer"></div>\
                            </div>\
                            <div>\
                                <ul id = "customer_eatList">' + eatListresult + '\
                                </ul>\
                            </div>\
                        </div>';
        }
        list2.innerHTML = result2;

        let preList = document.querySelector("#cook-list");
        let result3 = '';
        for (let j = 0; j < this.nowCookList.length; j++) {
            result3 += '<li>' + this.nowCookList[j].name + "<br>" + this.nowCookList[j].status + " " + this.nowCookList[j].seat + "</li>"
        }
        preList.innerHTML = result3;
    },

    comeIntoSeat: function () {
        if (this.RestaurantData == null) {
            return;
        }
        if (this.customerQueue[0] == null) {
            return;
        }
        for (let i = 0; i < this.RestaurantData.seats; i++) {
            if (this.seatQueue[i] == null && this.customerQueue[0]) {
                this.seatQueue[i] = this.customerQueue.shift();
                this.seatQueue[i].seatNumber = i + 1;
            }
        }
    },
    updateStaff: function () {
        let tcook = [];
        let twaiter = [];
        for (let i = 0; i < this.RestaurantData.staff.length; i++) {
            if ((this.RestaurantData.staff[i]).constructorname === 'Cook') {
                tcook.push(this.RestaurantData.staff[i]);
            }
            if ((this.RestaurantData.staff[i]).constructorname === 'Waiter') {
                twaiter.push(this.RestaurantData.staff[i]);
            }
        }
        this.nowCook = tcook;
        this.nowWaiter = twaiter;

        let cookList = document.querySelector('#many-cook');
        let result1 = "";
        for (let i = 0; i < this.nowCook.length; i++) {
            result1 += '<div class = "one-cook-wrapper" id = "' + 'Cook-' + this.nowCook[i].id + '">\
                            <div class = "cook-status-wrapper">\
                                <p>厨师' + this.nowCook[i].name + '状态：</p>\
                                <p class = "cook-status">' + this.nowCook[i].status + '</p>\
                                <div class = "image-Cook"></div>\
                                <input type = "button" value = "解雇">\
                            </div>\
                        </div>';
        }
        cookList.innerHTML = result1;
        if (document.querySelectorAll(".one-cook-wrapper input").length !== 0) {
            let cook_buttons = document.querySelectorAll(".one-cook-wrapper input");
            for (let x = 0; x < cook_buttons.length; x++) {
                cook_buttons[x].onclick = function () {
                    Data.nowCook[x].preWork = "等待解雇";
                    setTimeout(() => {
                        Data.updateStaff();
                    }, 500);
                }
            }
        }

        let result2 = '';
        const waiterList = document.querySelector('#waiter_-rapper');
        for (let i = 0; i < this.nowWaiter.length; i++) {
            result2 += '<div class = "one-waiter-wrapper" id = "' + 'Waiter-' + this.nowWaiter[i].id + '">\
                            <div class = "waiter-status-wrapper">\
                                <p class = "waiter-status">侍者' + this.nowWaiter[i].name + '状态：' + this.nowWaiter[i].status + '</p>\
                                <div class = "image-Waiter"></div>\
                                <input type = "button" value = "解雇">\
                            </div>\
                        </div>';
        }
        waiterList.innerHTML = result2;
        if (this.nowWaiter.length !== 0) {
            let waiter_buttons = document.querySelectorAll(".one-waiter-wrapper input");
            for (let x = 0; x < waiter_buttons.length; x++) {
                waiter_buttons[x].onclick = function () {
                    Data.nowWaiter[x].preWork = "等待解雇";
                    setTimeout(function () {
                        Data.updateStaff();
                    }, 500);
                }
            }
        }
    },
    startOrder() {
        if (this.seatQueue.length === 0) {
            return;
        }
        for (let i = 0; i < this.seatQueue.length; i++) {
            if (!this.seatQueue[i]) {
                return
            }
            if (this.seatQueue[i].status === "已入座") {
                let runTime = this.basicTime * 3;
                for (let j = 0; j <= runTime; j += 1000) {
                    if (j === runTime) {
                        setTimeout(function () {
                            Data.seatQueue[i].status = "等待上菜";
                            let list = Data.seatQueue[i].order();
                            for (let i = 0; i < list.length; i++) {
                                list[i].status = '未被处理';
                                Data.nowCookList.push(list[i]);
                            }
                            Data.seatQueue[i].eatList = list;
                        }, j, i);
                    } else {
                        setTimeout(function () {
                            Data.seatQueue[i].status = "点单中，还剩" + (runTime - j) / 1000 + "秒"
                        }, j, i, j);
                    }

                }
            }
        }
    },
    startCook() {
        if (this.nowCook.length === 0) {
            return;
        }
        if (this.nowCookList.length === 0) {
            return;
        }
        let cookhavetime = [];
        for (let i = 0; i < this.nowCook.length; i++) {
            if (this.nowCook[i].status === '无' && this.nowCook[i].preWork === "等待工作") {
                cookhavetime.push(this.nowCook[i]);
            }
        }
        if (cookhavetime.length === 0) {
            return;
        }
        let whoCook = cookhavetime[parseInt(cookhavetime.length * Math.random())];
        let needCook = [];
        for (let i = 0; i < this.nowCookList.length; i++) {
            if (this.nowCookList[i].status === '未被处理') {
                needCook.push(this.nowCookList[i]);
            }
        }
        let toCookName = needCook[Math.floor(needCook.length * Math.random())];
        if (toCookName === undefined) {
            return
        }
        let toCook = [];
        for (let i = 0; i < needCook.length; i++) {
            if (needCook[i].name === toCookName.name) {
                needCook[i].status = "已有厨师处理";
                toCook.push(needCook[i]);
            }
        }
        let runTime = this.basicTime * toCookName.time;
        for (let j = 0; j <= runTime; j += 1000) {
            if (runTime === j) {
                setTimeout(function () {
                    whoCook.status = '无';
                    Data.updateStaff();
                    Data.startFire();
                    for (let i = 0; i < toCook.length; i++) {
                        toCook[i].status = '已做完';
                    }
                    Data.updateStaff();
                }, j);
            } else {
                setTimeout(function () {
                    whoCook.status = toCookName.name + "，还剩" + (runTime - j) / 1000 + "秒";
                    Data.updateStaff();
                }, j, j);
            }
        }

    },
    startServe() {
        if (this.nowWaiter.length === 0) {
            return;
        }
        if (this.nowCookList.length === 0) {
            return;
        }
        let waiterhavetime = [];
        for (let i = 0; i < this.nowWaiter.length; i++) {
            if (this.nowWaiter[i].status === '无' && this.nowWaiter[i].preWork === "等待工作") {
                waiterhavetime.push(this.nowWaiter[i]);
            }
        }
        if (waiterhavetime.length === 0) {
            return;
        }
        let whoServe = waiterhavetime[parseInt(waiterhavetime.length * Math.random())];
        let toStorage = [];
        let needSend = [];
        for (let i = 0; i < this.nowCookList.length; i++) {
            if (this.nowCookList[i].status === '已做完') {
                needSend.push(this.nowCookList[i]);
            } else {
                toStorage.push(this.nowCookList[i]);
            }
        }
        if (needSend.length === 0) {
            return;
        }
        let toSendSeat = needSend[Math.floor(needSend.length * Math.random())];
        if (toSendSeat === undefined) {
            return;
        }
        let toSend = [];

        for (let i = 0; i < needSend.length; i++) {
            if (needSend[i].seat === toSendSeat.seat) {
                toSend.push(needSend[i]);
            } else {
                toStorage.push(needSend[i]);
            }
        }
        this.nowCookList = toStorage;
        whoServe.status = '上菜';
        let runTime = this.basicTime * 3;
        setTimeout(function () {
            whoServe.status = '无';
            Data.updateStaff();
            Data.startFire();
            let customer = Data.seatQueue[toSendSeat.seat - 1];
            for (let i = 0; i < toSend.length; i++) {
                for (let j = 0; j < customer.eatList.length; j++) {
                    if (toSend[i] === customer.eatList[j]) {
                        customer.eatList[j].status = '已上桌';
                    }
                }
            }
            Data.updateStaff();
        }, runTime);

    },
    startEat() {
        for (let i = 0; i < this.seatQueue.length; i++) {
            if (this.seatQueue[i] === undefined) {
                break;
            }
            if (this.seatQueue[i].status !== '等待上菜') {
                break;
            }
            this.seatQueue[i].eat();
            let flag = 0;
            for (let j = 0; j < this.seatQueue[i].eatList.length; j++) {
                if (this.seatQueue[i].eatList[j].status === "已吃完") {
                    flag++;
                }
            }
            if (flag === this.seatQueue[i].eatList.length) {
                this.seatQueue[i] = undefined;
            }
        }
    },
    startFire() {
        let result = [];
        for (let i = 0; i < this.RestaurantData.staff.length; i++) {
            if (this.RestaurantData.staff[i].preWork !== "等待解雇" || this.RestaurantData.staff[i].status !== "无") {
                result.push(this.RestaurantData.staff[i]);
            }
        }

        this.RestaurantData.staff = result;
    }
};