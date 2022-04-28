function convertObjectToList(obj) {
  // your code here
  var finalarray = [];
   
  for(var ele in obj){
     var outputarray = [];
    outputarray.push(ele);
    outputarray.push(obj[ele]);
    finalarray.push(outputarray);
  }
  return finalarray;
}
let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output);