let id = 0;

class Staff {
    constructor(name, salary) {
        this.id = ++id;
        this.name = name;
        this.salary = salary;
    }
}
