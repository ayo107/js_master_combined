var obj = {
  key: [2, 1, 5, 7]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    var ans =[] 
    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0)
    {
      for (var elem in obj[key])
      {
        ans.push(Math.pow(obj[key][elem], 2));
    }
    }
  return ans
  }


var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]