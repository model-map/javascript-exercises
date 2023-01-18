const add = function(num1,num2) {
  return num1+num2;
	
};

const subtract = function(num1,num2) {
  return num1-num2;
	
};

const sum = function(TheArgs) {
  let result=0;
  for (const arg of TheArgs) result+=arg;
  return result;
	
};

const multiply = function(TheArgs) {
  let result=1;
  for (const arg of TheArgs) result*=arg;
  return result;

};

const power = function(num1,num2) {
  return num1**num2;
	
};

const factorial = function(num) {
  let result=1;
  for (let i=num;i>=1;i--) result*=i;
  return result;
	
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
