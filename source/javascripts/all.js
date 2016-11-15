// This is where it all goes :)
$(function() {
	console.log('hello');

	$('#dbc img').on('click', function() {
		event.preventDefault();

		$(this).parent().parent().append('summer 2016')
	})

	$('#choppingblock img').on('click', function() {
		event.preventDefault();

		$(this).parent().parent().append('Sept - Oct 2016')
	})

	$('#circus img').on('click', function() {
		event.preventDefault();

		$(this).parent().parent().append('summer 2015')
	})

	$('#pdhp img').on('click', function() {
		event.preventDefault();

		$(this).parent().parent().append('summers 2013 & 2014')
	})

	$('button.personal').on('click', function() {
		$('#personal').show();
		$('#team').hide();
	})

	$('button.team').on('click', function() {
		$('#team').show();
		$('#personal').hide();
	})

	$('button.experiences').on('click', function() {
		$('#experiences').show();
		$('#education').hide();
	})

	$('button.education').on('click', function() {
		$('#education').show();
		$('#experiences').hide();
	})
})