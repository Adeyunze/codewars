function count (string) {  
    const result = {};

    string.split('').forEach(char => {
        result[char] = result[char] ? (result[char] + 1) : 1
    })

    return result
}
count("")