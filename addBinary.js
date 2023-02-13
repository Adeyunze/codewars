// Create a function that take two numbers add then convert the sum of the numbers to binary
// Parameter is always gonna be a number

function addBinary(a, b) {
    let sum = a + b

    return sum.toString(2)
}

addBinary(1, 1)
addBinary(5, 9)