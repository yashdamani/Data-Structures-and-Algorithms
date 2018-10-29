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

	//displaying first n numbers

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

 evenOrOddRange(10);