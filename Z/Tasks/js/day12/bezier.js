class UnitBezier {
    constructor(p1x, p1y, p2x, p2y) {
        this.cx = 3.0 * p1x;
        this.bx = 3.0 * (p2x - p1x) - this.cx;
        this.ax = 1.0 - this.cx - this.bx;
        this.cy = 3.0 * p1y;
        this.by = 3.0 * (p2y - p1y) - this.cy;
        this.ay = 1.0 - this.cy - this.by;
    }

    sampleCurveX(t) {
        return ((this.ax * t + this.bx) * t + this.cx) * t;
    }

    sampleCurveY(t) {
        return ((this.ay * t + this.by) * t + this.cy) * t;
    }
}
