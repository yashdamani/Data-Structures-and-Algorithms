// swap two arrays

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

swapTwoArrays([1,2,3],[4,5,6]);