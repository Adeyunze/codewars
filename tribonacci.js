const tribonnaci = (signature, n) => {
    for(let i = 0; i < n - 3; i++){
        signature.push(signature[i] + signature[i + 1] + signature[i + 2])
    }
    return signature.slice(0, n)
}

console.log(tribonnaci([1, 2, 5], 1))