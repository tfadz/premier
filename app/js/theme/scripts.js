jQuery(function($) {
	$('#image_rotate').innerfade({
		speed: 1000,
		timeout: 4000,
		type: 'sequence'
	});


	$('#brag_rotate').innerfade({
		speed: 1000,
		timeout: 9000,
		type: 'sequence',
		containerheight: '150px'
	});

	$(function () {
		var pull = $('#pull');
		menu = $('nav ul');
		menuHeight = menu.height();

		$(pull).on('click', function (e) {
			e.preventDefault();
			menu.slideToggle();
		});

		$(window).resize(function () {
			var w = $(window).width();
			if (w > 320 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
	});

});

jQuery(function($) {

var $mobileButton = $('.premier-nav__mobile-button');
// var $mobileNav = $('.premier-nav');
var $mobileNavMenu = $('.premier-nav__list');
var $mobileOverlay = $('.overlay');

$mobileButton.click(function(event) {
  event.preventDefault();
  $mobileNavMenu.toggleClass('open');
  $mobileOverlay.toggleClass('overlay__show');
});
});