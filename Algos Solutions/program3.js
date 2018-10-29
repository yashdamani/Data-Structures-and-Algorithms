// program to check if number is prime

function primeNumber(number) {
	var primeCounter = 0;
	for(var i=2; i <= number; i++) {
		if(number % i === 0) {
			primeCounter++;
		}
	}
	if(primeCounter === 1) {
		console.log(number + " is prime");s
	}
	else {
		console.log(number + " is not prime");
	}
}


 primeNumber(8);
