function loginType(){
	mui('.loginUser p').on('tap','em',function(){			
		if($(this).hasClass('phone')){
			$(this).html('手机动态码登录')
			$(this).removeClass('phone');
			$('.changeCont .span').eq(0).addClass('contShow');
			$('.changeCont .span').eq(1).removeClass('contShow');
			$("#loginType").val("1");
		}else{
			$(this).html('普通方式登录')
			$(this).addClass('phone');
			$('.changeCont .span').eq(0).removeClass('contShow');
			$('.changeCont .span').eq(1).addClass('contShow');
			$("#loginType").val("2");
		}
		
		
		
	})
}

//倒计时
function time(id,txt){
var oBox=document.getElementById(id);
oBox.onclick=function(event) {

var mobileNo =$("#mobileNo").val();
if(null==mobileNo||''==mobileNo||mobileNo.length!=11){
	 mui.alert("请输入正确手机号");
	 return;
}
var isGo = false;
//发送验证
$.ajax({
		type : "POST",
		url  : rootPath+"/front/sendLoginSms.mvc" ,
		async :false,
		data : {mobileNo:mobileNo},
		success: function(msg){
			msg = eval("("+msg+")");
			if(msg.result=='success'){
				timeOutt()	;
			}else{
				mui.alert(msg.result);
			}
		},
		error:function(msg){
		}
	});
}
var t=60;
function timeOutt(){
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
      timeOutt()
     },1000) 
}
}

mui('.loginUser').on('tap','.loginIn',function(){			
	submitForm();
})

function submitForm(){
	var mobileNo = $("#mobileNo").val();
	var userPwd = $("#userPwd").val();
	var loginType = $("input[name='loginType']").val();
	var smsCode = $("#smsCode").val();
	
	if(null==mobileNo||''==mobileNo){
		mui.alert('请输入手机号!');
		return false;
	}
	if(loginType=='1'){
		if(null==userPwd||''==userPwd){
			mui.alert('请输入密码!');
			return false;
		}
	}else{
		if(null==smsCode||''==smsCode){
			mui.alert('请输入短信验证码!');
			return false;
		}
	}
	
	$("#loginForm").submit();
}
