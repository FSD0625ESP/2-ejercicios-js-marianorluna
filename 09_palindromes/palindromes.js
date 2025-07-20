const palindromes = function (str) {
  const strLower = str.toLowerCase().replace(/[^\w]/g, "");
  const palindrome = strLower.split("").reverse().join("");
  return strLower === palindrome ? true : false
};

// Do not edit below this line
module.exports = palindromes;
