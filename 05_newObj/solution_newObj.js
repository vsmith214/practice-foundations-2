var newObj = function(constrFunc) {

//Object.create is the protoype and chained to the prototype and not a instance of or directly inheirited from the constructor function as new Object() would be
	return Object.create(constrFunc.prototype);
}

//Perfect!