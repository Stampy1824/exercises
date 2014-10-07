var computerChoice = Math.random();


$('#scissors').on('click', function () {
    var result = compare('scissors', computerchoice());
	$('decision').html(result)
});
$('#paper').on('click', function () {
    var result = compare('paper', computerchoice());
	$('decision').html(result)
});
$('#rock').on('click', function () {
    var result = compare('rock', computerchoice());
	$('decision').html(result)
});

function compare 















// Step 1: Need to compare userChoice to computerChoice//