const removeFromArray = function(numbers, ...elim) {
    return numbers.filter(num => !elim.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
