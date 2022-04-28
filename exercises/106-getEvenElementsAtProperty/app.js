
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    if(Object.prototype.toString.call(obj[key] ) !== '[object Array]')  
    {
      return [];
    }
  else if(!obj[key])
  {
    return [];
  }
  else if(obj[key].length===0)
  {
    return [];
  }
  else{
    let retarr = [];
 obj[key].forEach(function(ele){
     if(ele%2===0)
       {
         return retarr.push(ele);
       }
     else
       {
         return [];
       }
     
   });
    return retarr;
  }
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]