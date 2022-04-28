function sumDigits(num) {
    // your code here
    num = num.toString()
    var sum =0
    if (num[0] ==='-'){
      for (var i =2; i < num.length; i++){
      sum += Number(num[i])  
    }
      sum += -Number(num[1])
      return sum
    }
  else{
    for (var i =0; i < num.length; i++){
      sum += Number(num[i])
    }
    return sum
  }
}
var output = sumDigits(-516);
console.log(output); // --> 4