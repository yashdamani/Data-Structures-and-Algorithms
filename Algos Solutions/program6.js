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
