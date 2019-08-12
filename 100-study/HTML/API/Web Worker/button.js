let w;

function startClick() {
    if(typeof(Worker) !== "undefined"){
        w = new Worker('static/js/WebWorker.js');

        w.onmessage = function (event) {
            document.getElementById('result').innerHTML = event.data;
        }
    }else{
        //不支持Web Worker
    }
}

function endClick() {
    w.terminate();
}