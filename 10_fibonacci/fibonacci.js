const fibonacci = function (n) {
  const num = Number(n);
  const serie = [];
  if (num < 0) return "OOPS";
  for (let i = 0; i < num + 1; i++) {
    serie.push(i < 2 ? i : serie[i - 1] + serie[i - 2]);
  }
  return serie[num];
};

// Do not edit below this line
module.exports = fibonacci;
