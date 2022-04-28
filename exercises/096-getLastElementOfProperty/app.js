// Write your function here
function getLastElementOfProperty(obj, key) {
    
     var objProperties = Object.keys(obj);

    for(let i=0; i<objProperties.length; i++)
      {
        if(!obj.hasOwnProperty(key))
          {
            return undefined;
          }
        if(Object.prototype.toString.call(obj[objProperties[i]])==="[object Array]")
           {

             if(obj[objProperties[i]].length===0)
               {
                 return undefined;
               }
         else
               {
            return obj[key].pop();
                 
               }
           }
        else
          {
            return undefined;
          }
      }
    return obj;
  }
  var obj = {
    key: [1, 2, 5, 9, 7]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output)