function or(expression1, expression2) {
  // your code here
  if(!expression1 && !expression2)
    {
      return false;
    }
  else if(!expression1 && expression2)
    {
      return true;
    }
  else if(expression1 && !expression2)
    {
      return true;
    }
  else if(expression1 && expression2)
    {
      return true;
    }
  else{
    return "Something is wrong here";
  }
}
var output = or(true, false);
console.log(output); // --> true;