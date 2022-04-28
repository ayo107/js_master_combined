var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if ((typeof obj[key] != "undefined") && (Array.isArray(obj[key]) && obj[key].length>0))
    {
      var prod =1
      for (var elem in obj[key])
      {
        prod *= obj[key][elem]
      }
      return prod
    }
  else return 0
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24