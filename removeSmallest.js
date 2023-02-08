// Array of numbers then remove the smallest value of the array 
// If the valiue occurs more than once remove the smallest number from the array

// Test cases:
// [1, 2, 3, 4, 5] -> [2, 3 ,4, 5]
// [5, 3, 2, 1, 4] -> [5, 3, 2, 4]

function removeSmallest (arr) {
    let smallest = arr.indexOf(Math.min(...arr))
    arr.splice(smallest, 1)
    return arr
}

console.log(removeSmallest([2, 1, 3, 4, 3, 5, 1]))