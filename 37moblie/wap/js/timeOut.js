//倒计时
function time(id,txt){
var oBox=document.getElementById(id);
oBox.onclick=function(event) {
 timeOutt()
}
var t=60;
function timeOutt(i){
    var oBox=document.getElementById(id);
    if(t==0){
        oBox.removeAttribute("disabled");
        oBox.innerHTML=txt;
        t=60;
        return false;
    }else{
        oBox.setAttribute("disabled",true);
        oBox.innerHTML="" + t + "s重新获取"; 
        t--;
    }
    setTimeout(function(){ 
        timeOutt(i)
       },1000) 
}
}