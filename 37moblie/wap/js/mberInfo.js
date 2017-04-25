mui('.eleSels').on('tap','span',function () {
		        $(this).addClass('eleSelsCurs').siblings().removeClass('eleSelsCurs');
		    })
		    mui(".listMenu").on('tap','#agenType',function () {
		        $(".eleBotpop").addClass('fadeInUp');
		        $(".All_bgGrey").addClass('fadeInUp2');
		        $(".eleSels").css('display', 'block');
		    })
	 mui(".elebotLink").on('tap','.confirmA',function () {
        var txts = $('.eleSels').find('.eleSelsCurs').html();
        $('#agenType').text(txts);
        $('#sex').val(txts);
        var Type = document.getElementById("agenType").innerHTML;
        if (Type == " ") {
            document.getElementById("agenType").innerHTML = "请选择";
        }

        $(".eleBotpop").removeClass('fadeInUp');
        $(".All_bgGrey").removeClass('fadeInUp2');
    })
	  mui("body").on('tap','.All_bgGrey',function () {
        var txts = $('.eleSels').find('.eleSelsCurs').html();
        $('#agenType').text(txts);
        $('#sex').val(txts);
        var Type = document.getElementById("agenType").innerHTML;
        if (Type == " ") {
            document.getElementById("agenType").innerHTML = "请选择";
        }

        $(".eleBotpop").removeClass('fadeInUp');
        $(".All_bgGrey").removeClass('fadeInUp2');
    })