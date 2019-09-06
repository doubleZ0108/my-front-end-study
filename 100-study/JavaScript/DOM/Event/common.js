/*页面加载/离开后*/
window.onload = function () {

};

window.onunload = function () {
    //alert('真的要退出么');  不会阻止用户退出
};


/*鼠标事件*/
function changeText(elem){
    elem.innerHTML = '被点击之后的文本';
}

function mymouseOver(elem){
    elem.style.backgroundColor = '#ADD8E6'
    elem.innerText = '🍒';
}
function mymouseOut(elem) {
    elem.style.backgroundColor = '#FFA07A'
    elem.innerText = '把鼠标移上来试试';
}


/*输入字段被改变时*/
function UpperCase(elem) {
    elem.value = elem.value.toUpperCase();
}


/*获得到焦点/失去焦点*/
function focusChange(elem, focus_flag) {
    if(focus_flag){
        elem.style.backgroundColor = 'lightpink';
    }else{
        elem.style.backgroundColor = 'white';
    }
}