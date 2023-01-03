const betterThanAverage = (classPoint, yourPoint) => {
    let sum = 0
    classPoint.push(yourPoint)
    classPoint.forEach(element => sum+=element);

    let avg = sum / classPoint.length

    return yourPoint > avg ? true : false
}

// betterThanAverage([2, 3], 5)
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))