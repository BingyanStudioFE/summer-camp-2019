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

function addInput(td) {
    let preNum = td.innerHTML;
    let input = document.createElement("input");
    input.type = "text";
    input.setAttribute("id", "input");
    input.value = preNum;
    let checkBtn = document.createElement("button");
    checkBtn.setAttribute("id", "check");
    checkBtn.innerHTML = "确定";
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.innerHTML = "取消";

    td.innerHTML = "";
    td.appendChild(input);
    td.appendChild(checkBtn);
    td.appendChild(deleteBtn);
    td.setAttribute("id", "editable");
    td.setAttribute("preNum", preNum);
    input.focus();
}

function removeInput(td) {
    td.innerHTML = td.getAttribute("preNum");
    td.removeAttribute("preNum");
    td.removeAttribute("id");
}

function updateData(td) {
    let input = document.getElementById("input");
    let num = input.value;
    if (!isNaN(num)) {
        td.innerHTML = num;
        td.removeAttribute("preNum");
        td.removeAttribute("id");
    } else {
        alert("Please input number!");
    }
}

function getTr(parent, bar, line) {
    let array = [];
    let newData = [];
    let data = getLocalStorage();
    for (let i = 0; i < 2; i++) {
        array.push(parent.childNodes[i].innerHTML);
    }
    for (let i = 0; i < data.length; i++) {
        if (array.indexOf(data[i].region) !== -1 && array.indexOf(data[i].product) !== -1) {
            newData.push(data[i]);
        }
    }
    renderGraph(newData, bar, line);
}

function beginListen() {
    let deleteBtn = document.getElementById("delete");
    let checkBtn = document.getElementById("check");
    let input = document.getElementById("input");
    deleteBtn.onclick = function (e) {
        removeInput(e.target.parentNode);
    };
    checkBtn.onclick = function (e) {
        updateData(e.target.parentNode);
    };
    input.onkeydown = function (e) {
        if (e.key === "Enter") {
            updateData(e.target.parentNode);
        } else if (e.key === "Escape") {
            removeInput(e.target.parentNode);
        }
    };
    input.onblur = function (e) {
        removeInput(e.target.parentNode);
    }
}

function mouse(bar, line) {
    const tableWrapper = document.getElementById("table-wrapper");
    tableWrapper.onmouseover = function (e) {
        if (e.target.nodeName === "TD") {
            getTr(e.target.parentNode, bar, line);
        }
    };
    tableWrapper.onmouseout = function () {
        renderGraph(getData(), bar, line);
    };
    tableWrapper.onclick = function (e) {
        if (e.target.nodeName === "TD") {
            if (document.getElementById("editable")) {
                let temp = document.getElementById("editable");
                removeInput(temp);
                addInput(e.target);
            } else {
                addInput(e.target);
            }
            beginListen();
        }
    };
}

function checkbox(bar, line) {
    const checkboxWrapper = document.getElementById("checkbox-wrapper");
    checkboxWrapper.onchange = function () {
        renderAll(getData(), bar, line);
    };
}

function init(bar, line) {
    const region = document.getElementById("region-radio-wrapper");
    const product = document.getElementById("product-radio-wrapper");
    chooseCheckBox(region);
    chooseCheckBox(product);
    data = getData();
    initLocalStorage();
    renderAll(data, bar, line);
}

window.onload = function () {
    let line = Line.createLine();
    let bar = Bar.createBar();
    init(bar, line);
    checkbox(bar, line);
    mouse(bar, line);
};