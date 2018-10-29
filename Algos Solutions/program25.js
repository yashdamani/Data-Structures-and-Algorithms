function decimalToBinary(num) {
  var bin = [];
  while (num > 0) {
  bin[bin.length] = num % 2;
  num >>= 1; // basically /= 2 without remainder 
  }
  console.log("That decimal in binary is " + bin.reverse().join(''));
}

decimalToBinary(8);