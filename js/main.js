$(document).ready(function(){

	$('.first').on('click', function(e){
		e.preventDefault();
		$('.first').hide();
		$('.aperitivi').show();
	});

	$('.second').on('click', function(e){
		e.preventDefault();
		$('.second').hide();
		$('.drinks').show();
	});

	$('.third').on('click', function(e){
		e.preventDefault();
		$('.third').hide();
		$('.main').show();
	});

	$('.fourth').on('click', function(e){
		e.preventDefault();
		$('.fourth').hide();
		$('.about').show();
	});

	$('.opening_hours').on('click', function(e){
		e.preventDefault();
		$('.hours').fadeIn();
	});

	$('.map').on('click', function(e){
		e.preventDefault();
		$('.about').hide();
		$('#map').show();
	});

	$('.sparkling').on('click', function(e){
		e.preventDefault();
		$('.drinks ul ').hide();
		$('#sparkling').fadeIn();
	});

	$('.champagne').on('click', function(e){
		e.preventDefault();
		$('.drinks ul ').hide();
		$('#champagne').fadeIn();
	});

	$('.white').on('click', function(e){
		e.preventDefault();
		$('.drinks ul ').hide();
		$('#white').fadeIn();
	});

	$('.red').on('click', function(e){
		e.preventDefault();
		$('.drinks ul ').hide();
		$('#red').fadeIn();
	});

	$('.back__aperitivi').on('click', function(e){
		e.preventDefault();
		$('.aperitivi').hide();
		$('.first').show();
	});

	$('.back__drinks').on('click', function(e){
		e.preventDefault();
		$('.drinks').hide();
		$('.second').show();
	});

	$('.back__main').on('click', function(e){
		e.preventDefault();
		$('.main').hide();
		$('.third').show();
	});

	$('.back__about').on('click', function(e){
		e.preventDefault();
		$('#map').hide();
		$('.about').hide();
		$('.fourth').show();
	});
	
});