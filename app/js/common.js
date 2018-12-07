$(function() {

	//start preloader
	document.body.onload = function() {
		setTimeout(function() {
			$('.preloader').fadeOut('slow');
			$('header .main-text').addClass('fadeInUp');
		}, 2000);
	}
	//end preloader

	new WOW().init();

	$('.items-two-cols').masonry({
		originLeft: false,
		percentPosition: true
	});

	$('.my-hamburger, .menu__link').click(function() {
		$('.my-hamburger').toggleClass('is-active');
		if(!$('.menu').hasClass('active')) {
			$('.menu').toggle(1).toggleClass('active');
		} else {
			$('.menu').toggleClass('active').delay(500).toggle(1);
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
