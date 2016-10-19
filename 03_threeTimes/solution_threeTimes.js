var threeTimes = function(func) {
// run() will make sure the function runs 3 times only by calling the func 3 times
	var val = 0;
	var n = 3;

	if (n === 0) {
		return val;
	}

	function returnFive() {
		return 5
	};


	return func(n - 1) += val;
}

//I don't see any run(). You need to return a function that closes over a variable that keeps track of how many times the function is called, then run that function if the variable is less than 3. See the official solution.
