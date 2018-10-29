function SumOfArrayElements(array) {
	var sum = 0;
	for(let i = 0; i<array.length; i++) {
		sum += array[i];
	}

	console.log("Sum of the elements in the Array is: " +  sum);
}

SumOfArrayElements([2,3,4,23]);
