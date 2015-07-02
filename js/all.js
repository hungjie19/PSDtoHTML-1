$(document).ready(function() {
	
		/* some custom settings */

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
	
	});
	
	function slideChange(args) {
		
	}