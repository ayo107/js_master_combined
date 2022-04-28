// Write your function here
function getFirstElementOfProperty(obj, key) {
     var objProperties = Object.keys(obj);
    
    for(let i=0; i<objProperties.length; i++)
      {   
        if(Object.prototype.toString.call(obj[objProperties[i]])==="[object Array]")
           { 
        return obj[objProperties[i]][0];
        
           }
      }
    
  }
  var obj = {
    key: [9, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output);