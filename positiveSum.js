const positiveSum = arr => {
    let positive = arr.filter(num => num > 0)
    // if(positive.length === 0)
    return positive.length ?  positive.reduce((a, b) => a + b) : 0
    // return positive
}

console.log(positiveSum([-1,-2,-3,-4,-5]));