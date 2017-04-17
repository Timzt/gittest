//	预约
		$('.city_Exibition .online-book').on('click', function() {
			$('#book_modal').modal();
		})
		//在线地图
		function openMap(mapid, obj){
			var url = '/Home/Gallery/map/id/point'+mapid+'.html';
			$('.city_Exibition span').removeClass('show');
			window.open(url);
		}
		//nanoScroller
		$('.nano').nanoScroller({
			preventPageScrolling: true
		});
		$('.city_Exibition span').toggle(function() {
			$('.city_Exibition span').removeClass('show');
			$(this).addClass('show')
		}, function() {
			$(this).removeClass('show')
		});
	    $('.city-desc .sub-s li').on('click', function(){
	    	$('.sub-s li').attr("class", "");
	        $(this).attr("class", "active");
	    })
	    /* 点击电话预约时，将内容赋值到模态框*/
		$('.book-box .phone-book').on('click', function() {
			var obj = $(this).parents('li');
			var title = obj.find('.tit').html();
			var address = obj.find('.address').html();
			var tel= obj.find('.book-line').html();
			tel = tel.replace('预约电话：',' ');
			$('#phone_modal').find('.title').html(title);
			$('#phone_modal').find('.address').html(address);
			$('#phone_modal').find('.tel').html(tel);
			$('#phone_modal').modal();
		})
		//预约弹框 内选择城市
		$('.form-book select').select2({
			minimumResultsForSearch: Infinity
		});
		//选中城市地址加√
		function getMyGallery(){
			$('.city-desc .sub-s li').on('click', function(){
				$('.sub-s li').attr("class", "");
				$(this).attr("class", "active");
				var id = $(this).attr('id');
				$('#exhibition').val(id);
			});
		}
//		//城市关联
//		$('#province').on('change', function() {
//			var select_val = $(this).children('option:selected').val();
//			$.ajax({
//				type : "POST",
//				url : '/index.php?s=/Home/Book/getArea/act/p/id/'+ select_val +'.html',
//				dataType:"json",
//				success : function (data) {
//					$("#select2-select_city-container").html('请选择城市');
//					$("#select_city option[value='0']").attr("selected",true);
//					//alert('');
//					$('#select_city').html(data.city);
//					
//					
//					$('#gallerys').html(data.gallery);
//					getMyGallery();
//				}
//			});
//		});
		$('#book').on('click', function() {
			$.ajax({
				type : "POST",
				url : '/index.php?s=/Home/Book/add.html',
				data:$("#form1").serialize(),
				dataType:"json",
				success : function (data) {
					alert(data.title);
					if(data.id > 0){
						$("#scm").attr("src" , data.url);
					}
				}
			});
			
		});
		$('#select_city').on('change', function() {
			var select_val = $(this).children('option:selected').val();
			$.ajax({
				type : "POST",
				url : '/index.php?s=/Home/Book/getArea/act/c/id/'+ select_val +'.html',
				dataType:"json",
				success : function (data) {
					$("#select2-select_area-container").html('请选择城市');
					$('#select_area').html(data.city);
					
					$('#gallerys').html(data.gallery);
					getMyGallery();
				}
			});
		});
		$(function(){
			var select_val = $('#select_city').val();
			$.ajax({
				type : "POST",
				url : '/index.php?s=/Home/Book/getArea/act/c/id/'+ select_val +'.html',
				dataType:"json",
				success : function (data) {
					$("#select2-select_area-container").html('请选择城市');
					$('#select_area').html(data.city);
	
					$('#gallerys').html(data.gallery);
					getMyGallery();
				}
			});
		})