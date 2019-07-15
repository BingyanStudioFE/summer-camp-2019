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

class Queue {
    constructor(data) {
        this.data = data;
    }

    enterQueue(customer) {
        this.data.push(customer);
    }

    deleteQueue() {
        if (this.empty()) {
            console.log("This queue is empty");
        } else {
            this.data.shift();
        }
    }

    front() {
        if (this.empty()) {
            console.log("This queue is empty");
        } else {
            return this.data[0];
        }
    }

    back() {
        if (this.empty()) {
            console.log("This queue is empty");
        } else {
            return this.data[this.data.length - 1];
        }
    }

    show() {
        if (this.empty()) {
            console.log("This queue is empty");
        } else {
            let temp = [];
            for (let i = 0; i < this.data.length; i++) {
                temp.push(this.data[i].name);
            }
            console.log(temp.join("->"));
        }
    }

    clear() {
        delete this.data;
        this.data = [];
    }

    empty() {
        return this.data.length === 0;
    }
}

class Restaurant {
    constructor(cash, seat, staff) {
        this.cash = cash;
        this.seat = seat;
        this.staff = staff;
    }

    hire(staff) {
        this.staff.push(staff);
    }

    fire(staff) {
        let index;
        for (let i = 0; i < this.staff.length; i++) {
            if (this.staff.name === staff.name) {
                index = i;
                break;
            }
        }
        this.staff.splice(index, 1);
    }
}

class Staff {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Waiter extends Staff {
    constructor(name, salary) {
        super(name, salary);
    }

    submitMeal(customer, chef) {
        let meal = Waiter.order(mealList);
        for (let i = 0; i < meal.length; i++) {
            console.log("Waiter " + this.name + " submit " + meal[i].name + " to " + "Chef " + chef.name);
            chef.cook(this, meal[i], customer);
        }
    }

    serve(meal, customer) {
        console.log("Waiter " + this.name + " serve " + meal.name + " to " + "Customer " + customer.name);
        customer.eat(meal);
    }

    static getInstance(name, salary) {
        if (!this.instance) {
            this.instance = new Waiter(name, salary);
        }
        return this.instance;
    }
}

class Chef extends Staff {
    constructor(name, salary) {
        super(name, salary);
    }

    cook(waiter, meal, customer) {
        console.log("Chef " + this.name + " cook " + meal.name + " for " + "Customer " + customer.name);
        waiter.serve(meal, customer);
    }

    static getInstance(name, salary) {
        if (!this.instance) {
            this.instance = new Chef(name, salary);
        }
        return this.instance;
    }
}

class Customer {
    constructor(name) {
        this.name = name;
    }

    enter(restaurant) {
        restaurant.seat -= 1;
        console.log("Customer " + this.name + " enter Restaurant");
        console.log("Restaurant seat:" + restaurant.seat);
    }

    leave(restaurant) {
        restaurant.seat += 1;
        console.log("Customer " + this.name + " leave Restaurant");
        console.log("Restaurant seat:" + restaurant.seat);
    }

    order(mealList) {
        let order = [];
        let result = [];
        let num = randomNum(1, 3);
        for (let i = 0; i < num; i++) {
            let index = randomNum(0, 2);
            order.push(mealList[index]);
        }
        for (let i = 0; i < order.length; i++) {
            result.push(order[i].name);
        }
        console.log("Customer " + this.name + " order " + result.join(","));
        return order;
    }

    eat(meal) {
        console.log("Customer " + this.name + " eat " + meal.name);
    }
}

class Meal {
    constructor(name, cost, price, time) {
        this.name = name;
        this.cost = cost;
        this.price = price;
        this.time = time;
    }
}

//meal
const meat = new Meal("meat", 90, 100, 3);
const vegetables = new Meal("vegetables", 30, 40, 2);
const juice = new Meal("juice", 10, 20, 1);
const mealList = [meat, vegetables, juice];

//restaurant
let restaurant = new Restaurant(1000, 1, []);
let waiter = Waiter.getInstance("A", 1000);
let chef = Chef.getInstance("A", 1000);
restaurant.hire(waiter);
restaurant.hire(chef);

//customer queue
const a = new Customer("A");
const b = new Customer("B");
const c = new Customer("C");
let customerQueue = new Queue([]);
customerQueue.enterQueue(a);
customerQueue.enterQueue(b);
customerQueue.enterQueue(c);

//main
while (!customerQueue.empty()) {
    let customer = customerQueue.front();
    customer.enter(restaurant);
    waiter.submitMeal(customer, chef);
    customer.leave(restaurant);
    customerQueue.deleteQueue();
    console.log("------------------")
}

