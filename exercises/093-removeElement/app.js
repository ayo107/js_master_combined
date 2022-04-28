// Write your function here
function removeElement(array, discarder) {
    var filteredAry = array.filter(function(o) { return o !== discarder })
    return filteredAry;
  }
  var output = removeElement([1, 2, 3, 2, 1], 3);
console.log(output);