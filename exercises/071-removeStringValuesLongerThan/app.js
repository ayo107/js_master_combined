var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };

function removeStringValuesLongerThan(num, obj) {
    // your code here
    var objProperties = Object.keys(obj);
  
  for(let i=0; i<objProperties.length; i++)
    {
      if(typeof(obj[objProperties[i]]==="string"))
         {
         if(obj[objProperties[i]].length>num)
      {
        delete obj[objProperties[i]];
      }
         }
    }
  return obj;

}

removeStringValuesLongerThan(6, obj);
console.log(obj);