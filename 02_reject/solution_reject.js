let reject = (arr, fn) => {
  return arr.filter(val => !fn(val));
}