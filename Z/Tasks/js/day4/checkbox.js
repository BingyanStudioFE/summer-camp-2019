function chooseCheckBox(wrapper) {
    let checkAll = wrapper.querySelector("input[checkbox-type = 'all']");
    let child = wrapper.querySelectorAll("input[checkbox-type = 'single']");
    wrapper.onclick = function (e) {
        let target = e.target;
        if (target.getAttribute("type") === "checkbox") {
            let type = target.getAttribute("checkbox-type");
            if (type === "all") {
                for (let i = 0; i < child.length; i++) {
                    child[i].checked = true;
                }
            } else if (type === "single") {
                let num = 0;
                for (let i = 0; i < child.length; i++) {
                    if (child[i].checked) {
                        num++;
                    }
                }
                if (num === child.length) {
                    checkAll.checked = true;
                } else if (num === 0) {
                    target.checked = true;
                } else {
                    checkAll.checked = false;
                }
            }
        }
    }
}