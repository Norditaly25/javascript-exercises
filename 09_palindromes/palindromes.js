const palindromes = function (p) {
    const array = p.toLowerCase().split(``).filter(char => char.match(/[a-z0-9]/));
    const reversedArray = [...array].reverse();
    return array.join(``) === reversedArray.join(``);
};

// Do not edit below this line
module.exports = palindromes;
