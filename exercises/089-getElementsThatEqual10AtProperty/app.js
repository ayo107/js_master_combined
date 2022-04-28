// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    var result =[]
    for (elem in obj[key])
    {
      if(obj[key][elem] === 10)
        result.push(obj[key][elem])
    }
    return result
  }
  var obj = {
    key: [2,20,30,10,52,45,10,96,10]
  };
  var output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output);