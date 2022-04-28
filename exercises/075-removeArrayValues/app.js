function removeArrayValues(obj) {
    // your code here
    var objProperties = Object.keys(obj);
    for(let i=0; i<objProperties.length; i++)

        if(Object.prototype.toString.call(obj[objProperties[i]])==="[object Array]")
           {
          delete obj[objProperties[i]];
        
           }
      
    return obj;
}
var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj);