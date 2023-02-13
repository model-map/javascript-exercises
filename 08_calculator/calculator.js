const add = (a,b)=>a+b;

const subtract = (a,b)=>a-b;

const sum = function(TheArgs) {
	return TheArgs.reduce((total,num)=>total+num,0);
};

const multiply = function(TheArgs) {
  return TheArgs.reduce((total,num)=>total*num,1);
};

const power = (a,n)=>a**n;

const factorial = function (num) {
  let total=1;
  while (num>=1){ 
    total*=num;
    num-=1;
  }
  return total;
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
