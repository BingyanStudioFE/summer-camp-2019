function init(bar, line) {
    const region = document.getElementById("region-radio-wrapper");
    const product = document.getElementById("product-radio-wrapper");
    chooseCheckBox(region);
    chooseCheckBox(product);
    setCheckbox(getHash());
    renderAll(getData(), bar, line);
}

function checkboxListen(bar, line) {
    const checkboxWrapper = document.getElementById("checkbox-wrapper");
    checkboxWrapper.onchange = function () {
        renderHash();
        renderAll(getData(), bar, line);
    };
}

function mouseListen(bar, line) {
    const tableWrapper = document.getElementById("table-wrapper");
    tableWrapper.onmouseover = function (e) {
        if (e.target.nodeName === "TD") {
            let data = getTr(e.target.parentNode);
            renderGraph(data, bar, line);
        }
    };
    tableWrapper.onmouseout = function (e) {
        const obj = e.relatedTarget;
        const pa = this;
        if (pa.contains(obj)) {
            return false;
        } else {
            renderGraph(getData(), bar, line);
        }
    };
    tableWrapper.onclick = function (e) {
        if (e.target.nodeName === "TD" && !isNaN(e.target.innerHTML)) {
            if (document.querySelector(".editable")) {
                if (document.getElementById("editable")) {
                    let td = document.getElementById("editable");
                    removeInput(td);
                    addInput(e.target);
                } else {
                    addInput(e.target);
                }
                inputListen();
            }
        }
    };
}

function buttonListen(bar, line) {
    const init = document.getElementById("init");
    const edit = document.getElementById("edit");
    init.onclick = function () {
        initLocalStorage();
        renderAll(getData(), bar, line);
    };
    edit.onclick = function () {
        const table = document.getElementById("table");
        if (!document.querySelector(".editable")) {
            edit.innerHTML = "退出";
            table.setAttribute("class", "editable");
        } else {
            edit.innerHTML = "编辑";
            table.removeAttribute("class");
        }
    };
}

window.onload = function () {
    let line = Line.createLine();
    let bar = Bar.createBar();
    init(bar, line);
    checkboxListen(bar, line);
    mouseListen(bar, line);
    buttonListen(bar, line);
};