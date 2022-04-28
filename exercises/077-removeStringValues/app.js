var obj = {
    name: 'Sam',
    age: 20
  }

function removeStringValues(obj) {
   
    // your code here
    var objProperties = Object.keys(obj);

  for(let i=0; i<objProperties.length; i++)
    {
            
      if(typeof(obj[objProperties[i]])==="string")
         {
     
        delete obj[objProperties[i]];
      
         }
    }
  return obj;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }