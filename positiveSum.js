const positiveSum = arr => {
    let positive = arr.filter(num => num > 0)
    return positive.length ?  positive.reduce((a, b) => a + b) : 0
}