function fromListToObject(array) {
  // your code here
  var obj = {};
  var collection = array;
  for(var i = 0; i < array.length; i++){
    var dataArray =collection[i];
    for(var j= 0; j < collection[i].length; j++){
      obj[dataArray[0]] = dataArray[1]
    }
  }
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }