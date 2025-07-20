const sumAll = function (num1, num2) {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

  if ([num1, num2].some((n) => n < 0 || typeof n !== "number" || isNaN(n)))
    return "ERROR";

  return Array.from({ length: max - min + 1 }, (_, i) => i + min).reduce(
    (acc, value) => acc + value,
    0
  );

};

// Do not edit below this line
module.exports = sumAll;
