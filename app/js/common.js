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

	$('.menu').mmenu({
		extensions: [
			"position-front",
			"position-left",
			"fx-panels-none",
			"fx-listitems-drop",
			'pagedim-black'
	 ],
	 navbar: {
		title: '<a href="#" class="menu__title">Mark</a>'
	}
	});

	var api = $('.menu').data( 'mmenu' );
	
	api.bind( 'open:start', function() {
		$('.my-hamburger').addClass('is-active');
	});
	api.bind( 'close:after', function() {
		$('.my-hamburger').removeClass('is-active');
	});

	$('.my-hamburger, .mm-listitem').click(function() {
		if($('.menu').hasClass('mm-menu_opened')) {
			api.close();
		} else{
			api.open();
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
