const palindromes = function (text) {
    const cleanText = text.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    const reversedText = cleanText.split('').reverse().join('');
    return cleanText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
