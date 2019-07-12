//ES5
function object(o) {
    function F() {
    };
    F.prototype = o;
    return new F();
}

function inheritPrototype(subType, superType) {
    let prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function Restaurant(cash, seat, staff) {
    this.cash = cash;
    this.seat = seat;
    this.staff = staff;
}

Restaurant.prototype.hire = function (staff) {
    if (staff instanceof Staff) {
        this.staff.push(staff);
    }
};
Restaurant.prototype.fire = function (staff) {
    if (staff instanceof Staff) {
        this.staff = this.staff.filter(function (item) {
            return item.name !== staff.name;
        })
    }
};

function Staff(name, salary) {
    this.name = name;
    this.salary = salary;
}

function Waiter(name, salary) {
    Staff.call(this, name, salary);
}

inheritPrototype(Waiter, Staff);

// Waiter.prototype.submit = function (seat, mealList) {
//
// };
// Waiter.prototype.serve = function (seat) {
//
// };

function Cook(name, salary) {
    Staff.call(this, name, salary);
}

inheritPrototype(Cook, Staff);

// Cook.prototype.cook = function (meal) {
//
// };

function Customer(seat, mealList) {
    this.seat = seat;
    this.mealList = mealList;
}

// Customer.prototype.order = function (mealList) {
//
// };
// Customer.prototype.eat = function (seat, meal) {
//
// };

function Meal(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}

//ES6
