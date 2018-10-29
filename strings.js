function strings(input){
	var a = input.split(',');
	for(i=1; i<a.length; i++){
		even = [];
		odd = [];
		for(var j=0; j<a[i].length; j++){
			if(j % 2 == 0) even.push(a[i][j]);
			else odd.push(a[i][j]);
		}
		console.log(even.join('') + " " + odd.join(''));
	}
}
//strings("3,yash damani,Ravi Teja,ths,jhsddfj");

function arrays(input){
	var b = [];
	var result = [];
	for(var i = 0; i<input.length; i++){
	 	if(input[i].length!==undefined){
			for(var j = 0; j<input[i].length; j++){
			 	b.push(input[i][j]);
			}
		}
		else{
			b.push(input[i]);
		}
	}
	console.log(b);
	for(let i=0; i<b.length; i++) {
		counter = 0;
		for(j=0; j<b.length; j++){
			if(b[i] == b[j] && i!==j){
				counter++;
			}
		}
		if(counter<1) {
			result.push(b[i]);
		}
	}
	return result;

}

console.log(arrays([[1,2,4,3],[2,1,3,4]]));