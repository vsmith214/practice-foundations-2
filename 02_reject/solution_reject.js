var reject = function(arr, func){
	var arrRejects = [];

	for(var i = 0; i < arr.length; i++) {
		if(func(arr[i]) === false) {
			arrRejects.push(arr[i]);
		}
	}
	return arrRejects;
}

//Good job! Another way of writing func(arr[i]) === false is !func(arr[i])