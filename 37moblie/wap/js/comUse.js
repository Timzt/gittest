//最新咨询 回到顶部
function backdTop(id) {
	//回到顶部
	var pullrefresh = document.getElementById(id);
	var startX, //触摸时的坐标
		startY,
		x, //滑动的距离
		y;
	pullrefresh.addEventListener('touchstart', function(e) {
		var touch = e.targetTouches[0];
		startY = touch.pageY; //刚触摸时的坐标
	}, false);
	pullrefresh.addEventListener('touchmove', function(e) {
		var touch = e.changedTouches[0];
		Y = touch.pageY - startY; //滑动的距离    


	}, false);
	pullrefresh.addEventListener('touchend', function(e) {
		var touch = e.changedTouches[0];
		Y = touch.pageY - startY; //滑动的距离  
		if(Y < -40) {
			$("#backdTop").animate({
				opacity: 1
			})
		} else if(Y > -40) {
			$("#backdTop").animate({
				opacity: 0
			})
		}
	}, false);
}
//获取字覆盖线 left
function getLeft(cls1,cls2){
	var aWidth=$('.'+cls1+' '+cls2+'').width();
	var winWidth=$(window).width();
	var left=(winWidth-aWidth)/2;
	$('.'+cls1+' '+cls2+'').css('left',left);
}

//未登录弹框
function popupShows(DomId){
	$("#fade").css({display:"block",height:$(document).height()});
	$("#"+DomId).css({left:($("body").width()-$("#"+DomId).width())/2+"px",
					top:($(window).height()-$("#"+DomId).height())/2-10+"px",display:"block"});
	mui("#"+DomId+"").on('tap','.ClosesBtn',function(){
		$("#"+DomId).css("display","none");
		$("#fade").css("display","none");
    });
};
//新首页轮播 无小点有左右箭头
function BigBans(Bprevs,Bnexts,Bmains,Bbimgs){
		$(Bmains).hover(function(){
			$(Bprevs,Bnexts).fadeIn();
		},function(){ 
			$(Bprevs,Bnexts).fadeOut();
		});		
		$dragBln = false;		
		$(Bbimgs).touchSlider({ 
			flexible : true, 
			speed : 200,
			btn_prev : $(Bprevs),
			btn_next : $(Bnexts)
		});
		
		$(Bbimgs).bind("mousedown", function() {
			$dragBln = false;
		});		
		$(Bbimgs).bind("dragstart", function() {
			$dragBln = true;
		});				
		
		timer = setInterval(function(){
			$(Bnexts).click();
		}, 5000);//自动播放
		
		$(Bmains).hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				$(Bnexts).click();
			},5000);
		});
		
		$(Bbimgs).bind("touchstart",function(){
			clearInterval(timer);
		}).bind("touchend", function(){
			timer = setInterval(function(){
				$(Bnexts).click();
			}, 5000);
		});
		mui('.IndexBaner_Imgs').on('tap','#btn_next',function(){
			$(Bnexts).click();
		})
		mui('.IndexBaner_Imgs').on('tap','#btn_prev',function(){
			$(Bprevs).click();
		})
	}

