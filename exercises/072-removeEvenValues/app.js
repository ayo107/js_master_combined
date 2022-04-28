function removeEvenValues(obj) {
    // your code here
    var objProperties = Object.keys(obj);

    for(let i=0; i<objProperties.length; i++)
      {     
        if(typeof(obj[objProperties[i]]==="number"))
           {
           if(obj[objProperties[i]]%2===0)
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
    c: 4,
    d: 8,
    e: 9

  };
  removeEvenValues(obj);
  console.log(obj);