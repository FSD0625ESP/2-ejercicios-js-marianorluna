const repeatString = function (text, number) {
  return number < 0 ? "ERROR" : text.repeat(number);
};

// Do not edit below this line
module.exports = repeatString;

repeatString("hola", 1);
