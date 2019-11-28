/*跳转界面并携带多个参数*/
function hrefHandle() {
    let user_info = 'xxx';
    let date_info = 'yyy';

    window.location.href="panorama.html?user="+user_info+"&date="+date_info;
}

/*在新界面解析url拿到参数*/
let href = window.location.href;
let user_index = href.indexOf("user=");
let date_index = href.indexOf("&date=");
let user_info = href.substring(user_index+5, date_index);
let date_info = href.substr(date_index+6);


/*HTML*/
<input type="button" onclick="hrefHandle();" value="跳转到全景界面" />
