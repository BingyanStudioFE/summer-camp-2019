class Restaurant {
    constructor(cash, seat, staff) {
        this.cash = cash;
        this.seat = seat;
        this.staff = staff;
    }

    hire(staff) {
        let flag = true;
        for (let i = 0; i < this.staff.length; i++) {
            if (this.staff.name === staff.name) {
                flag = false;
                break;
            }
        }
        if (flag) {
            this.staff.push(staff);
        }
    }

    fire(staff) {
        let index;
        for (let i = 0; i < this.staff.length; i++) {
            if (this.staff.name === staff.name) {
                index = i;
                break;
            }
        }
        if (!isNaN(index)) {
            this.staff.splice(index, 1);
        }
    }

    static getInstance(cash, seat, staff) {
        if (!this.instance) {
            this.instance = new this(cash, seat, staff);
        }
        return this.instance;
    }
}