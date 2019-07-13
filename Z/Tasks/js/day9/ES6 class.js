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
        this.staff = this.staff.filter(function (item) {
            return item.name !== staff.name;
        })
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
}

class Chef extends Staff {
    constructor(name, salary) {
        super(name, salary);
    }
}

class Customer {
}

class Meal {
    constructor(name, cost, price) {
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}
