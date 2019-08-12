window.onload = function () {
    let local_result = document.getElementById('local_result');
    let session_result = document.getElementById('session_result');

    if (typeof(Storage) !== "undefined"){
        localStore(local_result);

        sessionStore(session_result);
    }else{
        local_result.innerHTML = "Sorry, your browser do not support Local Storage";
        session_result.innerHTML = "Sorry, your browser do not support Local Storage";
    }
}

function localStore(result) {
    localStorage.setItem("localMess", "我是永久存储到本地的数据...");
    result.innerHTML = localStorage.getItem('localMess');
    result.innerHTML += '<br />';

    //也可以写成
    localStorage.localMess2 = "我是另一种方式永久存储到本地的数据...";
    result.innerHTML += localStorage.localMess2;
    result.innerHTML += '<br />';
}

function sessionStore(result) {
    sessionStorage.setItem('sessionMess', "我是当前会话存储到本地的数据...");
    result.innerHTML += sessionStorage.getItem('sessionMess');
    result.innerHTML += '<br />';

    //也可以写成
    sessionStorage.sessionMess2 = "我是另一种方式当前会话存储到本地的数据...";
    result.innerHTML += sessionStorage.sessionMess2;
    result.innerHTML += '<br />';
}