//结果切换   
function TimeChange(clsIndex){
	 mui('.'+clsIndex+'').on('tap','span',function () {

		var index=$('.'+clsIndex+' span').index(this);
		
		$(this).addClass('active2').siblings().removeClass('active2');
		
		$(this).parents('.bottom-box').children('.resultChange').children('.Time').eq(index).css('display','block')
		.siblings().css('display','none')
		
	})
}