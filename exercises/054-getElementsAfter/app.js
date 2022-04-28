function getElementsAfter(array, n) {
  // your code here
  var myarray = [];
  myarray = array.slice(n+1, array.length);
  return myarray;
}
var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']