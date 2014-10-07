var computerChoice = function() {
	var number = Math.random();
	if (number <= .3333) {
		return 'rock';
	}
	else if(number <=.66) {
		 return 'paper';
	}
	else {
		return 'scissors';
	}
}





$('#scissors').on('click', function () {
    var result = compare('scissors', computerChoice());
	$('decision').html(result)
});
$('#paper').on('click', function () {
    var result = compare('paper', computerChoice());
	$('decision').html(result)
});
$('#rock').on('click', function () {
    var result = compare('rock', computerChoice());
	$('decision').html(result)
});




var userPaper = function () {
	userChoice = 'paper'
}
var compare = function(userChoice, computerChoice) {

}














