$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.product-card-slider').slick({
	slidesToShow: 1,
	dots: true,
	arrows: false,
	// autoplay: true,
	autoplaySpeed: 2000,
});

$('.exclusive-slider').slick({
	slidesToShow: 1,
	appendArrows: '.exclusive-slider__nav',
	variableWidth: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: false
			}
		}
	]
});

$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
	$('.slick-slider').slick('setPosition');
});