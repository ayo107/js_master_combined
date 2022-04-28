function isEvenWithoutModulo(num) {
    // your code here
    var value = num/2;
    if(Number.isInteger(value)) {
      return true;
    }
    return false;
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true