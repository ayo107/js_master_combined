function filterEvenLengthWords(words) {
    // your code here
    let oddwords = [];
  oddwords = words.filter(wordele => wordele.length%2===0);
  return oddwords;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']