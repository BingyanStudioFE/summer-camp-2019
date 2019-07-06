document.querySelector("#region-select").onchange = function(event) {
    createForm(getSelectedRegionData());
};
function getSelectedRegionData() {
    let region, index;
    index = document.querySelector("#region-select").selectedIndex;
    region = document.querySelector("#region-select").options[index].value;
    return sourceData.filter(function (item) {
        return item.region === region;
    });
}
function createForm(data) {
    var tableHTML, row, val;
    tableHTML = '';
    tableHTML += '<table>';
    tableHTML += '<tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th>';
    tableHTML += '<th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>';
    for (let i = 0; i < data.length; i++) {
        row = '<tr>';
        val = [];
        val = flatten2d(Object.values(data[i]));
        for (let j = 0; j < val.length; j++) {
            row += '<td>' + val[j] + '</td>';
        }
        row += '</tr>';
        tableHTML += row;
    }
    tableHTML += '</table>';
    document.querySelector("#table-wrapper").innerHTML = tableHTML;
}
function flatten2d(a) {
    var res,
        i;
    res = [];
    for (i = 0; i < a.length; i++) {
        res = res.concat(a[i]);
    }
    return res;
}