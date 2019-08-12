function allowDrop(e) {
    //默认：数据/元素速发被放置到其他元素中 -> 阻止默认方式
    e.preventDefault();
}

function drag(e) {
    //设置被拖动数的 数据类型 和 值
    e.dataTransfer.setData("her", e.target.id);
}

function drop(e) {
    //默认：浏览器会以链接形式打开 -> 阻止默认方式
    e.preventDefault();

    let data = e.dataTransfer.getData("her");

    e.target.appendChild(document.getElementById(data));        //实现效果类似于剪切，原位置图片消失
    // e.target.innerHTML = document.getElementById(data).outerHTML;    //实现效果类似于复制，原位置图片还在那
}