if ($(".article-recommendations").length > 0){
	var swiperProduct = new Swiper(".article-recommendations__swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
		slidesPerGroup: 1,
		loop: false,
		loopFillGroupWithBlank: false,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		breakpoints: {
			20: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 20,
			},
			760: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				spaceBetween: 20,
			},
			1010: {
				slidesPerView: 2.4,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			1099: {
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			1379: {
				slidesPerView: 4,
				spaceBetween: 20,
				slidesPerGroup: 1,
			}
		},
        navigation: {
			nextEl: ".article-recommendations .arrow_next",
			prevEl: ".article-recommendations .arrow_prev",
        },
    });
}