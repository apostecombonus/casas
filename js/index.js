$(document).ready(function() {
	$('.cover-text').hover(function(){
		$('.down-arrow').removeClass('bi-arrow-down-square')
						.addClass('bi-arrow-down-square-fill');
	}, function() {
		$('.down-arrow').removeClass('bi-arrow-down-square-fill')
						.addClass('bi-arrow-down-square');
	});
});