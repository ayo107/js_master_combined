function filterOddLengthWords(words) {
    // your code here
    var filteredAry = words.filter(function(e) { return e.length % 2 !== 0 })
    return filteredAry;
  }


var output = filterOddLengthWords(['there', 'it', 'is', 'now', 'pepe']);
console.log(output); // --> ['there', "now']