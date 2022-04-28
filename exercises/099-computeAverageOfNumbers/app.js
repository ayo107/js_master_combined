// Write your function here
function computeAverageOfNumbers(nums) {
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(nums.length===0)
      {
        return 0;
      }
    
   let sum = nums.reduce(reducer);
    sum = sum/nums.length;
    return sum;
  }
  var input = [1,2,3,4,5,6];
var output = computeAverageOfNumbers(input);
console.log(output);