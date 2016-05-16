var conference = {
	init: function () {
		conference.fixedFooter();
		$(window).scroll(function(){
			conference.fixedFooter();
			conference.mobileHeader();
		});
		$('.show-sidebar').click(function(){
			$('.page').toggleClass('page--sidebar-visible');
			if (!$('.header').hasClass('header--fixed'))
				$('.header').toggleClass('header--fixed');
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
		var headerStrip = $('.header__row').outerHeight(),
			toolbar = $('.auth').outerHeight()
			toolbarTop = headerStrip - toolbar,
			documentTop = $(document).scrollTop();
		if ((screen.width < 750) && (documentTop > toolbarTop))
			$('.header').addClass('header--fixed');
		else
			if (!$('.page').hasClass('page--sidebar-visible'))
				$('.header').removeClass('header--fixed');
	}
}

$(conference.init);