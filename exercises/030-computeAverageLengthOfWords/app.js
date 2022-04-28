// Write your function here
function computeAverageLengthOfWords(word1,word2){
    let sum = word1.length + word2.length;
    return sum/2;
}
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output);