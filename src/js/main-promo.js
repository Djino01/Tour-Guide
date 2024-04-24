if ($(".main-promo").length > 0){
	var swiperProduct = new Swiper(".main-promo__swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		speed: 300,
		iOSEdgeSwipeDetection: true,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".main-promo .swiper-pagination",
			clickable: true,
		},
    });
}