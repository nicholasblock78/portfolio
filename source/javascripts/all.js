// This is where it all goes :)
$(function() {

	var adjectives = ['Coder', 'Creator', 'Collaborator', 'Connector'];
	var index = 0;
	var slideshow = function() {
			if(index == adjectives.length) {
				index = 0
			}
			$('.emphasis').text(adjectives[index]);
			index ++;
	}

	setInterval(slideshow, 2000);

//This code repeats itself and therefore is not DRY
//Need to refactor into parent function
	$('#dbc img').on('mouseenter', function() {
		event.preventDefault();

		$(this).parent().parent().append('<p>summer 2016</p>')
	})
	$('#dbc img').on('mouseleave', function() {
		event.preventDefault();

		$(this).parent().parent().find('p').remove()
	})

	$('#choppingblock img').on('mouseenter', function() {
		event.preventDefault();

		$(this).parent().parent().append('<p>Sept - Oct 2016</p>')
	})
	$('#choppingblock img').on('mouseleave', function() {
		event.preventDefault();

		$(this).parent().parent().find('p').remove()
	})

	$('#circus img').on('mouseenter', function() {
		event.preventDefault();

		$(this).parent().parent().append('<p>Summer 2015</p>')
	})
	$('#powerreviews img').on('mouseleave', function() {
		event.preventDefault();

		$(this).parent().parent().find('p').remove()
	})
	$('#powerreviews img').on('mouseenter', function() {
		event.preventDefault();

		$(this).parent().parent().append('<p>Mar 2017 - present</p>')
	})
	$('#circus img').on('mouseleave', function() {
		event.preventDefault();

		$(this).parent().parent().find('p').remove()
	})

	$('#pdhp img').on('mouseenter', function() {
		event.preventDefault();

		$(this).parent().parent().append('<p>Summers 2013 & 2014</p>')
	})
	$('#pdhp img').on('mouseleave', function() {
		event.preventDefault();

		$(this).parent().parent().find('p').remove()
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
