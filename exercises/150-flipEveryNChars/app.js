function flipEveryNChars(string, integer) {
    var newString = '';
    for(i = 0; i < string.length - 1; i += integer) {
      
      var slice = string.slice(i, i + integer);
      
      var reverseString = slice.split('').reverse().join('');
      
      newString += reverseString;
    }
    return newString;

}

var input = 'a short example';
var output = flipEveryNChars(input, 4);
console.log(output); // --> ohs axe trelpma