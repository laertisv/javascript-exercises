const repeatString = function(word, times) {
    finalText = '';
    if (times < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < times; i++) {
        finalText += word;
    }
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
