if ($(".accordion").length > 0){
	$('.accordion').on("click", function(){
		$(this).toggleClass('active');
		if( $(this).hasClass('active')) {
			$(this).find(".accordion__hidden").slideDown();
		} else {
			$('.accordion__hidden').slideUp();
			$(".accordion").removeClass("active");
		}
	});
	$(function ($) {
		$(document).on("mouseup", function (e) {
		var div = $(".accordion.active");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass("active");
			}
		});
	});
	$(function ($) {
		$(document).on("mouseup", function (e) {
			var div = $(".accordion__hidden");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.slideUp();
			}
		});
	});
}