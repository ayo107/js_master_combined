
function addToFrontOfNew(arr, element) {
    // Write your function here
        var newArr = [];
        newArr.push(element);
        for (var i = 0; i < arr.length; i++) {
          newArr.push(arr[i]);
        }
        return newArr;
      }


var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
