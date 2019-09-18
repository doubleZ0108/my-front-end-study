/*读取服务器上.txt文件并动态填充（不刷新页面）*/
function btnClick() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);
        if(this.readyState==4 && this.status==200){
            document.getElementById('container').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt",true);
    xhttp.send();
}
