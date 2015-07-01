$(document).ready(function() {
	
		/* some custom settings */

		$('.iosslider').iosSlider({
			snapToChildren: true,
			desktopClickDrag: true,
			infiniteSlider: true,
			snapSlideCenter: true,
			onSlideChange: slideChange,
			autoSlideTransTimer: '1250',
			autoSlide: false,
			autoSlideTimer: '7000',
			stageCSS: {
				overflow: 'visible'
			},
			navPrevSelector: $('.prevButton'),
			navNextSelector: $('.nextButton')
		});
	
	});
	
	function slideChange(args) {
		$('.item').removeClass('selected');
		$('.item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
	}