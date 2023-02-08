// Write a program that finds the summation of every number from one to num
// Param - num
// 3 -> 1 + 2 + 3 = 6
// Parameter is always gonna be a number, no strings, no booleans

function summation(num) {
    // Track results i.e the sum of numbers
    let results = 0;
    for(let i = 1; i <= num; i++){
        results += i
    }

    return results
}

console.log(summation(3), 6)
console.log(summation(5), 15)
console.log(summation(2), 3)
console.log(summation(1), 1)