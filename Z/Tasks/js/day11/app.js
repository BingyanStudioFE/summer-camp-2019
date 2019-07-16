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

function showCash() {
    let cash = document.getElementById("cash");
    cash.innerText = restaurant.cash;
}

function updateCash(customer) {
    let cash = document.getElementById("cash");
    let money = Number(cash.innerText);
    for (let i = 0; i < customer.eatList.length; i++) {
        money += Number(customer.eatList[i].price - customer.eatList[i].cost);
    }
    cash.innerText = money;
    restaurant.cash = money;
}

function addMenu(menu) {
    menu.add("rice", 2, 5, 1);
    menu.add("soup", 5, 10, 4);
    menu.add("noodles", 5, 10, 2);
    menu.add("meat", 20, 40, 3);
    menu.updateMenu();
}

function addStaff(restaurant) {
    restaurant.hire(chef);
    restaurant.hire(waiter);
}

function init(restaurant, menu) {
    showCash(restaurant);
    addStaff(restaurant);
    addMenu(menu);
}

function updateCustomerQueue(num) {
    let customerList = document.getElementById("customer-list");
    customerList.innerHTML = "";
    for (let i = 0; i < num; i++) {
        let customer = document.createElement("div");
        customer.setAttribute("class", "customer");
        customerList.appendChild(customer);
    }
}

function updateCustomerList(order) {
    let dishList = document.getElementById("customer-dish-list");
    dishList.innerHTML = "";
    for (let i = 0; i < order.length; i++) {
        let dish = document.createElement("li");
        dish.innerHTML = order[i].name;
        dishList.appendChild(dish);
    }
}

function buttonListen() {
    let button = document.getElementById("add-customer");
    button.onclick = function () {
        let customer = new Customer();
        customerQueue.push(customer);
        updateCustomerQueue(customerQueue.length);
    }
}

function startRestaurant() {
    if (document.getElementById("customer-status").innerText !== "无") {
        return;
    }
    if (customerQueue.length === 0) {
        return;
    }
    let customer = customerQueue.shift();
    updateCustomerQueue(customerQueue.length);

    let main = new Promise(function (resolve) {
        Customer.sit();
        resolve();
    });
    main.then(function () {
        Waiter.order();
    }).then(function () {
        customer.order(3);
    }).then(function () {
        setTimeout(() => {
            customer.eatList = Customer.orderDish();
            updateCustomerList(customer.eatList);
            Customer.finish();
            waiter.customer = customer;
            Waiter.submit();
            chef.dishList = customer.eatList;
        }, 3 * basicTime);
    }).then(function () {
        setTimeout(() => {
            chef.updateCookList();
            chef.startCook();
        }, 3.5 * basicTime);
    });
    setInterval((customer) => {
        nextCustomer(customer)
    }, 100, customer);
}

function nextCustomer(customer) {
    let eatList = document.querySelectorAll("#app #customer-dish-list li");
    let status = document.getElementById("customer-status");
    if (status.innerText === "就餐完毕") {
        return;
    }
    if (eatList.length === 0) {
        return;
    }
    for (let i = 0; i < eatList.length; i++) {
        if (eatList[i].innerText.indexOf("已吃完") === -1) {
            return;
        }
    }
    updateCash(customer);
    status.innerText = "就餐完毕";
    setTimeout(() => {
        status.innerText = "无";
        eatList[0].parentNode.innerHTML = "";
    }, 1000)
}

let basicTime = 1000;
let customerQueue = [];
let chef = Chef.getInstance("Tony", 5000);
let waiter = Waiter.getInstance("Jack", 5000);
let restaurant = Restaurant.getInstance(0, 1, []);
let menu = Menu.getInstance();

window.onload = function () {
    init(restaurant, menu);
    buttonListen();
    setInterval(startRestaurant, 100);
};

