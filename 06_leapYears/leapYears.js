const leapYears = (year) =>
  year % 400 === 0 || (year % 100 !== 0 && year % 2 === 0);

// Do not edit below this line
module.exports = leapYears;
