// Write your function here
function getElementsLessThan100AtProperty(obj,key){
var result =[]
for (elem in obj[key])
{
  if(obj[key][elem] < 100)
    result.push(obj[key][elem])
}
return result
}
var obj = {
    key: [1000, 20, 50, 500,85,25,14,7]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output);