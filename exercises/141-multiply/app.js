function multiply(num1, num2) {
    // your code here
    var product = 0;
    for(var i = 1; i <= num2; i++){
      product += num1;
    }
  
    return product;
}

var output = multiply(4, 7);
console.log(output); // --> 28