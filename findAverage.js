// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

const findAverage = arr =>{
    let sum = arr.reduce((a, b) => a + b, 0)
    return sum ? sum / arr.length : sum
}