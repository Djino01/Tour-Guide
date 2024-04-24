if ($(".reviews").length > 0){
	var swiperProduct = new Swiper(".reviews__swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		breakpoints: {
			20: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 20,
			},
			760: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 20,
			},
			1010: {
				slidesPerView: 1.5,
			},
			1279: {
				slidesPerView: 2,
			}
		},
        navigation: {
			nextEl: ".reviews .arrow_next",
			prevEl: ".reviews .arrow_prev",
        },
    });
}