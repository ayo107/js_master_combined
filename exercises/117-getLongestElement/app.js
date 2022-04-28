function getLongestElement(arr) {
    // your code here
    if (!Array.isArray(arr) || arr.length === 0) { 
        return '';
      }
        
      var longestWord = arr[0]; 
      
      for (var i = 0; i <arr.length; i++) {
        if (arr[i].length > longestWord.length) {
           
          longestWord = arr[i]; 
    
        }
      }
      return longestWord; 
}
var output = getLongestElement(['one', 'two', 'three', 'trasmayooo']);
console.log(output); // --> 'three'