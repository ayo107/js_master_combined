function repeatString(string, num) {
    // your code here
    var newStr = ''; 
    for (let i = 0; i < num; i++) { 
      newStr = newStr.concat(string); 
    }
    return newStr;
  }


var output = repeatString('tikitaka', 20);
console.log(output); // --> 'codecodecode'