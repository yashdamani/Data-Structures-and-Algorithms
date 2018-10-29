//Triangle classification

function TriangleClassification(side1, side2, side3) {
	if((side1 === side2) && (side1 === side3) && (side2 === side3)){
		console.log(side1 + ", "+ side2 +", " + side3 + "," +" is an equilateral triangle");
	}
	else if((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
		console.log(side1 + ", "+ side2 +", " + side3 + "," +" is a scalene triangle");
	}
	else {
		console.log(side1 + ", "+ side2 +", " + side3 + "," +" is an isosceles triangle");

	}
}

TriangleClassification(4,4,6);