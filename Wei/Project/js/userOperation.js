document.getElementById('personal-message').addEventListener("click",gotoRegister);
function gotoRegister() {
    document.getElementById('app').style = 'display:none';
    document.getElementsByClassName('register')[0].style = 'display:block';
}
function register() {
    var form = document.getElementById('register-input');
    var useranme = form.elements[0].value;
    var password = form.elements[1].value;
    var nickname = form.elements[2].value;
    var mobile = form.elements[3].value;
    var email = form.elements[4].value;
    var postData = 'username=' + useranme + '&password=' + password + '&nickname=' + nickname + '&mobile=' + mobile + '&email=' + email;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {//成功，通过responseText拿回响应的文本；
            let str = JSON.parse(xhr.responseText).data;
            alert(str);
          var success = JSON.parse(xhr.responseText).success;
          if (success === true) {
            let str = JSON.parse(xhr.responseText).data;
            alert(str);
            //registerSuccess();
          } else if (success === false) {
            var error = xhr.responseText.error;
            //registerFailed(error);
          }
        }
      }
    }
    xhr.open('POST', 'http://47.103.112.154:9090/user');
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(postData);
  }
  function gotoLogin() {
    document.getElementsByClassName('register')[0].style = 'display:none';
    document.getElementsByClassName('login-page')[0].style = 'display:block';
  }
  function login() {
    var form = document.getElementById('login-input');
    var useranme = form.elements[0].value;
    var password = form.elements[1].value;
    var postData = 'username=' + useranme + '&password=' + password;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {//成功，通过responseText拿回响应的文本；
          var success = JSON.parse(xhr.responseText).success;
          if (success === true) {
            token = JSON.parse(xhr.responseText).data;
            alert(token);
            document.getElementsByClassName('login-page')[0].style = 'display:none';
            document.getElementById('app').style = 'display:block';
            loadMainPage();
          } else if (success === false) {
            var error = xhr.responseText.error;
            //registerFailed(error);
          }
        }
      }
    }
    xhr.open('POST', 'http://47.103.112.154:9090/user/login');
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(postData);
  }