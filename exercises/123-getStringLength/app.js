function getStringLength(string) {
    // your code here
    var arr = string.split("");
    var count = 0;
    for(var i in arr){
        count++;
    }
    return count;
  } 
  function getStringLength(string) {
    var i = 0;
    while(string[i]){
        i++;
    }
    return i;
}

var output = getStringLength('hello');
console.log(output); // --> 5