# 输入框事件监听：keydown、keyup、input

当输入框的值发生变化时，我们可以通过keydown、keyup、input、onchange、blur事件观察到其值的变化，但它们的应用时机与应用场景存在显著的差异。

## 1. 实时观察

需要观察到用户每次键盘输入的变化，必须要用keydown、keyup与input，onchange与blur无效。在这其中，keyup与input都能及时获取到用户输入的全值，而keydown不会将当前的键值计入到输入框的值中，示例如下：

```javascript
//  假定页面存在如下元素
//  <input type="text" id="username">
//  注册input事件
username.addEventListener("input", function(event) {
    result.push({
        event  : 'input',
        value  : this.value,
        keyCode : event.keyCode
    });
})
//  注册keydown事件
username.addEventListener("keydown", function(event) {
    result.push({
        event  : 'keydown',
        value  : this.value,
        keyCode : event.keyCode
    });
});
//  注册keyup事件
username.addEventListener("keyup", function(event) {
    result.push({
        event  : 'keyup',
        value  : this.value,
        keyCode : event.keyCode
    });
});
//  注册change事件
username.addEventListener("change", function(event) {
    result.push({
        event  : 'change',
        value  : this.value,
        keyCode : event.keyCode
    });
    //  输出结果
    console.table(result);
});
//  注册blur事件
username.addEventListener("blur", function(event) {
    result.push({
        event  : 'blur',
        value  : this.value,
        keyCode : event.keyCode
    });
    //  输出结果
    console.table(result);
})12345678910111213141516171819202122232425262728293031323334353637383940414243444546
```

聚焦到输入框中，依次输入“abc”，最后控制台的输出结果如下图所示。 
![事件输出结果](https://img-blog.csdn.net/20160830184249067)
从图中可以看出如下结论： 
\1. keydown事件发生时，输入值并没有发生变化，所以keydown可用于阻止某些输入字符的显示。 
\2. input事件发生时，无法获取到keyCode值，并且紧随在keydown事件之后。 
\3. keyup事件最后发生，一次键盘敲入事件彻底完成。 
\4. change事件只会发生在输入完成后，也就是输入框失去焦点之前。

## 2. 输入完成后观察

当用户完成所有的输入时，这时候必定会发生blur事件，只有这时才会触发change，所以可用blur与change监听用户输入是否完成，输入框的验证多半发生在此时。

## 3. 输入事件流

输入框发生的事件流程依次为focus、keydown、input、keyup、change与blur，见下图所示。 
               ![输入事件流](https://img-blog.csdn.net/20160830184316707)