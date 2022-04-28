function removeFromFrontOfNew(arr) {
    // your code here
    var myarray = [];
    myarray = arr.slice(1, arr.length);
    return myarray;
}
var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]