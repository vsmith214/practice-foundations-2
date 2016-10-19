var toBeGreaterThan = function(num) {
		return array.reject(function (number) {
			number < num
		});
	};


var toEqual = function(num) { 
	if(func(array) === num) {
		return true;
	}

}
var recSmallestInt = function(array) {
	var small = function(curr, next) {
		var val= 0;

		if (curr < next) {
			 val = small(curr)
		}
		else {
			 val = small(next)
		}
		return val;
	};
	return small(array);
} 

//You need to have a base case, (e.g., if the array has only one element, obviously that one element is the smallest and should be returned), and then build from there.