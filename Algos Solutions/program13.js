//leap year or not

function LeapYear(year) {

	if(year > 0) {
		if(year % 4 === 0) {
			if(year % 100 === 0) {
				if(year % 400 === 0) 
					console.log(year + " is a Leap Year");
				else 
					console.log(year + " is not a Leap Year")
			}
			else 
				console.log(year + " is a Leap Year");
		}
		else
			console.log(year + " is not a Leap Year");
	}
	else
		console.log(year + " is not a valid year");
}

LeapYear(1900);