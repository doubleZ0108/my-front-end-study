window.onload=function () {
    document.getElementById("innerHTML").innerHTML="这里是使用innHTML修改的元素";
}

function btnClick() {
    document.write("我是在HTML文档完全加载后使用document.write()方法构建的内容");
}

function alertClick() {
    window.alert("警告框⚠️中的内容");
}