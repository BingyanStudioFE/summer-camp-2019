class footballField {
    constructor() {
        this.height = 64;
        this.width = 100;
        this.proportion = null;
        this.container = null;
        this.classname = "football-field";
        this.sporterList = [];
    }

    computeHeightWidth(node) {
        let obj = {};
        let width = node.offsetWidth;
        let height = node.offsetHeight;
        let a = (this.width + 10) / (this.height + 4);
        switch (height * a >= width) {
            case true:
                obj.width = width;
                obj.height = 1 / a * width;
                break;
            case false:
                obj.width = a * height;
                obj.height = height;
                break;
        }
        this.proportion = obj.width / (this.width + 10);
        return obj;
    }

    drawFieldBySVGIn(node) {
        let data = this.computeHeightWidth(node);
        node.style.position = "relative";
        let svg = '<svg class = "football-field" width = "' + data.width + '" height = "' + data.height + '"  version="1.1" xmlns="http://www.w3.org/2000/svg">';
        svg += '<g class = "field"><rect width = "100%" height = "100%" style = "fill:rgb(154,205,50);"></rect>';
        //四条边
        svg += '<line x1 = "' + 5 * this.proportion + 'px" y1 = "' + 2 * this.proportion + 'px" x2 = "' + 5 * this.proportion + 'px" y2 = "' + ((2 + 64) * this.proportion) + 'px" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + (100 + 5) * this.proportion + 'px" y1 = "' + 2 * this.proportion + 'px" x2 = "' + (5 + 100) * this.proportion + 'px" y2 = "' + ((2 + 64) * this.proportion) + 'px" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 5 * this.proportion + 'px" y1 = "' + 2 * this.proportion + 'px" x2 = "' + (5 + 100) * this.proportion + 'px" y2 = "' + (2 * this.proportion) + 'px" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 5 * this.proportion + 'px" y1 = "' + (2 + 64) * this.proportion + 'px" x2 = "' + (5 + 100) * this.proportion + 'px" y2 = "' + ((2 + 64) * this.proportion) + 'px" style = "stroke: white ; stroke-width:2"/>';
        //中轴
        svg += '<line x1 = "' + (5 + 50) * this.proportion + 'px" y1 = "' + 2 * this.proportion + 'px" x2 = "' + (5 + 50) * this.proportion + 'px" y2 = "' + ((2 + 64) * this.proportion) + 'px" style = "stroke: white ; stroke-width:2"/>';
        svg += '<circle cx = "' + (55) * this.proportion + '" cy = "' + (34) * this.proportion + '" r="3" fill = "white"/>';
        svg += '<circle cx = "' + (55) * this.proportion + '" cy = "' + (34) * this.proportion + '" r="' + 9.15 * this.proportion + '" stroke = "white" stroke-width = "2" fill = "none"/>';
        //左门
        svg += '<line x1 = "' + 4 * this.proportion + 'px" y1 = "' + (34 - 7.32 / 2) * this.proportion + 'px" x2 = "' + 4 * this.proportion + 'px" y2 = "' + (34 + 7.32 / 2) * this.proportion + 'px" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 4 * this.proportion + 'px" y1 = "' + (34 - 7.32 / 2) * this.proportion + 'px" x2 = "' + 5 * this.proportion + 'px" y2 = "' + (34 - 7.32 / 2) * this.proportion + 'px" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 4 * this.proportion + 'px" y1 = "' + (34 + 7.32 / 2) * this.proportion + 'px" x2 = "' + 5 * this.proportion + 'px" y2 = "' + (34 + 7.32 / 2) * this.proportion + 'px" style = "stroke: white ; stroke-width:2"/>';
        //左侧球门区
        svg += '<line x1 = "' + 5 * this.proportion + '" y1 = "' + (34 - 7.32 / 2 - 5.5) * this.proportion + 'px" x2 = "' + 10.5 * this.proportion + '" y2 = "' + (34 - 7.32 / 2 - 5.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 5 * this.proportion + '" y1 = "' + (34 + 7.32 / 2 + 5.5) * this.proportion + 'px" x2 = "' + 10.5 * this.proportion + '" y2 = "' + (34 + 7.32 / 2 + 5.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 10.5 * this.proportion + '" y1 = "' + (34 - 7.32 / 2 - 5.5) * this.proportion + 'px" x2 = "' + 10.5 * this.proportion + '" y2 = "' + (34 + 7.32 / 2 + 5.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        //左侧罚球区
        svg += '<line x1 = "' + 5 * this.proportion + '" y1 = "' + (34 - 7.32 / 2 - 16.5) * this.proportion + 'px" x2 = "' + 21.5 * this.proportion + '" y2 = "' + (34 - 7.32 / 2 - 16.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 5 * this.proportion + '" y1 = "' + (34 + 7.32 / 2 + 16.5) * this.proportion + 'px" x2 = "' + 21.5 * this.proportion + '" y2 = "' + (34 + 7.32 / 2 + 16.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 21.5 * this.proportion + '" y1 = "' + (34 - 7.32 / 2 - 16.5) * this.proportion + 'px" x2 = "' + 21.5 * this.proportion + '" y2 = "' + (34 + 7.32 / 2 + 16.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<circle cx = "' + (5 + 11) * this.proportion + '" cy = "' + (34) * this.proportion + '" r="3" fill = "white"/>';
        svg += '<path d = "M' + 21.5 * this.proportion + ' ' + (34 - 7.31) * this.proportion + ' A' + 9.15 * this.proportion + ' ' + 9.15 * this.proportion + ' 0 0 1 ' + 21.5 * this.proportion + ' ' + (34 + 7.31) * this.proportion + '" style="fill:none;stroke:white;stroke-width:2"/>'
        //右门
        svg += '<line x1 = "' + 106 * this.proportion + 'px" y1 = "' + (34 - 7.32 / 2) * this.proportion + 'px" x2 = "' + 106 * this.proportion + 'px" y2 = "' + (34 + 7.32 / 2) * this.proportion + 'px" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 106 * this.proportion + 'px" y1 = "' + (34 - 7.32 / 2) * this.proportion + 'px" x2 = "' + 105 * this.proportion + 'px" y2 = "' + (34 - 7.32 / 2) * this.proportion + 'px" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 106 * this.proportion + 'px" y1 = "' + (34 + 7.32 / 2) * this.proportion + 'px" x2 = "' + 105 * this.proportion + 'px" y2 = "' + (34 + 7.32 / 2) * this.proportion + 'px" style = "stroke: white ; stroke-width:2"/>';
        //右侧球门区
        svg += '<line x1 = "' + 105 * this.proportion + '" y1 = "' + (34 - 7.32 / 2 - 5.5) * this.proportion + 'px" x2 = "' + 99.5 * this.proportion + '" y2 = "' + (34 - 7.32 / 2 - 5.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 105 * this.proportion + '" y1 = "' + (34 + 7.32 / 2 + 5.5) * this.proportion + 'px" x2 = "' + 99.5 * this.proportion + '" y2 = "' + (34 + 7.32 / 2 + 5.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 99.5 * this.proportion + '" y1 = "' + (34 - 7.32 / 2 - 5.5) * this.proportion + 'px" x2 = "' + 99.5 * this.proportion + '" y2 = "' + (34 + 7.32 / 2 + 5.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        //右侧罚球区
        svg += '<line x1 = "' + 105 * this.proportion + '" y1 = "' + (34 - 7.32 / 2 - 16.5) * this.proportion + 'px" x2 = "' + 88.5 * this.proportion + '" y2 = "' + (34 - 7.32 / 2 - 16.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 105 * this.proportion + '" y1 = "' + (34 + 7.32 / 2 + 16.5) * this.proportion + 'px" x2 = "' + 88.5 * this.proportion + '" y2 = "' + (34 + 7.32 / 2 + 16.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<line x1 = "' + 88.5 * this.proportion + '" y1 = "' + (34 - 7.32 / 2 - 16.5) * this.proportion + 'px" x2 = "' + 88.5 * this.proportion + '" y2 = "' + (34 + 7.32 / 2 + 16.5) * this.proportion + '" style = "stroke: white ; stroke-width:2"/>';
        svg += '<circle cx = "' + (105 - 11) * this.proportion + '" cy = "' + (34) * this.proportion + '" r="3" fill = "white"/>';
        svg += '<path d = "M' + 88.5 * this.proportion + ' ' + (34 - 7.31) * this.proportion + ' A' + 9.15 * this.proportion + ' ' + 9.15 * this.proportion + ' 0 0 0 ' + 88.5 * this.proportion + ' ' + (34 + 7.31) * this.proportion + '" style="fill:none;stroke:white;stroke-width:2"/>';
        //四个角球弧
        svg += '<path d= "M' + 6 * this.proportion + ' ' + 2 * this.proportion + ' A' + 1 * this.proportion + ' ' + 1 * this.proportion + ' 0 0 1 ' + 5 * this.proportion + ' ' + 3 * this.proportion + '" style="fill:none;stroke:white;stroke-width:2"/>';
        svg += '<path d= "M' + 104 * this.proportion + ' ' + 2 * this.proportion + ' A' + 1 * this.proportion + ' ' + 1 * this.proportion + ' 0 0 0 ' + 105 * this.proportion + ' ' + 3 * this.proportion + '" style="fill:none;stroke:white;stroke-width:2"/>';
        svg += '<path d= "M' + 6 * this.proportion + ' ' + 66 * this.proportion + ' A' + 1 * this.proportion + ' ' + 1 * this.proportion + ' 0 0 0 ' + 5 * this.proportion + ' ' + 65 * this.proportion + '" style="fill:none;stroke:white;stroke-width:2"/>';
        svg += '<path d= "M' + 104 * this.proportion + ' ' + 66 * this.proportion + ' A' + 1 * this.proportion + ' ' + 1 * this.proportion + ' 0 0 1 ' + 105 * this.proportion + ' ' + 65 * this.proportion + '" style="fill:none;stroke:white;stroke-width:2"/>';
        svg += '</svg>';
        svg += '<svg class = "item-on-field" width = "' + data.width + '" height = "' + data.height + '"  version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>';
        node.innerHTML = svg;
    }

    drawItemOnField() {
        let node = this.container.querySelector(".item-on-field");
        node.style.position = "absolute";
        node.style.top = 0;
        node.style.left = 0;
        let svg = "";
        for (let i = 0; i < this.sporterList.length; i++) {
            svg += "<g class = 'player'>";
            svg += "<circle cx = '" + (5 + this.sporterList[i].fieldLeft) * this.proportion + "px' cy = '" + (2 + this.sporterList[i].fieldTop) * this.proportion + "px' r = '" + 2 * this.proportion + "px' stroke = 'black' stroke-width = '1' fill = 'red'>";
            svg += "</g>";
        }
        node.innerHTML = svg;
    }
}