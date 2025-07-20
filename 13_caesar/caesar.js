const caesar = function (str, position) {
  const mayus = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  const minus = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  return str
    .split("")
    .map((letter) => {
      if (minus.includes(letter)) {
        const index = minus.indexOf(letter);
        const newIndex = (index + position + 26) % 26;
        return minus[newIndex];
      }
      if (mayus.includes(letter)) {
        const index = mayus.indexOf(letter);
        const newIndex = (index + position + 26) % 26;
        return mayus[newIndex];
      }
      return letter;
    })
    .join("");
};



// Do not edit below this line
module.exports = caesar;
