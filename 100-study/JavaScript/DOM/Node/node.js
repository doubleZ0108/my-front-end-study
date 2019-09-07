window.onload = function () {


};

/*指定在某个儿子元素之前插入*/
function insertBefore_btnClick() {
    let container = document.getElementById('container');
    let child = document.getElementById('child');
    let para = document.createElement('p');
    let node = document.createTextNode('这里是插在最前的文本');

    para.appendChild(node);
    container.insertBefore(para, child);
}

/*追加新元素作为父元素的最后一个子*/
function appendChild_btnClick(){
    let container = document.getElementById('container');
    let para = document.createElement('p');
    let node = document.createTextNode('这里是插在最后的文本');

    para.appendChild(node);
    container.appendChild(para);
}

/*删除第一个子*/
function removefirstChild_btnClick() {
    let container = document.getElementById('container');
    let firstChild = container.firstChild;

    console.log(container);
    console.log(firstChild);

    container.removeChild(firstChild);
}

/*删除最后一个子*/
function removelastChild_btnClick() {
    let container = document.getElementById('container');
    let lastChild = container.lastChild;

    container.removeChild(lastChild);
}

/*通过自己找到父节点并删除自己*/
//不可以在不引用父节点的情况下删除该元素
function removebyitself_btnClick() {
    let child = document.getElementById('container');
    let parent = child.parentNode;

    parent.removeChild(child);
}

/*替换最后一个子*/
function replacelastChild_btnClick() {
    let container = document.getElementById('container');
    let lastChild = container.lastChild;
    let newpara = document.createElement('p');
    let node = document.createTextNode('这里是替换的新文本');

    newpara.appendChild(node);
    container.replaceChild(newpara,lastChild);
}
