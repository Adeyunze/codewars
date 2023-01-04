const countPositivesSumNegatives = arr => {
    if(!arr || arr.length === 0){
        return []
    }
    let positive = arr.filter(num => num > 0)
    let negative = arr.filter(num => num < 0)
    let sum = 0
    negative = negative.forEach(num => {
        sum += num
    })
    
    return [positive.length, sum]
}

console.log(countPositivesSumNegatives([]))