$(document).ready(function() {
	
	// slide
	$('.iosslider').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		infiniteSlider: true,
		snapSlideCenter: true,
		onSlideChange: slideChange,
		autoSlideTransTimer: 1500,
		autoSlide: true,
		autoSlideTimer: 5000,
		stageCSS: {
			overflow: 'visible'
		},
		navPrevSelector: $('.prevButton'),
		navNextSelector: $('.nextButton')
	});

	// RECENT PRODUCTS slide controls
	recentSlide = $('#recentSlider').bxSlider({
					controls: false,
					displaySlideQty: 1,
					default: 1000,
					easing : 'easeInOutQuint',
					pager :false
				});

	// FEATURED PRODUCTS slide controls
	featuedSlide = $('#featuedSlider').bxSlider({
				controls: false,
				displaySlideQty: 1,
				default: 1000,
				easing : 'easeInOutQuint',
				pager :false
			});

	// btn gotoTop 
	$('.btn_gotoTop').hide().click(function() {

		$('html, body').animate({
			scrollTop: 0
		}, 'medium');
	});
});


function slideChange(args) {
	
}

// scroll ? show : hide 
$(window).bind('scroll', function(){
	if($(this).scrollTop() > 1200) {
		$(".btn_gotoTop").fadeIn(200);
	}
	else{
		$(".btn_gotoTop").fadeOut(200);
	}
});

