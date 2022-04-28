function findPairForSum(integers, target){
    for (var i = 0; i < integers.length; i++) {
        for (var j = i; j < integers.length; j++) {
          if (integers[i] + integers[j] === target) {
            return [integers[i], integers[j]];
          }
        }
      }
      return 'not possible';
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]