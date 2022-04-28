var obj = {
  key: [1, 2, 3, 4, 5, 6, 7]
};

function getOddElementsAtProperty(obj, key) {
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
     if(ele%2===1)
       {
         retarr.push(ele);
       }
     else
       {
         return [];
       }
   });
    return retarr;
  }
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]