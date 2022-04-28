// Write your function here
function countAllCharacters(str) {
    d={}
    if (str ==="") return d
    for (var i =0; i<str.length; i++){
      if( typeof d[str[i]] === "undefined")
      {
        d[str[i]]=1
      }
      else d[str[i]]+=1
    }
    return d
  }
  var output = countAllCharacters('jacinto benaventte buenaventura');
console.log(output);