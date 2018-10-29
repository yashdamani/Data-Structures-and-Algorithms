//leftshift and right shift operator

function leftShiftAndRightShift(x, y) {
	var result  = 2;
	var result2 = 0;

	if(y === 0) {
		x = 1;
	}
	else if(y > 0) {
		for(let i = 1; i <= y; i++) {
			 result *= 2;
		}
	}
	else {
		

	}
		console.log(" \nLeft Shift of " + x + " and " + y + " without using the operator is : " + (x * result));
		console.log("Left shift with operator is : " + ( x << y));


		result2 = (x / result) | 0;
		console.log(" \nRight Shift of " + x + " and " + y + " without using the operator is : " + result2);
		console.log("Right shift with operator is : " + ( x >> y));
	}

leftShiftAndrightShift(6,2);