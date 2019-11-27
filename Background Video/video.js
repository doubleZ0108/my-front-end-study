let video = document.getElementById('myvideo');
let title = document.getElementById('title');

video.onclick=function(){
    title.classList.add("show");
};

title.onclick=function(){
    setTimeout("window.location.href=\"login.html\" ",1000);
};

/*
 * 监听视频播放完毕事件
 * 播放完毕后添加元素所属的类，达到显示的效果
 * */
video.addEventListener('ended', function(){
    console.log("play end...");
    title.classList.add("show");
});

video.playbackRate = 1.5;       //播放速率
