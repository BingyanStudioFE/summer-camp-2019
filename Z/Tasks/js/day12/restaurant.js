class Restaurant {
    constructor(cash, seat, staff) {
        this.cash = cash;
        this.seat = seat;
        this.staff = staff;
        this.worldTime = 1000;
    }

    hire(staff) {
        for (let i = 0; i < this.staff.length; i++) {
            if (this.staff[i].id === staff.id) {
                staff = null;
                break;
            }
        }
        if (staff) {
            this.staff.push(staff);
        }
    }

    getTime() {
        return this.worldTime;
    }

    setTime(num) {
        if (!isNaN(num)) {
            this.worldTime = Number(num)
        }
        return this.worldTime
    }

    static getInstance(cash, seat, staff) {
        if (!this.instance) {
            this.instance = new this(cash, seat, staff);
        }
        return this.instance;
    }
}