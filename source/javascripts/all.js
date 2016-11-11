// This is where it all goes :)
$(function() {
	console.log('hello');

	$('#dbc img').on('click', function() {
		event.preventDefault();

		$(this).parent().parent().append('July and August 2016')
	})
})