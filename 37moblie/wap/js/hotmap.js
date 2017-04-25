//游乐设施
//游乐设施
    mui("#ylss").on('tap','area',function () {
        $(".showInfoBox").stop(true).hide();
        var _this = $(this);
        var coords = $(_this).attr('coords').split(',');

        var imgSrc=$(_this).attr('data-src');
        var id=$(_this).attr('data-id');
        
        var  bgC = "#17b8ee";
        if ($(_this).hasClass('bgCyellow')) {

           bgC = "#febe0e";
           $('.fa-caret-down').css('color', '#febe0e');
        }
         $('.fa-caret-down').css('color', bgC);
        $('.showInfoBox').css('background-color', bgC);
		
        var x = coords[0] - 83;
        var y = coords[1] - 172+251;
        var color = '#fff';
        if (_this.attr('color') != undefined) color = _this.attr('color');
        $("#ylss .showInfoBox h5").css('color', color).text(_this.attr('title'));
//      $(".showInfoBox img").attr('src', '../images/' + _this.attr('title') + '.jpg');
		$("#ylss .showInfoBox img").attr('src', imgSrc);
		$("#ylss .showInfoBox img").attr('data-id', id);

		$('#ylss .showInfoBox').children('.a-img-box').css('left','17px');
        //判断最右边距离右边太近的话 内容往左移动
        if(coords[0]==370){

			 $("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+1.65)+ 'rem', 'top': (y-192)/100  + 'rem' }).stop(true).show();
			 $('#ylss .showInfoBox').children('.a-img-box').css('left','1.25rem');
			 
		}else if(coords[0]==140){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+1.5)+ 'rem', 'top': (y-162)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==75){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+1)+ 'rem', 'top': (y-192)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==145){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+1.50)+ 'rem', 'top': (y-192)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==18){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+0.7)+ 'rem', 'top': (y-205)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==221){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+1.9)+ 'rem', 'top': (y-162)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==30){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+0.73)+ 'rem', 'top': (y-182)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==218){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+1.85)+ 'rem', 'top': (y-192)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==255){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.2)+ 'rem', 'top': (y-242)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==207){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+1.75)+ 'rem', 'top': (y-205)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==375){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.5)+ 'rem', 'top': (y-210)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==242||coords[0]==253){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.35)+ 'rem', 'top': (y-220)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==240){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+1.95)+ 'rem', 'top': (y-208)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==300){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.65)+ 'rem', 'top': (y-190)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==325){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.25)+ 'rem', 'top': (y-220)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==295){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.45)+ 'rem', 'top': (y-210)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==273){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.35)+ 'rem', 'top': (y-210)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==261){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.1)+ 'rem', 'top': (y-205)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==35){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+0.73)+ 'rem', 'top': (y-162)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==305){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.4)+ 'rem', 'top': (y-212)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==327){
			$('#ylss .showInfoBox').children('.a-img-box').css('left','1.15rem');
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2)+ 'rem', 'top': (y-222)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==290){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+2.48)+ 'rem', 'top': (y-235)/100  + 'rem' }).stop(true).show();
		}else if(coords[0]==223){
			$("#ylss .showInfoBox").attr('code', _this.attr('code')).css({ 'left': (x/100+1.9)+ 'rem', 'top': (y-205)/100  + 'rem' }).stop(true).show();
		}
        
		
		
    });
    mui(".topNav").on('tap','.indexTips',function () {
    	$("#ylss .showInfoBox").stop(true).hide();
    })
//室内项目    
//室外项目
 mui("#roomOut").on('tap','area',function () {
        var _this = $(this);
        var coords = $(_this).attr('coords').split(',');
        var imgSrc=$(_this).attr('data-src');
        var id=$(_this).attr('data-id');
        console.log(imgSrc);
        var x = coords[0] - 83;
        var y = coords[1] - 172+220;
        var color = '#fff';
        if (_this.attr('color') != undefined) color = _this.attr('color');
        $("#roomOut .showInfoBox h5").css('color', color).text(_this.attr('title'));
		$("#roomOut .showInfoBox img").attr('src', imgSrc);
		$("#roomOut .showInfoBox img").attr('data-id', id);
        $("#roomOut .showInfoBox").attr('code', _this.attr('code')).css({ 'left': x+62+ 'px', 'top': y-165 + 'px' }).stop(true).show();
    });
    
    $('.showInfoBox').mouseleave(function(){
    	 $(".showInfoBox").stop(true).hide();
    })
 mui("#roomIn").on('tap','area',function () {
        $("#roomOut .showInfoBox").stop(true).hide();
        var _this = $(this);
        var coords = $(_this).attr('coords').split(',');
        var imgSrc=$(_this).attr('data-src');
        var id=$(_this).attr('data-id');
        var x = coords[0] - 83;
        var y = coords[1] - 172+220;
        var color = '#fff';
        if (_this.attr('color') != undefined) color = _this.attr('color');
        $("#roomIn .showInfoBox h5").css('color', color).text(_this.attr('title'));
		$("#roomIn .showInfoBox img").attr('src', imgSrc);
		$("#roomIn .showInfoBox img").attr('data-id', id);
        $("#roomIn .showInfoBox").attr('code', _this.attr('code')).css({ 'left': x+62+ 'px', 'top': y-165 + 'px' }).stop(true).show();
   });
    $('.showInfoBox').mouseleave(function(){
    	 $(".showInfoBox").stop(true).hide();
    })
    mui(".showInfoBox").on('tap','img',function(){
		var id = $(this).attr("data-id");
		var url=rootPath+"/wap/info/projectDetail.mvc?id="+id;
		 mui.openWindow({
			 url:url,
		    url:url
		  });
	})
