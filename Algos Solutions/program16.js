// Alphabet or not

function AlphabetOrNot(n) {
	if(n >= 'a' && n<= 'z' || n >= 'A' && n <= 'Z') {
		console.log(n + " is an alphabet")
	} 
	else {
		console.log(n +" is not an alphabet");
	}
}

AlphabetOrNot('s');