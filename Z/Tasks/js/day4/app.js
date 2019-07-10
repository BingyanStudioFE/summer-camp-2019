const tableWrapper = document.getElementById("table-wrapper");
const region = document.getElementById("region-radio-wrapper");
const product = document.getElementById("product-radio-wrapper");
const checkBox = document.querySelectorAll("input[type='checkbox'");

for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].checked = true;
}
renderTable(tableWrapper, getData());
chooseCheckBox(region);
chooseCheckBox(product);
drawBar(sourceData);

let array = [region, product];
for (let i = 0; i < 2; i++) {
    array[i].onchange = function () {
        let data = getData();
        drawBar(data);
        renderTable(tableWrapper, data);
    }
}
