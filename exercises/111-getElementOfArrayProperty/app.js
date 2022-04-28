var obj = {
 key: ['Jamil', 'Albrey', 'yeyeye', 'ujujuju']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if ((typeof obj[key] != "undefined") && (Array.isArray(obj[key]) && obj[key].length))
    {
      return obj[key][index]
    }
  else return undefined
}
var output = getElementOfArrayProperty(obj, 'key', 3); 
console.log(output);