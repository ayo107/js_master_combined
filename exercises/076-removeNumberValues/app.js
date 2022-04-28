var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    var objProperties = Object.keys(obj);
    
    for(let i=0; i<objProperties.length; i++)
      {  
        if(Object.prototype.toString.call(obj[objProperties[i]])==="[object Number]")
           {
          delete obj[objProperties[i]];
        
           }
      }
    return obj;
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }