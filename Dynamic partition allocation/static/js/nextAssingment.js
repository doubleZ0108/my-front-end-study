function nextAssignment(){
    console.log('click...')
    var Mem = document.getElementById('memory');

    var proj = document.createElement("proj")
    proj.type = "div";
    proj.classname = "memory-proj";
    proj.style.background = randomHexColor();
    proj.style.height = "98px";
    proj.style.width = "100px";

    Mem.appendChild(proj);
}

