function getMax(data) {
    let dataMax = 0;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[0] != "number") {
            let temp = Math.max(...data[i].sale);
            if (temp > dataMax) {
                dataMax = temp;
            }
        } else {
            dataMax = Math.max(...data);
        }
    }
    return dataMax;
}

function getSale(data) {
    let newData = [];
    for (let i = 0; i < data.length; i++) {
        if (typeof data[0] != "number") {
            newData.push(data[i].sale);
        } else {
            newData.push(data[i]);
        }
    }
    return newData;
}

let Bar = {
    graphWidth: 700,
    graphHeight: 300,
    graphPadding: 25,
    barGap: 12,
    barColor: ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"],
    axisColor: "#000",
    createBar: function () {
        let bar = {};
        bar.drawBar = function (data) {
            const barGraph = document.querySelector("#bar-graph");
            barGraph.setAttribute("width", Bar.graphWidth);
            barGraph.setAttribute("height", Bar.graphHeight);

            const dataMax = getMax(data);
            const newData = getSale(data);
            const axisWidth = Bar.graphWidth - Bar.graphPadding;
            const axisHeight = Bar.graphHeight - Bar.graphPadding;
            const barWidth = ((axisWidth - Bar.barGap * 15) / 12) / data.length;
            const rate = dataMax / axisHeight;

            let barHtml = [];
            barHtml.push("<line x1=" + Bar.graphPadding + " y1=0 x2=" + Bar.graphPadding + " y2=" + axisHeight + " stroke=" + Bar.axisColor + " stroke-width='2'/>");
            barHtml.push("<line x1=" + Bar.graphPadding + " y1=" + axisHeight + " x2=" + axisWidth + " y2=" + axisHeight + " stroke=" + Bar.axisColor + " stroke-width='2'/>");

            for (let i = 0; i < newData.length; i++) {
                for (let j = 0; j < newData[i].length; j++) {
                    let barBlock = data.length * barWidth;
                    let x = Bar.graphPadding + (j + 1) * Bar.barGap + i * barWidth + j * barBlock;
                    barHtml.push("<rect width=" + barWidth + " height=" + (newData[i][j] / rate) + " x=" + x + " y=" + (axisHeight - newData[i][j] / rate) + " fill=" + Bar.barColor[i] + " />");
                }
            }

            barGraph.innerHTML = barHtml.join("");
        };
        return bar;
    }
};