function getAllWords(str) {
    // your code here
    var arr =[];
  
  arr = str.split(" ");
  
  if(str==="")
    {
      return [];
    }
  return arr;
}

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']