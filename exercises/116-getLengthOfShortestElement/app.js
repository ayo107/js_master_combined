function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length ===0) return 0
    var shortest = arr[0].length
    for (var i =0; i<arr.length; i++)
    {
      if(arr[i].length < shortest)
      {
        shortest=arr[i].length
      }
    }
    return shortest
}
var output = getLengthOfShortestElement(['one', 'two', 'three', 'tu']);
console.log(output); // --> 3