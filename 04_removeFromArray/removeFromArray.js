const removeFromArray = function(array, ...rest) {
    return array.filter(item => !rest.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
