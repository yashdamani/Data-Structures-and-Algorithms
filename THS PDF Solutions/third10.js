//program to calculate roots of a quadratic equation

function QuadraticEquationRoots(coeff1, coeff2, coeff3) {
	var determinant = 0;
	var root1 = 0;
	var root2 = 0;
	var realPart = 0;
	var imaginaryPart = 0;

	if(coeff1 !== 0) { //coeff1 cannot be 0

		determinant = (coeff2 * coeff2) - (4 * ( coeff1 * coeff3)); //calc determinant

		if(determinant > 0) { //roots are real and different
			root1 = (-coeff2 + Math.sqrt(determinant))/(2*coeff1);
			root2 = (-coeff2 - Math.sqrt(determinant))/(2*coeff1);
			console.log("Since roots are real and different, roots are " + root1 + " and " + root2);
		}

		else if(determinant === 0) { //roots are real and equal
			root1 = root2 = -coeff2/(2*coeff1);
			console.log("Since roots are real and equal, root1 = root2 : " + root1);
		}

		else { //roots are not real
			realPart = (-coeff2)/(2*coeff1);
			imaginaryPart = Math.sqrt(-determinant)/(2*coeff1);
			console.log("Since the roots are imaginary, roots are : " + realPart.toFixed(2) + " + " + imaginaryPart.toFixed(2) + "i" 
				+ " and " + realPart.toFixed(2) + " - " + imaginaryPart.toFixed(2) + "i" );
		}
	} else { 
		console.log("Cannot calculate roots of a quadratic equation where the first co -efficient is 0.")
	}
}

QuadraticEquationRoots(1,6,5);