class Waiter extends Staff {
    constructor(name, salary) {
        super(name, salary);
        this.customer = {};
        this.status = "无";
        this.preWork = "等待工作";
        this.constructorname = "Waiter";
    }
}