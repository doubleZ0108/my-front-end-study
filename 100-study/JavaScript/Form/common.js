function myFormSubmit() {
    let name = document.forms['myForm']['myname'].value;
    if(name==''){
        alert('必须填写姓名.');
        return false;
    }

    console.log('姓名正确.');
}

function myFormSubmit2() {
    let num = document.forms['myForm2']['mynum'].value;
    if(isNaN(num) || num<1 || num>10){
        alert('输入的数字应为1～10');
    }
    else{
        console.log('数字正确.');
    }
}

function btnClick() {
    let numobj = document.getElementById('mynum2');

    if(!numobj.checkValidity()){
        alert(numobj.validationMessage);
    }
    else{
        console.log('数字正确.');
    }
}

function btnClick2() {
    let numobj = document.getElementById('mynum3');

    if(numobj.validity.rangeOverflow){
        alert('值太大');
    }
    else{
        console.log('数字正确.');
    }
}