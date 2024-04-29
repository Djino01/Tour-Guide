if ($(".car-excursions").length > 0){
	$(document).ready(function() {
		var swiperCar = null; // Переменная для хранения экземпляра Swiper

		// Функция для инициализации Swiper
		function initSwiper() {
			if (!$(".car-excursions__row").hasClass('swiper-initialized')) {
				swiperCar = new Swiper(".car-excursions__row", {
					slidesPerView: 1.238,
					slidesPerGroup: 1,
					spaceBetween: 20,
					loop: true,
					speed: 1000,
				});
			}
		}

		// Функция для удаления Swiper
		function destroySwiper() {
			if (swiperCar !== null) {
				swiperCar.destroy();
				swiperCar = null;
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
