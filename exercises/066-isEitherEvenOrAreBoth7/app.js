function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    if(num1===7 && num2===7)
    {
      return true;
    }
  else if(num1%2!==0 && num2%2!==0)
    {
      return false;
    }
  else if(num1%2!==0 && num2%2===0)
    {     
      return true;
    }
  else if(num1%2===0 && num2%2!==0)
    {
      return true;
    }
  else if(num1%2===0 && num2%2===0)
    {
      return true;
    }

  else{
    return "Something is wrong here";
  }
}

var output = isEitherEvenOrAreBoth7(1, 1);
console.log(output); // --> true