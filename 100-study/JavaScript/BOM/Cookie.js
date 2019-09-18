/*
 * 用户第一次访问该网站时要求他填写姓名
 * 之后他再访问同一页面，会收到欢迎信息
 */

window.onload = function () {
    checkCookie();
};

/*设置cookie*/
function setCookie(cname, cvalue,exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

/*获取cookie*/
function getCookie(cname) {
    let name = cname + '=';     //要搜索的文本

    let decodeCookie = decodeURIComponent(document.cookie);
    let carr = decodeCookie.split(';');

    for(let i=0;i<carr.length;i++){
        let c = carr[i];
        while (c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(name)==0){     //如果找到cookie
            return c.substring(name.length, c.length);  //返回cookie的值
        }
    }

    return "";
}

/*检测cookie*/
function checkCookie() {
    let username = getCookie("username");
    if(username != ""){
        alert('Welcome again ' + username);
    }else{
        username = prompt("Please enter your name: ","");
        if(username!="" && username!=null){
            setCookie("username",username,365);
        }
    }
}
