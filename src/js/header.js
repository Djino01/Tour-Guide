// Main menu open
$('.header__burger').on("click", function (event) {
	$('body').addClass('lock');
	$('.header-bottom').addClass('active');
});

$('.header__closed').on("click", function (event) {
	$('body').removeClass('lock');
	$('.header-bottom').removeClass('active');
});