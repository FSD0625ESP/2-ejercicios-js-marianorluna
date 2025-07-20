const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = (arrayNum) => arrayNum.reduce((acc, num) => acc + num, 0);

const multiply = (arrayNum) => arrayNum.reduce((acc, num) => acc * num, 1);

const power = (num, pow) => num ** pow;

const factorial = (fact) => {
  return Array.from({ length: fact }, (_, f) => f + 1).reduce(
    (acc, num) => acc * num,
    1
  );
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
