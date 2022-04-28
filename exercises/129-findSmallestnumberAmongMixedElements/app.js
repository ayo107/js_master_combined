function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var result = 0;
	var count = 100;
	var num;
	for (var i = 0; i < arr.length; i++){
		if (typeof (arr[i]) === "number"){
			num = arr[i];
			if (num < count){
				count = num;
				result = num;
			}
		}
	}
	return result;
}

var output = findSmallestNumberAmongMixedElements([2, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4