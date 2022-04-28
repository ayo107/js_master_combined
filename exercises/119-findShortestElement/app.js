function findShortestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return ''
      } else {
        var shortest = arr[0]
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].length < shortest.length) {
            shortest = arr[i];
          }
        }
        return shortest;
      }
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'