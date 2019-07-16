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

function randomCreate(str) {
    let dName = ['Ben', 'Sam', 'Tony', 'Ann', 'Bella', 'Andy', 'Cora', 'Eve', 'Kelly', 'Joyce', 'Andrew', 'Alonso', 'Edith', 'Elvis', 'Abel'];
    let dCash = ['10000', '9000', '12000', '7000', '8000'];
    if (str === "name") {
        return dName[parseInt(Math.random() * dName.length)];
    } else if (str === "cash") {
        return dCash[parseInt(Math.random() * dCash.length)];
    }
}


function test() {
    Data.showBasicTime();
    const startButton = document.querySelector("#open");
    let set;
    startButton.onclick = function () {
        if (startButton.value === "开始营业") {
            let start = setInterval(function () {
                Data.comeCustomer();
            }, 3 * Data.basicTime);
            startButton.value = "停止营业";
            set = start;
        } else if (startButton.value === "停止营业") {

            set = window.clearInterval(set);
            startButton.value = "开始营业";
            Data.customerQueue = [];
        }
    };
    let ifeRestaurant = Restaurant.getInstance({
        cash: 1000000,
        seats: 4,
        staff: []
    });
    Data.RestaurantData = ifeRestaurant;
    let cash = document.querySelector('#app #cash');
    cash.innerText = ifeRestaurant.cash;
    let ifeMenu = Factory.create('Menu');
    ifeMenu.add('糖醋排骨', 20, 40, 5);
    ifeMenu.add('麻婆豆腐', 10, 20, 4);
    ifeMenu.add('老鸭粉丝汤', 13, 26, 4);
    ifeMenu.add('蒜枣大黄鱼', 18, 44, 6);

    let addCook_button = document.querySelector('#add-cook');
    addCook_button.onclick = function () {
        if (Data.nowCook.length >= 6) {
            return;
        }
        let newCook = new Cook(randomCreate('name'), randomCreate('cash'));
        ifeRestaurant.hire(newCook);
        Data.updateStaff();
    };
    let addWaiter_button = document.querySelector('#add-waiter');
    addWaiter_button.onclick = function () {
        if (Data.nowWaiter.length >= 6) {
            return;
        }
        let newWaiter = new Waiter(randomCreate('name'), randomCreate('cash'));
        ifeRestaurant.hire(newWaiter);
        Data.updateStaff();
    };

    setInterval(() => {
        Data.updateCustomer();
        Data.startFire()
    }, 500);
    setInterval(() => {
        Data.comeIntoSeat();
    }, 100);
    setInterval(() => {
        Data.startOrder();
        Data.startCook();
        Data.startServe();
        Data.startEat();
    }, 100)
}

addLoadEvent(test);
