$('.phone-mask').mask('+7 (999)999-99-99');

$('.callback--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#callback-modal',
		baseClass: 'dark-fancybox',
		touch: false,
        arrows: false,
        infobar: false,
        buttons : false,
	});
});