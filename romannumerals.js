var romanLiteral = '';
function decimalToRoman(num){
	var highNum = 0;
	var romanObj = {
		1 : 'I',
		4 :	'IV',
		5 :	'V',
		9 :	'IX',
		10 :'X',
		40 :'XL',
		50 :'L',
		90 :'XC',
		100 :'C',
		400 :'CD',
		500 :'D',
		900 :'CM',
		1000 :'M'
	}

	for(var k in romanObj){
		if(parseInt(k) <= num){
			highNum = parseInt(k);
		}
    }
	
	romanLiteral += Object.values(romanObj[highNum]);
    
	num -= highNum;
	if(num <= 0){
		console.log(`Roman Numeral is: ${romanLiteral}`);
	}
	else decimalToRoman(num);
}

decimalToRoman(79);
