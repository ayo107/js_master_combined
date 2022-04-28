function detectOutlierValue(str) {
    // your code here
    var numArr = str.split(" ")
  var pos = 0;
  var oddCnt = 0;
  var evenCnt = 0;

  for (var i = 0; i < numArr.length; i++) {
    if (Number(numArr[i]) % 2 === 0) {
      evenCnt += 1;
    } else {
      oddCnt += 1;
    }
  }

  if (evenCnt > oddCnt) {
    for (var i = 0; i < numArr.length; i++){
      if (Number(numArr[i]) % 2 === 1) {
        pos = i + 1;
        break;
      }
    }
  } else {
    for (var i = 0; i < numArr.length; i++){
      if (Number(numArr[i]) % 2 === 0) {
        pos = i + 1;
        break;
      }
    }
  }
  return pos;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2