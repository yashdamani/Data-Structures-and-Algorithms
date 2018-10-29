//power of a number using recursion

function PowerOfANumber(base, exponent) {
	if(exponent === 0)
		return 1;
	return (base * PowerOfANumber(base, exponent-1));
}

console.log("Power of the number is: " + PowerOfANumber(4,3));