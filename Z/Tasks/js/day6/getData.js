function getData() {
    let selected = document.querySelectorAll("input[checkbox-type='single']");
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
