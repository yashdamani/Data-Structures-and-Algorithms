function RemoveDuplicateElement(array) {
	var duplicateElement = '';
	for(let i = 0; i < array.length; i++) {
		if(array[i] == array[i+1]) {
			duplicateElement = array[i];
			array.splice(array.indexOf(duplicateElement), 1);
		}
	}

	for(let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

RemoveDuplicateElement([6,8,8,5,6]);