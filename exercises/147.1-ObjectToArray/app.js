function getAllKeys(obj) {
  // your code here
  let keyArray = [];
  for (keys in obj) {
    keyArray.push(keys);
  }
  return keyArray;
}let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output);