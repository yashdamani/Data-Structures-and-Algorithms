//Addition and subtractin of matrices

function AdditionSubtractionMatrix(firstMatrix, secondMatrix) {
	var matrixSum = [];
	var matrixDifference = [];
	var isNumber = [];
	var finalCheck = false;
	var rowNumber = readline.question("Enter the number of rows: ");
	var columnNumber = readline.question("Enter the number of columns: ");

	for(let i = 0; i < firstMatrix.length; i++){
		if(Number.isInteger(firstMatrix[i]) && Number.isInteger(secondMatrix[i])) {
			isNumber[i] = true;
			finalCheck = true;
		}
		else {
			isNumber[i] = false;
			finalCheck = false;
		}
	}
	if(finalCheck) {
		if(rowNumber === columnNumber) {
			if(firstMatrix.length === (rowNumber * columnNumber) && 
				(secondMatrix.length) === (rowNumber * columnNumber)) {
				for(let  i =0; i < firstMatrix.length; i++) {
					matrixSum[i] = firstMatrix[i] + secondMatrix[i];
					matrixDifference[i] = firstMatrix[i] - secondMatrix[i];
				}
				for(let j = 0; j < firstMatrix.length; j++) {
					console.log("Sum of the two matrices is: ");
					console.log( "\n" + matrixSum[j].join(' '));
					console.log("Difference of the two matrices is: ");
					console.log( "\n" + matrixDifference[j].join(' '));
				}
				//console.log("Addition of matrices: " + "[" + matrixSum + "]");
				//console.log("Subtraction of matrices: " + "[" + matrixDifference + "]");
			}
			else {
				console.log("Cannot perform addition on a non square matrix");
			}
		}
		else {
			console.log("Cannot perform addition on a non square matrix");
		}
	}
	else {
		console.log("Please enter valid numbers");
	}
}

AdditionSubtractionMatrix([2,6,4,5], [1,2,3,4]);