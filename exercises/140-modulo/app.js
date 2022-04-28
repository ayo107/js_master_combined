function modulo(num1, num2) {
    // your code here
    if(isNaN(num1) || isNaN(num2)){
        return NaN;
      }
if(num1 === 0){
return 0;
}
if(num2 === 0){
return NaN;
}


var newNum1 = Math.abs(num1);
var newNum2 = Math.abs(num2);

var quot = newNum1 - Math.floor( newNum1 / newNum2 ) * newNum2 ;

if(num1 < 0){
return -(quot);
}
else{
return quot;
}

}

var output = modulo(25, 3);
console.log(output); // --> 1