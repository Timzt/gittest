//园区介绍 顶部标题切换
function parkTitClick() {
	var oSize = $('.parkTit span').size();
	if(oSize == 2) {

		$('.parkTit span:nth-child(2)').animate({
			marginRight: 0 + '%'
		}, 150)
		$('.parkTit span').animate({
			width: 49 + '%'
		}, 150)
		mui('.parkTit').on('tap', 'span', function() {
			$("#roomIn .showInfoBox").stop(true).hide();//当切换标题标签的时候  隐藏 室内外展示出来的内容
			$("#roomOut .showInfoBox").stop(true).hide();//当切换标题标签的时候  隐藏 室内外展示出来的内容
			var index = $('.parkTit span').index(this);
			$(this).parents('.parkMainCont').children('.parkContList').children('.contList').eq(index).show().siblings().hide();
			$(this).animate({
				height: .68 + 'rem',
				marginTop: -.1 + 'rem',
				lineHeight: .68 + 'rem'
			}, 200);
			$(this).siblings('span').animate({
				height: .58 + 'rem',
				marginTop: 0 + 'rem',
				lineHeight: .58 + 'rem'
			}, 200);
			$(this).children('.line').addClass('bg_' + index + '');
			$(this).siblings().children('.line').css('opacity', '0');
			$(this).children('.line').css('opacity', '1');
			$(this).siblings('em').animate({
				left: 24 + index * 48 + '%'
			}, 200);
			if(index == 0) {
				$('.parkTit em').addClass('a').removeClass('b').removeClass('c')
			}else if(index == 1) {
				$('.parkTit em').addClass('b').removeClass('c').removeClass('a')
			}
		})
	}else if(oSize == 3){
		mui('.parkTit').on('tap', 'span', function() {
			var index = $('.parkTit span').index(this);
			$(this).parents('.parkMainCont').children('.parkContList').children('.contList').eq(index).show().siblings().hide();
			$(this).animate({
				height: .68 + 'rem',
				marginTop: -.1 + 'rem',
				lineHeight: .68 + 'rem'
			}, 200);
			$(this).siblings('span').animate({
				height: .58 + 'rem',
				marginTop: 0 + 'rem',
				lineHeight: .58 + 'rem'
			}, 200);
			$(this).children('.line').addClass('bg_' + index + '');
			$(this).siblings().children('.line').css('opacity', '0');
			$(this).children('.line').css('opacity', '1');
			$(this).siblings('em').animate({
				left: 16 + index * 32 + '%'
			}, 200);
			if(index == 0) {
				$('.parkTit em').addClass('a').removeClass('b').removeClass('c')
			} else if(index == 1) {
				$('.parkTit em').addClass('b').removeClass('a').removeClass('c')
			} else if(index == 2) {
				$('.parkTit em').addClass('c').removeClass('a').removeClass('b')
			}
		})
	}else if(oSize == 4){
		mui('.parkTit').on('tap', 'span', function() {
			var index = $('.parkTit span').index(this);
			$(this).parents('.parkMainCont').children('.parkContList').children('.contList').eq(index).show().siblings().hide();
			$(this).animate({
				height: .68 + 'rem',
				marginTop: -.1 + 'rem',
				lineHeight: .68 + 'rem'
			}, 200);
			$(this).siblings('span').animate({
				height: .58 + 'rem',
				marginTop: 0 + 'rem',
				lineHeight: .58 + 'rem'
			}, 200);
			$(this).children('.line').addClass('bg_' + index + '');
			$(this).siblings().children('.line').css('opacity', '0');
			$(this).children('.line').css('opacity', '1');
			$(this).siblings('em').animate({
				left: 12.5 + index * 24 + '%'
			}, 200);
			if(index == 0) {
				$('.parkTit em').addClass('a').removeClass('b').removeClass('c').removeClass('d')
			} else if(index == 1) {
				$('.parkTit em').addClass('b').removeClass('a').removeClass('c').removeClass('d')
			} else if(index == 2) {
				$('.parkTit em').addClass('c').removeClass('a').removeClass('b').removeClass('d')
			}else if(index == 3) {
				$('.parkTit em').addClass('d').removeClass('a').removeClass('b').removeClass('c')
			}
		})
	}
}

//游乐设备 页面一加载让页面元素活跃起来
function playActive() {
		$('.indexTips .playProject').addClass('playActive');
	
}