const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    else if (a % 1 !== 0 || b % 1 !== 0) {
        return 'ERROR';
    }

    if (a < b) {
        start = a; 
        finish = b;
    }
    else {
        start = b;
        finish = a;
    }
    
    sum = 0;
    for (start; start <= finish; start++) {
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
