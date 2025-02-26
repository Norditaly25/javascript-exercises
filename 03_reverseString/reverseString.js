const reverseString = function(array) {
    let array1 = array.split("");
    array1.reverse();
    return array1.join("");
};
console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
