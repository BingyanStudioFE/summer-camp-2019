class Footballer {
    constructor() {
        this.VNum = null;
        this.container = null;
        this.fieldLeft = 0;
        this.fieldTop = 0;
    }

    randomVNum() {
        this.VNum = Math.ceil(Math.random() * 99);
        this.fieldLeft = Math.floor(Math.random() * 100);
        this.fieldTop = Math.floor(Math.random() * 64);
    }


    getVMax() {
        return 3 + (this.VNum - 1) * (9 / 98);
    }

    runTo(num1, num2, t) {
        let x1 = 0; //上一个的时间百分比
        let x2 = 0; //下一个的时间百分比
        let y1 = 0; //上一刻的速度百分比
        let y2 = 0; //下一刻的速度百分比
        if (t == null) {
            t = 0.01;
        }

        let newBezier = new UnitBezier(0.39, 0.575, 0.565, 1);

        let len = Math.sqrt(Math.pow((num1 - this.fieldLeft), 2) + Math.pow((num2 - this.fieldTop), 2));
        if (y2 < 1 && y1 < 1 && t < 1) {
            y1 = y2;
            y2 = newBezier.sampleCurveY(t);
            x1 = x2;
            x2 = newBezier.sampleCurveX(t);
            let go = 3 * (x2 - x1) * this.getVMax() * (y2 + y1) / 2;
            if (go <= len) {
                let goLeft, goTop;
                if (this.fieldLeft > num1) {
                    goLeft = this.fieldLeft - go / len * (this.fieldLeft - num1);
                } else {
                    goLeft = this.fieldLeft + go / len * (num1 - this.fieldLeft);
                }
                if (this.fieldTop > num2) {


                    goTop = this.fieldTop - go / len * (this.fieldTop - num2);
                } else {
                    goTop = this.fieldTop + go / len * (num2 - this.fieldTop);
                }
                let temp = this;
                let time = 1000 * (x2 - x1);
                let gl, gt;
                for (let i = 0; i <= time; i = i + 10) {
                    if (goLeft > num1) {
                        gl = this.fieldLeft - i / time * (this.fieldLeft - goLeft);
                    } else {
                        gl = this.fieldLeft + i / time * (goLeft - this.fieldLeft);
                    }
                    if (goTop > num2) {
                        gt = this.fieldTop - i / time * (this.fieldTop - goTop);
                    } else {
                        gt = this.fieldTop + i / time * (goTop - this.fieldTop);
                    }

                    setTimeout(function () {
                        temp.fieldLeft = gl;
                        temp.fieldTop = gt;
                        temp.container.drawItemOnField();
                    }, i, gl, gt, temp, i);

                }
                setTimeout(function () {
                    temp.fieldLeft = goLeft;
                    temp.fieldTop = goTop;
                    temp.container.drawItemOnField();
                    temp.runTo(num1, num2, t);
                }, time, goLeft, goTop);
            }
        } else if (y2 === 1 && y1 === 1) {
        }
        if (t < 1) {
            t += 0.0001;
        }
    }
}
