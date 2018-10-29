//leftshift and right shift operator

function leftShiftAndRightShift(x, y) {
	var result  = 2;
	var result2 = 0;
	for(let i = 2; i <= y; i++) {
		 result *= 2;
	}
	console.log(" \nLeft Shift of " + x + " and " + y + " without using the operator is : " + (x * result));
	console.log("Left shift with operator is : " + ( x << y));


	result2 = (x / result) | 0;
	console.log(" \nRight Shift of " + x + " and " + y + " without using the operator is : " + result2);
	console.log("Right shift with operator is : " + ( x >> y));
}

//leftShiftAndrightShift(6,2);

//armstrong number

function CheckArmStrongNumber(n) {
	var temp = n;
	var sum = 0;
	var r = 0;
	
		while(temp!==0 && temp > 0) {
			r = temp % 10;
			sum = sum + (r * r * r);
			temp = (temp/10) | 0;
		}
		(sum===n) ? console.log(n + " is an Armstrong number") : console.log(n + " is not an Armstrong number");
	}

//CheckArmStrongNumber(153);

function SumOfArrayElements(array) {
	var sum = 0;
	for(let i = 0; i<array.length; i++) {
		sum += array[i];
	}

	console.log("Sum of the elements in the Array is: " +  sum);
}

//SumOfArrayElements([2,3,4,23]);

function maximumNumberInAnArray(array) {
	var maxNumber = array[0];
	for(let i = 1; i<array.length; i++) {
		(array[i] > maxNumber) ? maxNumber = array[i] : maxNumber += 0;
	}
	console.log("Largest number in the given Array is: " + maxNumber);
}

//maximumNumberInAnArray([3,1,5,7,2,8,4,12,6,32,44]);

function swapTwoArrays(array1, array2) {
	var temp = [];
	if(array1.length === array2.length) {
		for(let i = 0; i<array2.length; i++) {
			temp[i] = array2[i];
			array2[i] = array1[i];
			array1[i] = temp[i];
		}
	}
	else {
		console.log("Cannot swap arrays of unequal lengths");
	}

	console.log("\n");

	for(let i = 0; i<array1.length; i++) {
		console.log(array1[i]);
	}

	console.log("\n");

	for(let i = 0; i<array2.length; i++) {
		console.log(array2[i]);
	}
}

//swapTwoArrays([1,2,3],[4,5,6]);

function LargestAndSmallestNumber(array) {
	var maxNumber = array[0];
	var minNumber = array[array.length-1];

	for(let i = 1; i<array.length; i++) {
		(array[i] > maxNumber) ? maxNumber = array[i] : maxNumber += 0;
		(array[i] < maxNumber) ? minNumber = array[i] : minNumber += 0;
	}
	console.log("Largest number : " + maxNumber + " and the smallest number is : " + minNumber);

}

//LargestAndSmallestNumber([2,3,6,1,7,13,-2]);

function LargestOfThreeNumbers(n1,n2,n3) {
	var largest_Number = 0;
	largest_Number = (n1 > n2) ? (n1>n3 ? n1:n3) : (n2>n3?n2:n3);
	console.log(largest_Number);
}

//LargestOfThreeNumbers(6,3,1);

function meanOfNumbers(array) {
	var lengthOfArray = 0;
	var SumOfArrayElements = 0;
	var mean = 0;
	// var i = 0;
	// while(array[i] !== '') {
	// 	lengthOfArray++;
	// 	SumOfArrayElements += array[i];
	// 	i++;
	// }
	for(let i = 0; i<array.length; i++) {
		if(array[i] !== '') {
			lengthOfArray++;
		}
		SumOfArrayElements += array[i];
	}

	console.log("Mean of the elements in the array is : " 
	+ (((SumOfArrayElements/lengthOfArray) * 100)|0)/100); //fixing the number to decimal places after the decimal point without using inbuilt function
}
//meanOfNumbers([2,3,5,6,8,5,4,3,3])

//find the median of the array

function medianOfArray(array) {
	var temp = 0;
	var lengthOfArray = 0;
	var median = 0;
	for(let i=0; i<array.length; i++) {
		for(let j=1; j<array.length; j++) {
			if(array[j-1] > array[j]) {
				temp = array[j-1];
				array[j-1] = array[j];
				array[j] = temp;
			}
		}
	}

	for(let i = 0; i<array.length; i++) {
		if(array[i] !== '') {
			lengthOfArray++;
		}
	}
	if(lengthOfArray % 2 !== 0) {
		median  = array[((lengthOfArray/2)|0)];
		console.log("1 " + median);
	}
	else {
		median = (array[((array.length/2)|0)] + array[((array.length/2)|0) - 1])/2;
		console.log(array[((array.length/2)|0)] + "\n");
		console.log(array[((array.length/2)|0) + 1]);
		console.log("2 " + median);
	}

}


//medianOfArray([2,1,5,8,3,7]);


function VowelOrConsonant(character) {

	if((character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 122)) {
		switch(character.charCodeAt(0)) {
			case '65' : console.log(character + " is a vowel"); break;
			case '69' : console.log(character + " is a vowel"); break;
			case '73' : console.log(character + " is a vowel"); break;
			case '79' : console.log(character + " is a vowel"); break;
			case '85' : console.log(character + " is a vowel"); break;
			case '97' : console.log(character + " is a vowel"); break;
			case '101' : console.log(character + " is a vowel"); break;
			case '105' : console.log(character + " is a vowel"); break;
			case '111' : console.log(character + " is a vowel"); break;
			case '117' : console.log(character + " is a vowel"); break;
			default : console.log(character + " is a consonant"); break;

		}
	} else {
		console.log("Please enter a valid letter");
	}
}

VowelOrConsonant('3');
