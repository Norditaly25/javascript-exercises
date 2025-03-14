const fibonacci = function(n) {
    const number = Number(n);
    if (number === 0) return 0;
    if (number === 1) return 1;
    if (number < 0) return `OOPS`;
    let prev = 0, current = 1;

    for (let i = 2; i <= number; i++) {
        let next = prev + current;
        prev = current;
        current = next; 
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
