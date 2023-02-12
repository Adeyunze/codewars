// Write a function that checks if the number given is a square number
// 25 -> true
// -1 -> false
// 4 -> true
// Param - Integer, No boolean , No strings

function isSquare(num) {
    if (num < 0) return false;

    let squareroot = Math.sqrt(num)

    return squareroot === Math.floor(squareroot)
}

console.log(isSquare(25), true);
console.log(isSquare(-1), false);
console.log(isSquare(4), true);
console.log(isSquare(3), false);
