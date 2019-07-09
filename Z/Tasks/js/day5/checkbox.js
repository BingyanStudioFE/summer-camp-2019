function getNum(checkBox) {
    let num = 0;
    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            num++;
        }
    }
    return num;
}

function chooseCheckBox(wrapper) {
    const checkAll = wrapper.querySelector("input[checkbox-type = 'all']");
    const checkSingle = wrapper.querySelectorAll("input[checkbox-type = 'single']");
    wrapper.onclick = function (e) {
        if (e.target.getAttribute("type") === "checkbox") {
            let type = e.target.getAttribute("checkbox-type");
            if (type === "all") {
                if (checkAll.checked) {
                    for (let i = 0; i < checkSingle.length; i++) {
                        checkSingle[i].checked = true;
                    }
                } else {
                    for (let i = 0; i < checkSingle.length; i++) {
                        checkSingle[i].checked = false;
                    }
                }
            } else if (type === "single") {
                let num = getNum(checkSingle);
                if (num === checkSingle.length) {
                    checkAll.checked = true;
                } else if (num === 0) {
                    e.target.checked = true;
                } else {
                    checkAll.checked = false;
                }
            }
        }
    }
}