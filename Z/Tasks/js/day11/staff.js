class Staff {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    static getInstance(name, salary) {
        if (!this.instance) {
            this.instance = new this(name, salary);
        }
        return this.instance;
    }
}
