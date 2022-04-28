function addArrayProperty(obj, key, arr) {
  // your code here
  obj[key] = arr;
}
var myObj = {};
var myArray = [1, 8];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]