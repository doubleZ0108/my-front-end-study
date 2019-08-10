window.onload = function () {
    let rect_c = document.getElementById('RectCanvas');
    drawRectangle(rect_c)

    let line_c = document.getElementById('LineCanvas');
    drawLine(line_c);

    let circle_c = document.getElementById('CircleCanvas');
    drawCircle(circle_c);

    let shade_c = document.getElementById('ShadeCanvas');
    drawShade(shade_c);

    let img_c = document.getElementById('ImgCanvas');
    drawImg(img_c);
}

function drawRectangle(c) {
    let cxt = c.getContext("2d");   //创建context对象
    cxt.fillStyle = '#FF0000';
    cxt.fillRect(5,20,175,50);
}
function drawLine(c) {
    let cxt = c.getContext("2d");
    cxt.strokeStyle = '#ffc771';
    cxt.moveTo(20, 40);
    cxt.lineTo(300,150);
    cxt.lineTo(20,150);
    cxt.stroke();
}
function drawCircle(c) {
    let cxt = c.getContext('2d');
    cxt.fillStyle = '#f67eff';
    cxt.beginPath();
    cxt.arc(100,100, 40, 0,2*Math.PI, true);
    cxt.closePath();
    cxt.fill();

    cxt.strokeStyle = '#f67eff';
    cxt.beginPath();
    cxt.arc(300,100,40,0,2*Math.PI,true);
    cxt.closePath();
    cxt.stroke();
}
function drawShade(c) {
    let cxt = c.getContext('2d');
    let grd = cxt.createLinearGradient(20,40,300,150);
    grd.addColorStop(0,'#e72a23');
    grd.addColorStop(1,'#fff063');
    cxt.fillStyle = grd;
    cxt.fillRect(20,40,300,150);
}
function drawImg(c) {
    let cxt = c.getContext('2d');
    let img = new Image()
    img.src = '././Resources/img/icon.jpg';
    cxt.drawImage(img,0,0);
}