"use strict";function scrollHeader(){$(window).scrollTop()>5?$(".header").addClass("fixed"):$(".header").removeClass("fixed")}if($(document).ready((function(){var e=null;function i(){var i=$(window).width();i<760?$(".car-excursions__row").hasClass("swiper-initialized")||(e=new Swiper(".car-excursions__row",{slidesPerView:1.238,slidesPerGroup:1,spaceBetween:20,loop:!0,speed:1e3})):i>671&&null!==e&&(e.destroy(),e=null)}i(),$(window).on("resize",(function(){i()}))})),scrollHeader(),$(window).scroll((function(){scrollHeader()})),$(".header__burger").on("click",(function(e){$("body").addClass("lock"),$(".header-bottom").addClass("active")})),$(".header__closed").on("click",(function(e){$("body").removeClass("lock"),$(".header-bottom").removeClass("active")})),$(document).ready((function(){$(window).on("resize",(function(){var e=$(window).width(),i=$(".main-populars__container"),r=$(".main-populars__top-resuze"),o=$(".main-populars__coll-resuze");e<=760?i.insertBefore(r):i.insertBefore(o)})).trigger("resize");var e=null;function i(){var i=$(window).width();i<760?$(".main-populars__body").hasClass("swiper-initialized")||(e=new Swiper(".main-populars__body",{slidesPerView:1.125,slidesPerGroup:1,spaceBetween:10,loop:!0,speed:1e3})):i>671&&null!==e&&(e.destroy(),e=null)}i(),$(window).on("resize",(function(){i()}))})),$(".main-promo").length>0)var swiperProduct=new Swiper(".main-promo__swiper",{slidesPerView:1,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,speed:300,iOSEdgeSwipeDetection:!0,observer:!0,observeParents:!0,pagination:{el:".main-promo .swiper-pagination",clickable:!0}});if($(".reviews").length>0)swiperProduct=new Swiper(".reviews__swiper",{slidesPerView:2,spaceBetween:20,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,speed:1e3,iOSEdgeSwipeDetection:!0,breakpoints:{20:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},760:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},1010:{slidesPerView:1.5},1279:{slidesPerView:2}},navigation:{nextEl:".reviews .arrow_next",prevEl:".reviews .arrow_prev"}});