function transformEmployeeData(array) {
  // your code here
  return array.map(function(a) {
    var obj = {};
    a.map(function(b) {
      obj[b[0]] = b[1];
    });
    return obj;
  })

}
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output);