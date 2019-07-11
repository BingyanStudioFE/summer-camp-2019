let Line = {
    chartWidth: 700,
    chartHeight: 300,
    chartPadding: 10,
    dataRadius: 5,
    colors: ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"],
    dataDis: 50,
    createLine: function () {
        let line = {};
        line.drawLine = function (data) {
            const lineChart = document.querySelector("#line-chart");
            lineChart.setAttribute("width", Line.chartWidth);
            lineChart.setAttribute("height", Line.chartHeight);

            const dataMax = getMax(data);
            const newData = getSale(data);
            const axisWidth = Line.chartWidth - Line.chartPadding;
            const axisHeight = Line.chartHeight - Line.chartPadding;
            const rate = dataMax / (axisHeight - 10);

            let ctx = lineChart.getContext("2d");
            ctx.clearRect(0, 0, Line.chartWidth, Line.chartHeight);
            ctx.beginPath();
            ctx.moveTo(Line.chartPadding, 0);
            ctx.lineTo(Line.chartPadding, axisHeight);
            ctx.lineTo(axisWidth, axisHeight);
            ctx.lineWidth = "2";
            ctx.strokeStyle = "#000";
            ctx.stroke();

            for (let i = 0; i < newData.length; i++) {
                for (let j = 0; j < newData[i].length; j++) {
                    let x1 = (j + 1) * Line.dataRadius + (j + 1) * Line.dataDis;
                    let y1 = axisHeight - newData[i][j] / rate;
                    let x2 = (j + 2) * Line.dataRadius + (j + 2) * Line.dataDis;
                    let y2 = axisHeight - newData[i][j + 1] / rate;

                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.strokeStyle = Line.colors[i];
                    ctx.fillStyle = Line.colors[i];
                    ctx.lineWidth = 2;
                    ctx.closePath();
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(x1, y1, Line.dataRadius, 0, Math.PI * 2, false);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        };
        return line;
    }
};
