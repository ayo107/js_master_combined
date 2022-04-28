function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  arr1=(arr1.concat(arr2)).concat(arr3);
  
  arr1.concat(arr3);

  return arr1;
}
var output = joinThreeArrays([15, 20], [32, 44], [58, 6]);
console.log(output);