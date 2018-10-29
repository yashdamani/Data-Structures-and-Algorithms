var arr = [['CAB',4,1,2],['ABC',5],['BAC',7,8,9],['AB', 5],['A', 1]];
var tempArr = [];
function search(inputString) {
	for(i=0; i<arr.length; i++){
		if(inputString === arr[i][0]){
			for(j=1; j<arr[i].length; j++) {
				tempArr.push(arr[i][j]);
			}
		}
	}
	if(tempArr.length < 3 && inputString !== '') {
		inputString = inputString.slice(0,-1);
		if(inputString !== '') search(inputString);
	}
	const result = [];
	let idx = 0;
	const tmp = [];
	for (let i=0; i<tempArr.length; i++) {
		if (!tmp[tempArr[i]]) {
		    tmp[tempArr[i]] = 1;
		    result[idx] = tempArr[i];
		    idx++;
		} 
	}
	return result;
}
console.log(search("ABC"));
console.log(search("CAB"));


	



	