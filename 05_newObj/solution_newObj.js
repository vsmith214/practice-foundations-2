function newObj(cons) {
  return Object.create(cons.prototype);
}