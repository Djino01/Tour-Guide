$(document).ready(function() {
	const minWidth = 760;
	function rearrangeHeader() {
		const newWidth = $(window).width();
		const $firstHeader = $('.main-populars__container');
		const $lastMenu = $('.main-populars__top-resuze');
		const $container = $('.main-populars__coll-resuze');
	
		if (newWidth <= minWidth) {
			$firstHeader.insertBefore($lastMenu);
		} else {
			$firstHeader.insertBefore($container);
		}
	}
	$(window).on('resize', rearrangeHeader).trigger('resize');

    var swiperPopular = null; // Переменная для хранения экземпляра Swiper

    // Функция для инициализации Swiper
    function initSwiper() {
        if (!$(".main-populars__body").hasClass('swiper-initialized')) {
            swiperPopular = new Swiper(".main-populars__body", {
                slidesPerView: 1.125,
                slidesPerGroup: 1,
                spaceBetween: 10,
                loop: true,
                speed: 1000,
            });
        }
    }

    // Функция для удаления Swiper
    function destroySwiper() {
        if (swiperPopular !== null) {
            swiperPopular.destroy();
            swiperPopular = null;
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
