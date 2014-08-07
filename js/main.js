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






});