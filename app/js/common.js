$(function() {

	//start preloader
	$(document).ready(function() {
		setTimeout(function() {
			$('.preloader').fadeOut('slow');
			$('header .main-text').addClass('fadeInUp');
		}, 2000);
	});
	//end preloader

	new WOW().init();

	$('.items-two-cols').masonry({
		itemSelector: '.items-two-cols__item',
		originLeft: false,
		percentPosition: true
	});

	$('.my-hamburger, .menu__link, .cls-menu').click(function() {
		$('.my-hamburger').toggleClass('is-active');
		$('.cls-menu').toggleClass('menu-open');
		if($('.my-hamburger').hasClass('is-active')) {
			$('.menu').show(1);
			$('.menu').addClass('active');
		} else {
			$('.menu').removeClass('active').delay(1000);
			$('.menu').hide(1);
		}
	});

	$('.menu__link').click(function() {
		slowScroll($(this).attr('href'));
	});


//start slowScroll
function slowScroll (id) {
	var offset = 0;
	$('html, body').animate({
		scrollTop :$(id).offset ().top - offset}, 500);
	return false;
}
//close slowScroll

});
