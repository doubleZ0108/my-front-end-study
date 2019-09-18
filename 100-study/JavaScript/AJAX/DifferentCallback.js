function btnClick() {
    ajaxLoad('1.txt', myfunc1);
    ajaxLoad('2.txt', myfunc2);
}

/*多个AJAX任务，每个任务的回掉函数不同*/
function ajaxLoad(url, func) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200){
            func(this);
        }
    };

    xhttp.open("GET",url,true);
    xhttp.send();
}

function myfunc1(xhttp) {
    console.log(xhttp.responseText);
}

function myfunc2(xhttp) {
    console.log(xhttp.responseText);
}
