/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput = document.getElementById("aqi-city-input");
var valueInput = document.getElementById("aqi-value-input");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

  var city = cityInput.value.trim();
  var input = valueInput.value.trim();
  var re1 = /[A-Za-z\u4e00-\u9fa5]+/;
  var re2 = /\d+/;

  if(!re1.test(city)){
    alert("城市名必须为中英文字符");
    return ;
  }else if(!re2.test(input)){
    alert("空气质量指数必须为正整数");
    return ;
  }else {
        aqiData[city]= input;
        cityInput.value = null;
        valueInput.value = null;
  }

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var table = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
  for(var city in aqiData){
       table += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>";
  }

  document.getElementById("aqi-table").innerHTML = city ? table : "";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();

}

function init() {
  cityInput.value = null;
  valueInput.value = null;
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").addEventListener("click", addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById("aqi-table").addEventListener("click", function(event){
   if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle(event.target.dataset.city);
})
}

init();
