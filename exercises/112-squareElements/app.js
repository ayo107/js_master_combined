function squareElements(arr) {
  // your code here
  var ans =[]
for ( var i=0; i< arr.length; i++)
  ans.push(Math.pow(arr[i], 2))
  return ans
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]