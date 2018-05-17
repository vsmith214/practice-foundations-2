
function recSmallestInt(arr) {
  if (arr.length === 1) return arr[0];
  else {
    if (arr[0] >= arr[arr.length - 1]) return recSmallestInt(arr.slice(1))
    else return recSmallestInt(arr.slice(0, -1));
  }
}