const listSquared = (m, n) => {
    let arr = []
    // Go over all the numbers from m to n
    for(let i = m; i <= n; i++){
        let temp = 0;
        // find all the divisors of the current number
        for(let j = 1; j <= i; j++){
            if(i % j === 0) temp += j*j
        }
        if(Math.sqrt(temp) % 1 === 0) arr.push([i, temp])
    }

    return arr
}

console.log(listSquared(1, 250));
