// Write your function here
function getAverageOfElementsAtProperty(obj, key) { 
    var count = 0; var average = 0; 
    if(obj[key]<1 || !Array.isArray(obj[key])){return 0;} 
    for(var prop in obj[key])
    { count = count + obj[key][prop]; } average = count/obj[key].length 
    return average;

}
var obj = {
    key: [1, 2, 3, 20,]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output);