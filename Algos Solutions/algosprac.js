// function anagrams(str1, str2) {
// 	return strSort(str1) === strSort(str2);
// }

// function strSort(str) {
// 	return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
// }

// console.log(anagrams('Tom Marvolo Riddle', 'I am Lord Voldemort'));

// function vowels(str1) {
// 	return test(str1);

// }

// function test(str){
// 	var reg = /[aeiou]/gi;
// 	console.log(reg.test(str));
// }

// vowels('kk');
// vowels('hey i am here');


function pyramids(n) {
	var hash = '*';
	for(var i = 1; i <= n; i++) {
		hash += '#';
		console.log(hash);
	}
}

pyramids(5);