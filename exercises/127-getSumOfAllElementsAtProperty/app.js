var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if((typeof obj[key] != "undefined")&& (Array.isArray(obj[key]) && obj[key].length >0))
    {
      var sum =0
      for (var elem in obj[key])
      {
        sum += obj[key][elem]
      }
      return sum
    }
  else return 0
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13