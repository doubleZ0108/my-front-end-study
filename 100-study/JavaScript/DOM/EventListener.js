window.onload = function () {
    let x = document.getElementById('myp');

    x.addEventListener("mouseover", mypMOver);
    x.addEventListener("click", mypClick_first);
    x.addEventListener("click", mypClick_second);
    x.addEventListener("mouseout", mypMOut);


    /*调整浏览器大小时触发*/
    window.addEventListener("resize", function () {
        console.log('window resize...');
    });

};


/*添加多个事件处理程序*/
/*添加不同类型的事件*/
function mypMOver() {
    console.log('my p mouse over function');
}
function mypClick_first() {
    console.log('my p click first function');
}
function mypClick_second() {
    console.log('my p click second function');
}
function mypMOut() {
    console.log('my p mouse out function');
}


function btnClick() {
    //无法删除匿名函数指定的事件监听器，因为这两个参数是必须的
    document.getElementById('myp').removeEventListener("mouseover", mypMOver);
}
