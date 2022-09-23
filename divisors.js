const divisors = (integer) => {
    let arr = [];
    for(let i = 2; i < integer; i++){
        if(integer%i === 0) arr.push(i)
    }
    let results = arr.length !== 0 ? arr : `${integer} is a prime number`;
    return results;
}
