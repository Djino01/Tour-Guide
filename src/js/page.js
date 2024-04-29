if ($(".page").length > 0){

	const minWidth = 1010;
	function rearrangeHeader() {
		const newWidth = $(window).width();
		const $pageAside = $('.page-aside');
		const $pageReviews = $('.page-reviews');
		const $pageAsideTable = $('.page__aside-table');

		if (newWidth <= minWidth) {
			$pageAside.insertBefore($pageReviews);
		} else {
			$pageAside.insertBefore($pageAsideTable);
		}
	}
	$(window).on('resize', rearrangeHeader).trigger('resize');

	$(".page-gallery__img").fancybox({
		backFocus: false,
	});

	$(document).ready(function() {

		var swiperGallery = null; // Переменная для хранения экземпляра Swiper

		// Функция для инициализации Swiper
		function initSwiper() {
			if (!$(".page-gallery__right").hasClass('swiper-initialized')) {
				swiperGallery = new Swiper(".page-gallery__right", {
					slidesPerView: 2.25,
					slidesPerGroup: 1,
					spaceBetween: 10,
					loop: false,
					speed: 1000,
				});
			}
		}

		// Функция для удаления Swiper
		function destroySwiper() {
			if (swiperGallery !== null) {
				swiperGallery.destroy();
				swiperGallery = null;
			}
		}

		// Функция для проверки ширины окна и активации/деактивации Swiper
		function checkResize() {
			var windowWidth = $(window).width();
			if (windowWidth < 760) {
				initSwiper();
			} else if (windowWidth > 671) {
				destroySwiper();
			}
		}

		// Первоначальная проверка при загрузке
		checkResize();

		// Обработчик события resize
		$(window).on('resize', function() {
			checkResize();
		});
		
	});
}