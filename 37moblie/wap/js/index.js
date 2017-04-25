

//首页公告 页面加载的时候添加样式
function advAddClass(){
	$('.advCont ul li').addClass('active');
}
//首页公告 点击公告的时候添加样式
function advClickClass(){
	mui('.advCont').on('tap','li',function(){
		$(this).addClass('activeTap').siblings().removeClass('activeTap');
		
	})
}