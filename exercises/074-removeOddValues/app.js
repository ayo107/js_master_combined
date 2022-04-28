function removeOddValues(obj) {
    // your code here
    var objProperties = Object.keys(obj);
    
    for(let i=0; i<objProperties.length; i++)
      {
        if(typeof(obj[objProperties[i]]==="number"))
           {
           if(obj[objProperties[i]]%2===1)
        {
          delete obj[objProperties[i]];
        }
           }
      }
    return obj;

}
var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeOddValues(obj);
  console.log(obj);