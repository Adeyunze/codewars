const getSum = (a, b) => {
    let result = 0
    let count = []
    count.push(a,b)
    count.sort((a, b) => a - b)

    for(let i = count[0]; i <= count[1]; i++){
        result += i
    }
    return count[0] === count[1] ? count[0] :  result
}

console.log(getSum(1, 1));