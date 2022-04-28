function getElementsUpTo(array, n) {
  // your code here
  var myarray = [];
  myarray = array.slice(0, n);
  return myarray;
}
var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']