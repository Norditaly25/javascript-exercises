const repeatString = function(string, num) {
    let result = "";
    if (num < 0) {
        return "ERROR"
    }
    for (let i = 0; i < num; i++) {
        result += string;        
    }
    return result;
};
console.log(repeatString("Hey", 3));
console.log(repeatString("hello", 10));
console.log(repeatString("hi", 1));

// Do not edit below this line
module.exports = repeatString;
