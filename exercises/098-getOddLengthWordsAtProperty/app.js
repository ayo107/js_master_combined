// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    
    if(!obj.hasOwnProperty(key))
    {
      return [];  
    } 
    else if(Object.prototype.toString.call(obj[key])!=="[object Array]")
           {
      return [];
           }
    
    else if(obj[key].length===0)
     {
      return [];  
    }
    else
      {
        var retarr =[];
      for( let j=0; j<obj[key].length; j++)
        {
          
          if(obj[key][j].length%2!==0)
            {
              retarr.push(obj[key][j]);
            }
        }
        return retarr;
      }
   
  }
  var obj = {
    key: ['It', 'has', 'some', 'words', 'trone']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output);