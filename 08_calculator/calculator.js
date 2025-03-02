const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(num) { 
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  };
  return arr.reduce((acc, curr) => acc * curr, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
