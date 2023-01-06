const maxIceCream = (costs, coins) => {
    costs.sort((a, b) => a - b)

    let number = 0

    for(let i = 0; i < costs.length && costs[i] <= coins; i++){
        coins -= costs[i]
        number = i + 1
    }

    return number
}

console.log(maxIceCream([1,3,2,4,1], 7));