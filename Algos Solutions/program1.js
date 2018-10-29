
//program to check if a number is even or odd
var readline = require('readline-sync');
var input = readline.question('Please enter a positive number: ');
function evenOrOdd(number) {
	if(number > 0) {
		if(number % 2 == 0){
			console.log(number + " is even");
		}
		else if(number %2 != 0) {
			console.log(number+ " is odd");
		}

		else if(number === 0 || number < 0) {
				console.log(number + " is neither odd nor even");
		}
	}
	else if(number < 0) {
		console.log("Negative numbers are neither odd nor even");
	}
	else {
		console.log("Please enter a valid number")
	}
}
evenOrOdd(input);
