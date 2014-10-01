
var ofAge = function(age) {
	if (age >=21) {
		return true;
	}
	else {
		return false;
	}
}

function calculateAge(birthMonth, birthDay, birthYear) {

        // Get Todays Date
        var todayDate = new Date(),
            todayYear = todayDate.getFullYear(),
            todayMonth = todayDate.getMonth(),
            todayDay = todayDate.getDate();

        // Calculate Age
        var age = todayYear - birthYear;

        // Check month discrepancies
        if (todayMonth < (birthMonth - 1)) {
            age--;
        }

        // Check day discrepancies
        if (((birthMonth - 1) == todayMonth) && (todayDay < birthDay)) {
            age--;
        }

        // @return {Number} age
        return age;
    }

console.assert(calculateAge(10,19,1989) === 24)

var checkOfAge = function(month,day,year){
	var age = calculateAge(month,day,year) 
	if (ofAge(age) === true) {
		console.log ('enjoy your booze');
	} else {
		console.log ('go home, its late')
	}
}

checkOfAge(5,21,1990)