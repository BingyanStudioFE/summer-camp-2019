function getData() {
    let selected = document.querySelectorAll("input[checkbox-type='single']");
    let selectedList = [];
    let dataList = [];
    for (let i = 0; i < selected.length; i++) {
        if (selected[i].checked) {
            selectedList.push(selected[i].value);
        }
    }
    for (let i = 0; i < sourceData.length; i++) {
        if (selectedList.indexOf(sourceData[i].region) !== -1 && selectedList.indexOf(sourceData[i].product) !== -1) {
            dataList.push(sourceData[i]);
        }
    }
    return dataList;
}
