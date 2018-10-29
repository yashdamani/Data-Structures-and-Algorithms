// program to find remainder without using %

function noModulus(number1, number2) {
	
	var quotient = (number1/number2).toFixed(3);
	var integerPart = parseInt((number1/number2));
	var result = quotient - integerPart;
	console.log("remainder is = " + (result * number2));
}

//noModulus(4,2);

var q1 , q2 ;
q1 = 0; q2 = -1;

function noDiv(num1, num2) {
	if(num1 >= num2) {
		while(num1>=num2) {
			num1 = num1 - num2;
			q1++;
		}
		console.log(q1);
	}
	else {
		var temp = num2 / 10;
		while(num1>=0) {
			num1 = num1-temp;
			q2++;
		}
		console.log((q2/10));
	}
}

noDiv(2,4);