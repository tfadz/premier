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