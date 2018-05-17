let runNumTimes = (fn, times) => {
  while (times > 0) {
    fn();
    times--;
  }
}

