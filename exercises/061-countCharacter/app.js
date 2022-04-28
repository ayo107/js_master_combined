function countCharacter(str, char) {
    // your code here
    var arr = str.split("");
  var count = 0;
  for(var i=0; i<arr.length; i++)
    {
      if(arr[i]===char)
        {
          count++;
        }
    }
  return count;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
