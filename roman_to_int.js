const roman = (roman) => {
    let data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}

    let result = 0;

    for(let i = 0; i < roman.length; i++){
        let current = data[roman[i]]
        let next = data[roman[i + 1]]

        if (current < next){
            result += next - current;
            i++
        }else {
            result += current
        }

    }

    return result
}

console.log(roman("IX"));