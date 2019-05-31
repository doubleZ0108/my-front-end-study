function clearbtnClick(){
    console.log('clear...')
    var Mem = document.getElementById('memory');
    while(Mem.hasChildNodes()){
        Mem.removeChild(Mem.firstChild)
    }
}