function drawBar(data) {
    let barGraph = document.querySelector("#bar-graph");
    let graphWidth = 1350;
    let graphHeight = 500;
    const graphPadding = 5;
    const axisWidth = graphWidth - graphPadding;
    const axisHeight = graphHeight - graphPadding;
    const barGap = 20;
    const barWidth = ((axisWidth - barGap * 15) / 12) / data.length;
    const barColor = ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"];
    const axisColor = "#000";
    let dataMax = 0;
    let newData = [];

    barGraph.setAttribute("width", graphWidth);
    barGraph.setAttribute("height", graphHeight);

    for (let i = 0; i < data.length; i++) {
        let temp = Math.max(...data[i].sale);
        if (temp > dataMax) {
            dataMax = temp;
        }
        newData.push(data[i].sale);
    }

    let rate = axisHeight / dataMax;
    let barHtml = [];
    barHtml.push("<line x1=" + graphPadding + " y1=0 x2=" + graphPadding + " y2=" + axisHeight + " stroke=" + axisColor + " stroke-width='2'/>");
    barHtml.push("<line x1=" + graphPadding + " y1=" + axisHeight + " x2=" + axisWidth + " y2=" + axisHeight + " stroke=" + axisColor + " stroke-width='2'/>");

    for (let i = 0; i < newData.length; i++) {
        for (let j = 0; j < newData[i].length; j++) {
            let num = parseInt(newData[i][j]);
            let barBlock = data.length * barWidth;
            let x = graphPadding + (j + 1) * barGap + i * barWidth + j * barBlock;
            barHtml.push("<rect width=" + barWidth + " height=" + (num * rate) + " x=" + x + " y=" + (axisHeight - num * rate) + " fill=" + barColor[i] + " />");
        }
    }
    barGraph.innerHTML = barHtml.join("");
}