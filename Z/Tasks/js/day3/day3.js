const one = document.querySelector(".AppHeader-inner");
const two = document.querySelector(".PageHeader");
const input = document.querySelector(".Input-wrapper");
const search = document.querySelector(".Input");
let scrollFunc = function (e) {
    if (e.wheelDelta > 0) {
        one.style.display = "flex";
        two.style.display = "none";
    }
    if (e.wheelDelta < 0) {
        one.style.display = "none";
        two.style.display = "block";
    }
};

window.onmousewheel = scrollFunc;
window.onload = function () {
    search.onfocus = function () {
        input.classList.add("is-focus");
        input.classList.add("SearchBar-focusedInput");
    };
    search.onblur = function () {
        input.classList.remove("is-focus");
        input.classList.remove("SearchBar-focusedInput");
    };
};