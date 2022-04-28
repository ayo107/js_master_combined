function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    var arr = [word1, word2, word3];
  var shortestWord = '';
  var shortestWord = arr[0];
  
  for (var i=0; i<arr.length; i++){
    if (arr[i].length < shortestWord.length){
      shortestWord = arr[i];
    }
  }
  return shortestWord;
}
var output = findShortestOfThreeWords('abnbnbn', 'two', 'three');
console.log(output); // --> 'a'