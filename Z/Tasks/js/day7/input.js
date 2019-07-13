function addInput(td) {
    let preNum = td.innerHTML;
    let input = document.createElement("input");
    input.type = "text";
    input.setAttribute("id", "input");
    input.value = preNum;
    td.innerHTML = "";
    td.appendChild(input);
    td.setAttribute("id", "editable");
    td.setAttribute("preNum", preNum);
    input.focus();
}

function removeInput(td) {
    td.removeAttribute("preNum");
    td.removeAttribute("id");
}

function updateInput(td) {
    let num = td.firstChild.value;
    let index = td.getAttribute("ball.html");
    if (!isNaN(num)) {
        td.innerHTML = num;
        removeInput(td);
        updateLocalStorage(td.parentNode, index, num);
    } else {
        td.innerHTML = td.getAttribute("preNum");
        removeInput(td);
    }
}

function inputListen() {
    let input = document.getElementById("input");
    input.onkeydown = function (e) {
        if (e.key === "Enter") {
            input.blur();
        }
    };
    input.onblur = function (e) {
        updateInput(e.target.parentNode);
    }
}
