const KEY = "LOCAL_DATA";

function getLocalStorage() {
    return JSON.parse(localStorage.getItem(KEY));
}

function initLocalStorage() {
    if (!getLocalStorage()) {
        let data = sourceData.slice();
        localStorage.setItem(KEY, JSON.stringify(data));
    }
}

function updateLocalStorage(product, region, index, value) {
    let localData = getLocalStorage();
    for (let i = 0; i < localData.length; i++) {
        if (localData[i]["product"] === product && localData[i]["region"] === region) {
            localData[i]["sale"][index] = value;
            break;
        }
    }
    localStorage.setItem(KEY, JSON.stringify(localData));
}