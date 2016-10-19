
describe("using the Array.prototype.reduce function", function() {

  it("Use reduce to find the sum of the array, with a starting value of 100", function() {

    var callReduceOnThisArray = [1,2,3,4,5];
    spyOn(Array.prototype, 'reduce').and.callThrough();


    // ***** SOLUTION HERE *****
    //var sum = ...
    //your code here!! use the Array method 'reduce' to find the sum of the above array

     var sum = function(startVal, array) {
 	var ans = 100; 
      for( var i = 0; i < array.length; i++) {
        ans += array[i];
      }
      return ans
}
Array.prototype.reduce = function(array, startVal, func) {
    var sum = startVal;

      for( var i = 0; i < array.length; i++) {
        result = func(startVal, array[i]);
      }
      return result
   }
Array.prototype.reduce(callReduceOnThisArray, 100, sum)

    expect(sum).toEqual(115);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });

});


/*
I think you were overthinking this. All you need is:

 var sum = callReduceOnThisArray.reduce(function(prev, current){
      return prev+current;
    }, 100);

*/