const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    num = parseInt(num);
    let numFibbonacci = { 0: 0, 1: 1 };
    if (numFibbonacci[num]) {
        return numFibbonacci[num];
    } else {
        for (let i = 2; i <= num; i++) {
            numFibbonacci[i] = numFibbonacci[i - 1] + numFibbonacci[i - 2];
        };
        return numFibbonacci[num];
    }; 
};

// Do not edit below this line
module.exports = fibonacci;
