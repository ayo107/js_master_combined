var obj = {
  key: [2, 3, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) {
      var smallest = obj[key][0]
      for (var elem in obj[key]){
        if (obj[key][elem] < smallest)
        {
          smallest = obj[key][elem]
        }
      }
      return smallest
    }
    else
    {
      return undefined
    }
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1