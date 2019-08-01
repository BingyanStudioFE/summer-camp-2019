/* menuFixed = function(classname) {
    window.onscroll = function() {
        var obj = document.getElementsByClassName(classname)[0];
        var objHeight = obj.offsetTop;
        var scrollTop = document.documentElement.offsetTop || document.body.offsetTop;
        if(scrollTop < objHeight) {
            obj.style.position = 'relative';
        } else {
            boj.style.position = 'fixed';
        }
    }
} */
var menuFixed=function(obj) {
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
  }

  //export default menuFixed;