function getLargestNumberAmongMixedElements(arr) {
    // your code here
    var largest = -100;
	var result = 0;
	for (var i = 0; i < arr.length; i++){
		if(typeof arr[i] === "number"){
			if (arr[i] > largest){
				largest = arr[i];
				result = arr[i];
			}
		}
	}
	return result;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 200, 'up', 3, 1]);
console.log(output); // --> 5