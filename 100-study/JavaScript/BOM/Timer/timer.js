window.onload = function () {
    clocking();
};

function clocking() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let second = today.getSeconds();

    min = checkTime(min);
    second = checkTime(second);

    document.getElementById('clock').innerHTML = hour + ':' + min + ':' + second;
    let timer = setInterval(clocking, 1000);
}

function checkTime(time) {
    if(time<10){time = '0' + time;}
    return time;
}
function btnClick() {
    console.log('hello world');
}


function timeonBtnClick() {
    console.log(Date());
}

function timeoffBtnClick(){
    clearInterval(mytimer);
}
