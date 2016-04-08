/**
 * 获取几个按钮和输入框并定义数组
 */
var inputNum = document.getElementById("input-num"),
    leftIn = document.getElementById("left-in"),
    rightIn = document.getElementById("right-in"),
    leftOut = document.getElementById("left-out"),
    rightOut = document.getElementById("right-out"),
    arrShow = document.getElementById("arr-show"),
    arr = [];
var spanNode = document.getElementsByTagName('span');

/**
 * 数组渲染
 */
function showArr() {
    var str = "";
    arr.forEach(function(e) {
        str += "<span>" + e + "</span>"
    });
    arrShow.innerHTML = str;

}

function clickRemove(){
  var str = "";
}
/**
 * 添加左侧入事件
 */
function putLeftIn() {
    if (inputNum.value == "") {
        return false;
    } else {
        arr.unshift(inputNum.value);
        showArr();
        inputNum.value = null;
        clickRemove();
    }
}
leftIn.addEventListener("click", putLeftIn);


/**
 * 添加右侧入事件
 */
function putRightIn() {
    if (inputNum.value == "") {
        return false;
    } else {
        arr.push(inputNum.value);
        showArr();
        inputNum.value = null;
    }
}
rightIn.addEventListener("click",putRightIn);

/**
 * 添加左侧出事件
 */
function putLeftOut() {
    if (arr == "") {
        return false;
    } else {
        alert(arr.shift());
        showArr();
    }
}
leftOut.addEventListener("click",putLeftOut);


/**
 * 添加右侧出事件
 */
function putRightOut() {
    if (arr == "") {
        return false;
    } else {
        alert(arr.pop());
        showArr();
    }
}
rightOut.addEventListener("click",putRightOut);

/**
 * 尝试对每个节点添加点击删除事件
 */
document.getElementById('arr-show').addEventListener("click",function(e){
  if (e.target && e.target.nodeName.toUpperCase() == "SPAN"){
    var index = [].indexOf.call(e.target.parentNode.children,e.target);
    arr.splice(index,1);
    showArr();
  }
});
