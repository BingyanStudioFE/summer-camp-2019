function mergeCell(start, col) {
    let tab = document.getElementById("table");
    for (let i = start; i < tab.rows.length - 1; i++) {
        if (tab.rows[start].cells[col].innerHTML === tab.rows[i + 1].cells[0].innerHTML) {
            tab.rows[i + 1].cells[col].style.display = "none";
            tab.rows[start].cells[col].rowSpan += 1;
        } else {
            mergeCell(i + 1, 0);
        }
    }
}

function selectCol(region, product) {
    let table = document.getElementById("table");
    let regSel = region.querySelectorAll("input[checkbox-type='single']");
    let proSel = product.querySelectorAll("input[checkbox-type='single']");
    let regSelNum = getNum(proSel);
    let proSelNum = getNum(regSel);
    if (regSelNum === 1 && proSelNum !== 1) {
        for (let i = 0; i < table.rows.length; i++) {
            [table.rows[i].cells[0].innerHTML, table.rows[i].cells[1].innerHTML] = [table.rows[i].cells[1].innerHTML, table.rows[i].cells[0].innerHTML]
        }
    }
}

function renderThead() {
    let thead = document.createElement("tr");
    thead.innerHTML = `
		<th>商品</th>
		<th>地区</th>
		<th>1月</th>
		<th>2月</th>
		<th>3月</th>
		<th>4月</th>
		<th>5月</th>
		<th>6月</th>
		<th>7月</th>
		<th>8月</th>
		<th>9月</th>
		<th>10月</th>
		<th>11月</th>
		<th>12月</th>
	`;
    return thead;
}

function renderBody(table, data) {
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        for (key in data[i]) {
            if (data[i].hasOwnProperty(key)) {
                if (!Array.isArray(data[i][key])) {
                    let td = document.createElement("td");
                    td.innerHTML = data[i][key];
                    tr.appendChild(td);
                } else {
                    for (let k = 0; k < data[i][key].length; k++) {
                        let td = document.createElement("td");
                        td.innerHTML = data[i][key][k];
                        td.setAttribute("ball.html", k);
                        tr.appendChild(td);
                    }
                }
            }
        }
        table.appendChild(tr);
    }
}

function renderTable(container, data) {
    const region = document.getElementById("region-radio-wrapper");
    const product = document.getElementById("product-radio-wrapper");
    let table = document.createElement("table");
    table.setAttribute("id", "table");
    table.appendChild(renderThead());
    renderBody(table, data);
    if (document.querySelector(".editable")) {
        table.setAttribute("class", "editable");
    }
    container.innerHTML = "";
    container.appendChild(table);
    selectCol(region, product);
    mergeCell(1, 0);
}



