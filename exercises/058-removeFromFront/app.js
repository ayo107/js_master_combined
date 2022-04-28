function removeFromFront(arr) {
    // your code here
    var dele = [];
  dele = arr.shift(arr[0]);
  return arr;
}
var output = removeFromFront([1, 2, 3,9,8,10]);
console.log(output); // --> [2, 3]