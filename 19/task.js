/**
 * 获取几个按钮和输入框并定义数组
 */
var inputNum = document.getElementById("input-num"),
    leftIn = document.getElementById("left-in"),
    rightIn = document.getElementById("right-in"),
    leftOut = document.getElementById("left-out"),
    rightOut = document.getElementById("right-out"),
    arrShow = document.getElementById("arr-show"),
    arr = [30,20,10],
    spanNode = document.getElementsByTagName('span');


/**
 * 失焦的时候，就判断
 */
function checkValue() {
    if (inputNum.value < 10 || inputNum.value > 100) {
        alert("请输入10-100的数字");
        return false;
    }
}


/**
 * 数组渲染
 */
function showArr() {
    var str = "";
    arr.forEach(function(e) {
        str += "<span data-height='" + e + "'> </span>"
    });
    arrShow.innerHTML = str;
    for (var i = 0; i < spanNode.length; i++) {
        height = spanNode[i].getAttribute("data-height");
        spanNode[i].style.height = 2.5*height + "px";
        spanNode[i].style.marginTop = (300-2.5*height)+"px";
    }
}

function clickRemove() {
    var str = "";
}
/**
 * 添加左侧入事件
 */
function putLeftIn() {
    if (inputNum.value == "") {
        return false;
    } else if (inputNum.value < 10 || inputNum.value > 100) {
        alert("请输入10-100的数字");
        inputNum.value = null;
        return false;
    } else if (arr.length >= 60) {
        alert(inputNum.value);
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
    } else if (inputNum.value < 10 || inputNum.value > 100) {
        alert("请输入10-100的数字");
        inputNum.value = null;
        return false;
    } else if (arr.length >= 60) {
        alert(inputNum.value);
    } else {
        arr.push(inputNum.value);
        showArr();
        inputNum.value = null;
    }
}
rightIn.addEventListener("click", putRightIn);

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
leftOut.addEventListener("click", putLeftOut);


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
rightOut.addEventListener("click", putRightOut);

window.onload = function(){
  showArr();
}

/**
 * 保存每个排序过一次后的数组
 */
   var arrList = [];
function maopao(arr){
    var tmp,i,j;
    for(i=0;i<arr.length;i++){
      for(j=arr.length-1;j>i;j--){
       if(arr[j]<arr[j-1]){
          tmp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = tmp;
             for(var ii=0;ii<arr.length;ii++){
               arrList.push(arr[ii]);
             }
        }
      }
    }
}
maopao(arr);
//console.log(arrList);
