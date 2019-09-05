function myAnimationStart() {
    let elem = document.getElementById('myanimation');
    let pos = 0;

    let myframe = setInterval(frame,5);
    function frame() {
        if(pos == 350){
            clearInterval(myframe);
        }
        else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
