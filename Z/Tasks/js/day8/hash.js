function renderHash() {
    const selected = document.querySelectorAll("input[checkbox-type='single']");
    let selectedList = [];
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].checked) {
            selectedList.push(selected[i].value);
        }
    }
    let hash = "#" + selectedList.join(",");
    history.pushState(null, null, hash);
}

function getHash() {
    return decodeURI(location.hash).substring(1);
}

function setCheckbox(hash) {
    const selected = document.querySelectorAll("input[checkbox-type='single']");
    for (let i = 0; i < selected.length; i++) {
        if (hash.indexOf(selected[i].value) !== -1) {
            selected[i].checked = true;
        }
    }
}