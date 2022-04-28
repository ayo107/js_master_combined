function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(Object.prototype.toString.call(obj[key] ) !== '[object Array]')  
    {
      return 0;
    }
  else if(!obj[key])
  {
    return 0;
  }
  else if(obj[key].length===0)
  {
    return 0;
  }
  else{
    
   let sum = obj[key].reduce(function(a, b) { return a + b; });
   let avg = sum / obj[key].length;
    
    return avg;
  }
}
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);


