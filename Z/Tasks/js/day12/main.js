function main() {
    let container = document.getElementById("container");
    let field = Factory.create("football-field", container);
    let footballer = Factory.create("footballer", field);
    field.drawItemOnField();
    footballer.runTo(100, 0)
}

addLoadEvent(main);