// Write your function here
function getNthElementOfProperty(obj, key, n) {

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
            if(n>obj[objProperties[i]].length)
                {
                  return undefined;
                }  
             else
               {
                 let num = obj[objProperties[i]].splice(n,1);
                 return num[0];
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
    key: [8, 7, 6, 9, 2, 23, 55]
  };
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output);