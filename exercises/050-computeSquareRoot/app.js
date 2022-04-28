function computeSquareRoot(num) {
  // your code here
  let result = 1
  for (let i=1; i < num; i++) {
    result = ((num / result) + result) / 2
  }
    return result
}
var output = computeSquareRoot(9);
console.log(output); // --> 3