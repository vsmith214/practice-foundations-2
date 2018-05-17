let threeTimes = fn => {
  let count = 0;

  return function () {
    count += 1;
    if (count <= 3) return fn();
  }
}