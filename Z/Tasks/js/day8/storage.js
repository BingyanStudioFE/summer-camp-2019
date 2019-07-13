const KEY = "LOCAL_DATA";

function getLocalStorage() {
    return JSON.parse(localStorage.getItem(KEY));
}

function initLocalStorage() {
    let data = sourceData.slice();
    localStorage.setItem(KEY, JSON.stringify(data));
}

function updateLocalStorage(parent, index, value) {
    let localData = getLocalStorage();
    let array = [];
    for (let i = 0; i < 2; i++) {
        array.push(parent.childNodes[i].innerHTML);
    }
    for (let i = 0; i < localData.length; i++) {
        if (localData[i]["product"] === array[0] && localData[i]["region"] === array[1]) {
            localData[i]["sale"][index] = value;
            break;
        }
    }
    localStorage.setItem(KEY, JSON.stringify(localData));
}