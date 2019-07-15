function showCash(restaurant) {
    let cash = document.getElementById("cash");
    cash.innerText = restaurant.cash;
}

function addMenu(menu) {
    menu.add("meat", 20, 40, 3);
    menu.add("rice", 2, 5, 1);
    menu.add("soup", 5, 10, 2);
    menu.add("noodles", 5, 10, 2);
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

    let main = new Promise(function (resovle, reject) {
        Customer.sit();
    });
    main.then(Waiter.order())
        .then(customer.order(3))
        .then(setTimeout(function () {
            customer.eatList = Customer.orderDish();
            updateCustomerList(customer.eatList);
            Customer.finish();
            chef.dishList = customer.eatList;
            Waiter.submit();
            waiter.customer = customer;
        }, 3 * basicTime))
        .then(setTimeout(function () {
            chef.updateCookList();
            chef.startCook();
        }, 3.5 * basicTime));
}


// function nextCustomer(customer) {
//     let eatList = document.querySelectorAll('#app #customer-dash-list li');
//     let cash = document.querySelector('#app #cash');
//     let customer_status = document.querySelector('#customer-status');
//     if (customer_status.innerText === '就餐完毕') {
//         return;
//     }
//     if (eatList.length === 0) {
//         return;
//     }
//     for (let i = 0; i < eatList.length; i++) {
//         if (eatList[i].innerText.indexOf('已吃完') === -1) {
//             return;
//         }
//     }
//     let money = Number(cash.innerText);
//     for (let i = 0; i < customer.eatList.length; i++) {
//         money += Number(customer.eatList[i].price - customer.eatList[i].cost);
//     }
//     cash.innerText = money;
//     restaurant.cash = money;
//
//     customer_status.innerText = '就餐完毕';
//     setTimeout(function () {
//         customer_status.innerText = '无';
//         eatList[0].parentNode.innerHTML = '';
//     }, 1000)
// }
let basicTime = 1000;
let customerQueue = [];
let chef = Chef.getInstance("Tony", 5000);
let waiter = Waiter.getInstance("Jack", 5000);
let restaurant = Restaurant.getInstance(10000, 1, []);
window.onload = function () {
    let menu = Menu.getInstance();
    init(restaurant, menu);
    buttonListen();
    setInterval(startRestaurant, 100);
};

