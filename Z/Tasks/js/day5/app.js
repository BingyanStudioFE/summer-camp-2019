function renderAll(data, bar, line) {
    const tableWrapper = document.getElementById("table-wrapper");
    bar.drawBar(data);
    line.drawLine(data);
    renderTable(tableWrapper, data);
}

function renderGraph(data, bar, line) {
    bar.drawBar(data);
    line.drawLine(data);
}

function init(data, bar, line) {
    const region = document.getElementById("region-radio-wrapper");
    const product = document.getElementById("product-radio-wrapper");
    chooseCheckBox(region);
    chooseCheckBox(product);
    renderAll(data, bar, line);
}

function getTr(parent, bar, line) {
    let array = [];
    let newData = [];
    if (Number(parent.childNodes[3].innerText)) {
        for (let i = 0; i < 2; i++) {
            array.push(parent.childNodes[i].innerText);
        }
        for (let i = 0; i < sourceData.length; i++) {
            if (array.indexOf(sourceData[i].region) !== -1 && array.indexOf(sourceData[i].product) !== -1) {
                newData.push(sourceData[i]);
            }
        }
        renderGraph(newData, bar, line);
    }
}

function mouse(bar, line) {
    const tableWrapper = document.getElementById("table-wrapper");
    tableWrapper.onmouseover = function (e) {
        getTr(e.target.parentNode, bar, line);
    };
    tableWrapper.onmouseout = function () {
        renderGraph(getData(), bar, line);
    };
}

function checkbox(bar, line) {
    const checkboxWrapper = document.getElementById("checkbox-wrapper");
    checkboxWrapper.onchange = function () {
        renderAll(getData(), bar, line);
    };
}

function animate(bar, line) {

}

window.onload = function () {
    let line = Line.createLine();
    let bar = Bar.createBar();
    init(getData(), bar, line);
    checkbox(bar, line);
    mouse(bar, line);
};