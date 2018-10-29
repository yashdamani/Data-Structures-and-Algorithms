//program to check if a number is even or odd

function evenOrOdd(number) {
	if(number >= 0) {
		if(number % 2 == 0){
			console.log(number + " is even");
		}
		if(number %2 != 0) {
			console.log(number+ " is odd");
		}

		if(number === 0 || number < 0) {
				console.log(number + " is neither odd nor even");
		}
	}
}

//evenOrOdd(5);

//generate odd and even numbers in a given range and also print the first n odd and even numbers 

function evenOrOddRange(n) {
	var even1 = [];
	var odd1 = [];

	var even2 = [];
	var odd2 = [];



	//displaying within a range

	console.log("\n" + "Within the given range: (" + n + ")");

	for(let i = 0; i <= n; i++) {
		if(i % 2 === 0)
		{	
			even1.push(i);
		}
		else {
			
			odd1.push(i);
		}
	}
	for(let i = 0; i<=odd1.length; i++)
	{
		if( i == 0) {
			console.log(i + " is neither is odd nor even")
		}
		else {
			console.log("Even " + even1[i]);
		}
	}

	for(let i = 0; i<odd1.length; i++)
	{
		console.log("Odd " + odd1[i]);
		
	}

	//displaying till the nth number

	console.log("\n" + "Till the nth number: (" + n + ")");
	for(let i = 0; i <= n * 2; i++) {
		if(i % 2 === 0)
		{	
			even2.push(i);
		}
		else {
			
			odd2.push(i);
		}
	}
	for(let i = 0; i<=odd2.length; i++)
	{
		if( i == 0) {
			console.log(i + " is neither is odd nor even")
		}
		else {
			console.log("Even " + even2[i]);
		}
	}

	for(let i = 0; i<odd2.length; i++)
	{
		console.log("Odd " + odd2[i]);
		
	}
}

 // evenOrOddRange(10);





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

 //primeNumber(8);

//program to subtract two numbers without using minus sign  

function subtract(number1, number2) {
	console.log(number1 + ~number2 + 1);
}


// subtract(4,6);

// program to find remainder without using %

function noModulus(number1, number2) {
	
	var quotient = (number1/number2).toFixed(3);
	var integerPart = parseInt((number1/number2));
	var result = quotient - integerPart;
	console.log("remainder is = " + (result * number2));
}

//noModulus(3,4);

//fizbuzz

function fizbuzz() {
	for(let i=1; i<=100; i++) {
		if(i % 3 == 0)
		{
			console.log("fizz");
		}
		else if(i % 5 == 0) {
			console.log("buzz");
		}
		else {
			console.log(i);
		}		
	}
}

// fizbuzz();

//generate prime numbers in a given range and also print the first n prime numbers
function primeRange() {
	function primeNumbersRange(start_Point, end_Point) {

		//displaying within a range
		console.log("\n" + "Prime numbers within the given range are: (" 
			+ start_Point + "," + " " + end_Point + ") \n");

		if(start_Point < 2) {
				console.log("No prime numbers in that range");
			}
		
		for(let i = start_Point; i <= end_Point; i++) {
			var counter = 0;
			for(let j = 2; j <= i/2; j++) {
				if(i % j === 0) {
					counter++;
					break;
				}
			}
			if(counter === 0 && start_Point >= 2) {
				console.log(i + "\t");
			}
		}
	}


	// displaying the first n prime numbers

	function firstNPrimeNumbers(n) {
		var i = 2;
		var c = 0;

		if (n >= 1) {
			console.log("\n" + "First " + n + " prime numbers are: " + "\n");
	   	}
	 
	   for (let count = 1 ; count <= n ;  )
	   {
	      for (c = 2 ; c <= i - 1 ; c++)
	      {
	         if (i%c == 0)
	            break;
	      }
	      if (c == i)
	      {
	         console.log(i);
	         count++;
	      }
	      i++;
	   }
	}

	primeNumbersRange(2, 20);
	firstNPrimeNumbers(6);
}
//primeRange();


//program to find hcf and lcm of two numbers using recursion
	function hcflcm() {
		function hcf(n1, n2) {
			if(n2 === 0) 
				return n1;
			if(n2 > n1)
				return hcf(n2, n1);
			return hcf(n2, n1%n2);
		}

		console.log("HCF is : " + hcf(40, 60));

		function lcm(n1,n2) {
			return n1 * n2;
		}

		console.log("LCM is : " + lcm(2,4)/hcf(2,4));
	}
hcflcm();
