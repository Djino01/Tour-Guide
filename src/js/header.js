/*Header scroll*/
function scrollHeader() {
	if ($(window).scrollTop() > 5) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed');
	}
}
scrollHeader();
$(window).scroll(function () {
	scrollHeader();
});

// Main menu open
$('.header__burger').on("click", function (event) {
	$('body').addClass('lock');
	$('.header-bottom').addClass('active');
});

$('.header__closed').on("click", function (event) {
	$('body').removeClass('lock');
	$('.header-bottom').removeClass('active');
});