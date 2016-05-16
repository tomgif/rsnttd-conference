var conference = {
	init: function () {
		conference.fixedFooter();
		$(window).scroll(function(){
			conference.fixedFooter();
			conference.mobileHeader();
		});
		$('.show-sidebar').click(function(){
			$('.page').toggleClass('page--sidebar-visible');
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
	},
	mobileHeader: function(){
		var headerStrip = $('.header__row').height(),
			toolbar = $('.auth').height()
			toolbarTop = headerStrip - toolbar,
			documentTop = $(document).scrollTop();
		if ((screen.width < 750) && (documentTop > toolbarTop))
			$('.header').addClass('header--fixed');
		else
			$('.header').removeClass('header--fixed');
	}
}

$(conference.init);