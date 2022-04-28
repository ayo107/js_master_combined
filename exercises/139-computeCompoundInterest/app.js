function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  var result =(1 + (interestRate/compoundingFrequency));
  var totalResult = principal * Math.pow(result, (timeInYears * compoundingFrequency));
  return totalResult - principal;
}


var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543