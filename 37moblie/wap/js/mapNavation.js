 //线路切换
    mui(".ticketTitle").on('tap','span',function () {

        var index = $(".ticketTitle span").index(this);
        $(this).attr('id',index).siblings().attr('id','');
//上海科技馆  
        $(this).addClass('active2').siblings().removeClass('active2');
        $('#results').text('');

        
    });
 //交换查询值
 mui(".search-box").on('tap','a',function () {
        var prev = $('.contList .search-box .prev');
        var next = $('.contList .search-box .next');
        var prevVal = prev.val();
        var nextVal = next.val();
        next.val(prevVal);
        prev.val(nextVal);
    });

function mapNavation(){

mui(".search-box").on('tap','button',function (e) {
		$('#results span').addClass('active2');
		$('#results').css('display','block')

		var prevVal = $('.contList .search-box .prev').val();
		var nextVal = $('.contList .search-box .next').val();
		
		var index = $(".ticketTitle span.active2").attr('id');
		$('.menuTitle span').eq(1).addClass('active2').siblings().removeClass('active2');
		$('.resultChange .result').eq(1).show().siblings().hide();
		if (prevVal !== "" && nextVal !== "") {
				e.preventDefault()
		    
		    
		    if (index == 1)//公交路线搜索
		    {

		    	var map = new BMap.Map("baiduMap");//地图显示区域id  要加宽高
		    map.centerAndZoom(new BMap.Point(121.197905, 37.587861), 10);//让地图 可以全国范围查询
		    map.addControl(new BMap.NavigationControl());        // 添加平移缩放控件
				map.addControl(new BMap.ScaleControl());             // 添加比例尺控件
				map.addControl(new BMap.OverviewMapControl());       //添加缩略地图控件
				map.disable3DBuilding();
				
		        var transit = new BMap.TransitRoute(map, {
		            renderOptions: {map: map, panel: "results"},
		            onSearchComplete: function (results) {
		                if (transit.getStatus() == 3) {//状态3 是   输入的地址信息不正确
		                    $('#submitBtn').tooltip('show');
		                    $('#results').text('未找到输入的位置，请确定你输入的地址信息是否正确！');
		                    setTimeout(function () {
		                        $('#submitBtn').tooltip('destroy')
		                    }, 300)
		                }
		            }
		        });
		        transit.search(prevVal, nextVal);
		        return true;
		    }
		    if (index == 0) {//自驾游

		    	var map = new BMap.Map("baiduMap");//地图显示区域id  要加宽高
		    map.centerAndZoom(new BMap.Point(116.404, 39.915), 10);//让地图 可以全国范围查询
		    map.addControl(new BMap.NavigationControl());        // 添加平移缩放控件
				map.addControl(new BMap.ScaleControl());             // 添加比例尺控件
				map.addControl(new BMap.OverviewMapControl());       //添加缩略地图控件
				map.disable3DBuilding();
				
		        var driving = new BMap.DrivingRoute(map, {
		            renderOptions: {
		                map: map,
		                panel: "results",
		                autoViewport: true,
            			  enableDragging : true //起终点可进行拖拽
		            },
		            onSearchComplete: function (results) {
		                if (driving.getStatus() == 3) {//状态3 是   输入的地址信息不正确
		                    $('#submitBtn').tooltip('show');
		                    $('#results').text('未找到输入的位置，请确定你输入的地址信息是否正确！');
		                    setTimeout(function () {
		                        $('#submitBtn').tooltip('destroy')
		                        }, 1000)
		                    }
		                }
		            });
		            driving.search(prevVal, nextVal);
		        }
		        return true;
		    }
		})
} 
//结果切换   
function resultChange(clsIndex){
	 mui('.'+clsIndex+'').on('tap','span',function () {

		var index=$('.'+clsIndex+' span').index(this);
		
		$(this).addClass('active2').siblings().removeClass('active2');
		
		$(this).parents('.routineChange').children('.resultChange').children('.result').eq(index).css('display','block')
		.siblings().css('display','none')
		
	})
}