function getAllElementsButFirst(array) {
  // your code here
  var myarray = [];
  myarray = array.slice(1, array.length);
  return myarray;
}
var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]