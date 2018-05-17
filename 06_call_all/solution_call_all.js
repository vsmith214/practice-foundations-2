function callAll(obj, arr) {
  return arr.map(val => val.call(obj));
}