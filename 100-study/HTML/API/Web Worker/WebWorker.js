let i = 0;

function timeCounter() {
    i += 1;

    //向HTML页面传回一段消息
    postMessage(i);

    setTimeout("timeCounter()", 500);
}

timeCounter();