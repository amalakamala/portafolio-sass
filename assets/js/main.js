$(document).ready(function(){
	$('.button-collapse').sideNav({
    	menuWidth: 300, // Default is 300
    	edge: 'left', 
    	closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    	draggable: true, // Choose whether you can drag to open on touch screens,
    });
	/*Dropdown*/
	$(".dropdown-button").dropdown();
	/*Carrusel*/
	$('.carousel.carousel-slider').carousel({fullWidth: true});

	$('.carousel').carousel();
		setInterval(function() {
		$('.carousel').carousel('next');
	}, 3000); 
	$("#port-id-img-1").mouseenter(function(){
		$("#port-1").removeClass('hide');	
	}).mouseleave(function(){
		$("#port-1").addClass('hide');	
	});

	$("#port-id-img-2").mouseenter(function(){
		$("#port-2").removeClass('hide');	
	}).mouseleave(function(){
		$("#port-2").addClass('hide');	
	});

	$("#port-id-img-3").mouseenter(function(){
		$("#port-3").removeClass('hide');	
	}).mouseleave(function(){
		$("#port-3").addClass('hide');	
	});		

	$("#port-id-img-4").mouseenter(function(){
		$("#port-4").removeClass('hide');	
	}).mouseleave(function(){
		$("#port-4").addClass('hide');	
	});	

	$("#port-id-img-5").mouseenter(function(){
		$("#port-5").removeClass('hide');	
	}).mouseleave(function(){
		$("#port-5").addClass('hide');	
	});		

	$("#port-id-img-6").mouseenter(function(){
		$("#port-6").removeClass('hide');	
	}).mouseleave(function(){
		$("#port-6").addClass('hide');	
	});			

	$("#port-id-img-7").mouseenter(function(){
		$("#port-7").removeClass('hide');	
	}).mouseleave(function(){
		$("#port-7").addClass('hide');	
	});	

	$("#port-id-img-8").mouseenter(function(){
		$("#port-8").removeClass('hide');	
	}).mouseleave(function(){
		$("#port-8").addClass('hide');	
	});		
});


