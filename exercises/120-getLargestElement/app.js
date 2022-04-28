function getLargestElement(arr) {
  // your code here
    if(arr.length ===0) return 0
    var largest=arr[0]
    for (var i=0; i <arr.length; i++)
    {
      if (arr[i]> largest) largest= arr[i]
          }
  return largest
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output);