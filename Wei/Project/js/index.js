//import menuFixed from './mobility'
console.log(menuFixed);
var obj = document.getElementsByClassName('header-nav');
/*     function menuFixed(obj) {
    var e = obj;
    var objHeight = obj.offsetTop;
    while (e = e.offsetParent) {
      objHeight += e.offsetTop;
    }
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop <= objHeight) {
      obj.style.position = "relative";
      obj.style.top = undefined;
    } else {
      obj.style.position = "fixed";
      obj.style.top = "0px";
    }
  } */
window.onload = function () {
    //loadMainPage();
    window.onscroll = function () {
    //menuFixed(obj[0]);
  }
}