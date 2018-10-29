// swap variable values in 5 different ways

function Swap1(x,y) { //using temporary variables
	var temp = 0;
	temp = x;
	x = y;
	y  = temp;
	console.log("1. Using temporary vairable: " + x + " " + y);
}

Swap1(4,5);

function Swap2(x,y) {
	x = x+y;
	y = x-y;
	x = x-y;
	console.log("2. Using arithmetic operators(+ and -): " + x + " " + y)
}

Swap2(4,5);


function Swap3(x,y) {
	x = x*y;
	y = x/y;
	x = x/y;
	console.log("3. Using arithmetic operators(* and /): " + x + " " + y)
}

Swap3(4,5);


function Swap4(x,y) {
	x = x^y;
	y = x^y;
	x = x^y;
	console.log("4. Using bitwise(^) XOR operator: " + x + " " + y)
}

Swap4(4,5);


function Swap5(x,y) {
	x = ~(x^y);
	y = ~(x^y);
	x = ~(x^y);
	console.log("5. Using bitwise(~) XNOR operators: " + x + " " + y)
}

Swap5(4,5);

