const sortArray = (arr) => {
    const odd = arr.filter((x) => x % 2).sort((a, b) => a - b)
    return arr.map((el) => el % 2 ? odd.shift() : el)
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
