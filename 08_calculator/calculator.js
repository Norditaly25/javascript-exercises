const add = function(add1, add2) {
	const aNum = add1;
  const bNum = add2;
  return aNum + bNum;
};

const subtract = function(sub1, sub2) {
	const aMinus = sub1;
  const bMinus = sub2;
  return  aMinus - bMinus;
};

const sum = function(array1) {
	const aSum = array1.reduce((total, current) => total + current, 0);
  return aSum;
};

const multiply = function(array2) {
  const aMult = array2.reduce((totalV, currentV) => totalV * currentV, 1);
  return aMult;  
};

const power = function(n, n1) {
	const base = n;
  const exponent = n1;
  let power = Math.pow(base, exponent);
  return power;
};

const factorial = function(n) {
  if (n === 0) return 1;
  
  return Array.from({ length: n }, (_, i) => i + 1)
    .reduce((total, current) => total * current, 1);
 
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
