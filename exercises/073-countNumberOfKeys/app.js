function countNumberOfKeys(obj) {
    // your code here
    var objProperties = Object.keys(obj);
  return objProperties.length;
}

var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 25
  };
  var output = countNumberOfKeys(obj);
  console.log(output);