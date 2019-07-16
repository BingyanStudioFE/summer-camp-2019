function getData() {
    const selected = document.querySelectorAll("input[checkbox-type='single']");
    let selectedList = [];
    let dataList = [];
    let data = getLocalStorage();
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].checked) {
            selectedList.push(selected[i].value);
        }
    }
    for (let i = 0; i < data.length; i++) {
        if (selectedList.indexOf(data[i].region) !== -1 && selectedList.indexOf(data[i].product) !== -1) {
            dataList.push(data[i]);
        }
    }
    return dataList;
}

function getNum(checkBox) {
    let num = 0;
    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            num++;
        }
    }
    return num;
}

function getTr(parent) {
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
    return newData;
}

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
