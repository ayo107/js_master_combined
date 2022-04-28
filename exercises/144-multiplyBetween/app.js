function multiplyBetween(num1, num2) {
    // your code here
    if (num1 >= num2) { 
        return 0;
      }
      sum = 1; 
      for (let i = num1; i < num2; i++) {  
        sum *= i; 
      }
      return sum;
}

var output = multiplyBetween(2, 9);
console.log(output); // --> 24