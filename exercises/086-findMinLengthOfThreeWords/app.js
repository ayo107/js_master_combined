// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3) {
    var result = 100;
    var newArray = [word1, word2, word3];
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i].length < result){
            result = newArray[i].length
        }
    }
    return result;
  }
  var output = findMinLengthOfThreeWords('arooz', 'be', 'see');
console.log(output);