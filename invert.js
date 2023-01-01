const invert = (num) => {
    num.forEach((int, index) => int < 0 ? num[index] = Math.abs(int) : num[index]= -Math.abs(int))
    return num
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));
console.log(invert([0]));