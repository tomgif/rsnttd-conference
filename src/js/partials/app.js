var conference = {
	init: function () {
		conference.fixedFooter();
		$(window).scroll(function(){
			conference.fixedFooter();
		});
	},
	fixedFooter: function(){
		var documentHeight = $(document).height(),//b
			windowHeight = $(window).height(),//c
			documentTop = $(document).scrollTop(),//d
			currentBottomOffset = documentTop + windowHeight,//e
			footerTop = documentHeight - $('.footer__wrapper').height();//f
		
		if (footerTop > currentBottomOffset)
			$('.footer').addClass('footer--fixed');
		else
			$('.footer').removeClass('footer--fixed');
	}
}

$(conference.init);