function joinArrays(arr1, arr2) {
  // your code here
  var arr3 = [];
  arr3 = arr1.concat(arr2);
  return arr3;
}
var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]