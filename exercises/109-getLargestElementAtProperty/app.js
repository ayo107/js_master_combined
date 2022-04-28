var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if ((typeof obj[key] != "undefined") && (Array.isArray(obj[key]) && obj[key].length >0))
     {
       var ans = obj[key][0]
       for (var elem in obj[key])
            {
            if( obj[key][elem] > ans)
        ans = obj[key][elem]
            }
       return ans
     }
  else {return undefined}
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4