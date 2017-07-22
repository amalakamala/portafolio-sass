$(document).ready(function(){
	$(".button-collapse").sideNav();
	/*Dropdown*/
	$(".dropdown-button").dropdown();
	/*Carrusel*/
	$('.carousel.carousel-slider').carousel({fullWidth: true});

	$('.carousel').carousel();
		setInterval(function() {
		$('.carousel').carousel('next');
	}, 3000); 

});


