function fib(n) {
	if(n === 0 || n === 1) {
			return n;
	} 
	else{
		return fib(n-1) + fib(n-2);
	}
}

function print(n){
	for(let i = 0; i < n; i++) {
		console.log(fib(i));
	}
}

//print(3);

function fact(n) {
	var result =1;
	if(n === 0) {
		result = 1;
	}
	for(let i = 1; i<=n; i++) {
		result *= i;
	}
	
	console.log(result);
}

//fact(4);

function fact(n) {
	return (n === 0) ? 1 : n * fact(n-1); 
}

console.log(fact(4));