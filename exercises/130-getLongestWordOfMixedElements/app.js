function getLongestWordOfMixedElements(arr) {
    // your code here
    var lword =""
    var longest =0
    for ( var i =0; i<arr.length; i++)
    {
      if (typeof arr[i] === "string")
          {
            if (arr[i].length > longest)
            {
              lword = arr[i]
              longest = arr[i].length
            }
          }
    }
  return lword
}

var output = getLongestWordOfMixedElements([3, 'wey', 5, 'upupup', 3, 1]);
console.log(output); // --> 'word'