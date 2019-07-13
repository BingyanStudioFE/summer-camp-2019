function renderAll(data, bar, line) {
    const tableWrapper = document.getElementById("table-wrapper");
    bar.drawBar(data);
    line.drawLine(data);
    renderTable(tableWrapper, data);
}

function renderGraph(data, bar, line) {
    bar.drawBar(data);
    line.drawLine(data);
}