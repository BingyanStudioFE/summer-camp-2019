document.getElementsByClassName('search-button')[0].addEventListener("click", searchGoods);//给搜索按钮添加事件响应函数
document.getElementById('menu-button').addEventListener("mouseenter", goodsMenuOn);
document.getElementsByClassName('goods-menu')[0].addEventListener("mouseleave", goodsMenuOff);
for(let i=1;i<10;i++){
    let id = 'category'+i;
    let item = document.getElementById(id);
    item.addEventListener("click",() => displayCategory(item));
}
function searchGoods() {//商城首页搜索框的响应函数
    var input = document.getElementById('search-input').value;
    var getData = '?page=0&limit=1000&category=0&keyword=' + input;
    var data = getGoods(getData);
    var content = document.getElementsByClassName('main-page')[0];
    for (var i = 0; i < data.length; i++) {
        let newNode = document.createElement('div');
        newNode.class = 'goods-panel';
        newNode.id = 'goods' + data[i].id;
        newNode.category = data[i].category;
        let title = document.createElement('h3');
        title.innerHTML = data[i].title;
        let price = document.createElement('p');
        price.innerHTML = data[i].price;
        let image = document.createElement('img');
        image.src = data[i].picture;
        newNode.appendChild(image);
        newNode.appendChild(title);
        newNode.appendChild(price);
        content.appendChild(newNode);
    }
}
function loadMainPage() {
    var getData = '?page=0&limit=1000&category=0&keyword=';
    getGoods(getData);
    var data = goodsList;
    var content = document.getElementsByClassName('main-page')[0];
    for (var i = 0; i < data.length; i++) {
        let newNode = document.createElement('div');
        newNode.class = 'goods-panel';
        newNode.id = 'goods' + data[i].id;
        newNode.category = data[i].category;
        let title = document.createElement('h3');
        title.innerHTML = data[i].title;
        let price = document.createElement('p');
        price.innerHTML = data[i].price;
        let image = document.createElement('img');
        image.src = data[i].picture;
        newNode.appendChild(image);
        newNode.appendChild(title);
        newNode.appendChild(price);
        content.appendChild(newNode);
    }
}
function goodsMenuOn() {
    /* var exist = document.getElementsByClassName('goods-menu')[0].getElementsByTagName('ul');
    if (exist.length === 0) {
        var category = ['电子设备', '书籍资料', '宿舍百货', '美妆护肤', '女装', '男装', '鞋帽配饰', '门票卡券', '其他'];//九类
        var content = document.createElement('ul');

        for (let i = 0; i < 9; i++) {
            let item = document.createElement('div');
            item.innerHTML = category[i];
            item.id = 'category' + i;
            item.class = 'drop-list-item';
            item.style = 'width: 110px;height: 40px;text-align: center;';
            item.addEventListener('click',() => displayCategory(item));
            content.appendChild(item);
        }
        //content.class = 'drop-list';
        content.style = 'width:110px;height:360px;position:relative;margin: 0px;padding: 0px;background: #3498DB';
        document.getElementsByClassName('goods-menu')[0].appendChild(content);
    } */
    document.getElementsByClassName('drop-list')[0].style = 'display:block';
}
function goodsMenuOff() {
    /* var parent = document.getElementsByClassName('goods-menu')[0];
    if (parent.childElementCount > 1) {
        parent.removeChild(parent.lastChild);
    } */
    document.getElementsByClassName('drop-list')[0].style = 'display:none';
}
var currentPosition = 0;//document.documentElement.scrollTop || document.body.scrollTop;
var timer;
function displayCategory(category) {
    //var id = 'category' + category;
    var id = 'goods-panel-'+category.id;
    var targetDiv = document.getElementById(id);
    if (targetDiv === null) {
        //这个种类商品还没加载出来，就往下滚
        //TODO
        window.scrollTo(0,currentPosition);
        currentPosition += 100;
        timer = setInterval("displayCategory("+category+")",10);
    } else {
        var e = targetDiv;
        var objHeight = obj.offsetTop;
        while (e = e.offsetParent) {
            objHeight += e.offsetTop;
        }
        //objHeight拿到了目标div距页面顶端的高度
        window.scrollTo(0,objHeight);
        currentPosition = 0;
        clearInterval(timer);
    }
}
function getGoods(getData) {//向后台请求商品信息的函数
    var url = 'http://47.103.112.154:9090/commodities';
    url += getData;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {//成功，通过responseText拿回响应的文本；
                var success = JSON.parse(xhr.responseText).success;
                if (success === true) {
                    goodsList = JSON.parse(xhr.responseText).data;
                    var data = goodsList;
                    var content = document.getElementsByClassName('main-page')[0];
                    for (var i = 0; i < data.length; i++) {
                        let newNode = document.createElement('div');
                        newNode.class = 'goods-panel';
                        newNode.id = 'goods' + data[i].Id;
                        newNode.category = data[i].Category;
                        let title = document.createElement('h3');
                        title.innerHTML = data[i].Title;
                        let price = document.createElement('p');
                        price.innerHTML = '$'+ data[i].Price;
                        let image = document.createElement('img');
                        image.src = data[i].Picture;
                        newNode.appendChild(image);
                        newNode.appendChild(title);
                        newNode.appendChild(price);
                        content.appendChild(newNode);
                    }
                    content.append('  <link rel="stylesheet" href="./css/index.css" type="text/css">');
                    /* function reaturnData() {
                        var data = JSON.parse(xhr.responseText).data;
                        return data;
                    }
                    return reaturnData; */
                } else if (success === false) {
                    /* let error = JSON.parse(xhr.responseText).error;
                    alert(error);
                    return null; */
                }
            }
        }
    }
    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization','Bearer '+token);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(null);

    // return xhr.onreadystatechange;
}
function jumpRegister() {
    document.getElementById('app').style = 'display:none';
    document.getElementsByClassName('register')[0].style = 'display:block';
}