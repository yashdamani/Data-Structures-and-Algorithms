
//largest of three numbers

function LargestOfThreeNumbers(n1,n2,n3) {
	var largest_Number = 0;
	largest_Number = (n1 > n2) ? (n1>n3 ? n1:n3) : (n2>n3 ? n2:n3);
	console.log(largest_Number);
}

LargestOfThreeNumbers(6,3,1);
