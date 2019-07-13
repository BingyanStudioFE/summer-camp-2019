let Bar = {
    graphWidth: 700,
    graphHeight: 300,
    graphPadding: 20,
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
            const rate = dataMax / (axisHeight - 5);

            let barHtml = [];
            barHtml.push("<line x1=" + Bar.graphPadding + " y1=0 x2=" + Bar.graphPadding + " y2=" + axisHeight + " stroke=" + Bar.axisColor + " stroke-width='2'/>");
            barHtml.push("<line x1=" + Bar.graphPadding + " y1=" + axisHeight + " x2=" + axisWidth + " y2=" + axisHeight + " stroke=" + Bar.axisColor + " stroke-width='2'/>");

            for (let i = 0; i < newData.length; i++) {
                for (let j = 0; j < newData[i].length; j++) {
                    let barBlock = data.length * barWidth;
                    let x = Bar.graphPadding + (j + 1) * Bar.barGap + i * barWidth + j * barBlock;
                    barHtml.push("<rect width=" + barWidth + " height=" + (newData[i][j] / rate) + " x=" + x + " y=" + (axisHeight - newData[i][j] / rate) + " fill=" + Bar.barColor[i] + " value=" + newData[i][j] + ">");
                    barHtml.push("<animate attributeName=\"height\" from=0 to=" + (newData[i][j] / rate) + " begin=\"indefinite\" dur=\".5s\" fill=\"freeze\" />");
                    barHtml.push("</rect>");
                    if (i === 0) {
                        barHtml.push("<text x=" + (x + 8) + " y=" + (axisHeight + 15) + ">" + (j + 1) + "月" + "</text>");
                    }
                }
            }
            barGraph.innerHTML = barHtml.join("");

            const anim = document.querySelectorAll("animate");
            for (let i = 0; i < anim.length; i++) {
                anim[i].beginElement();
            }
        };
        return bar;
    }
};

// function showData(rect) {
//     let text = document.createElement("text");
//     let x = rect.getAttribute("x");
//     let y = rect.getAttribute("y") - 10;
//     let value = rect.getAttribute("value");
//     text.setAttribute("x", x);
//     text.setAttribute("y", y);
//     text.innerText = value;
//     text.style.display = "block";
//     rect.parentNode.insertBefore(text, rect);
// }

