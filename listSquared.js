const listSquared = (m, n) => {
    let arr = [];

    for(let i = m; i <= n; i++){
        let temp = 0
        for(let j = 1; j <= i; j++){
            // Check for the factors of the number in the range of m - n
            if(i % j === 0) temp += j*j
        }
        // Check if the square root of temp is equals 0
        if(Math.sqrt(temp) % 1 === 0) arr.push([i, temp])
    }

    return arr
}

console.log(listSquared(1, 250));