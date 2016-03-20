
function askQuestions () {


var firstName = prompt ('What is your first name?');
var lastName = prompt ('What is you last name?');
var fullName = firstName + ' ' + lastName;

console.log(fullName);

var age = prompt('How old are you?');
age = parseInt(age);

if (age >= 18) {
	console.log('User is an adult.');
} else if (age >=13) {
	console.log('User is a teenager');
} else if (age >= 0) {
	console.log('User is a child.');
}

	if (firstName === 'General' && lastName !== 'Assembly') {
		console.log('Looking good, General!')
	}

	var faveColour = prompt('What is your favourite colour?');

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);
	}

}

/*når siden er lastet*/
$(function() {

	$('img').on('click', askQuestions);

	//hide all the sections
	$('h3').not(':first').next().hide();


	//when the user clicks an h3
	$('h3').on('click', function() {

		//Toggle the next section
		$(this).next().slideToggle(1000);

	});

});