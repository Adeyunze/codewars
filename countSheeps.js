// Array -> true, false
// To find the missing sheep where true represents present?
// False represents not present?
// Write a function that counts the amount of present sheep?
// testcase1 = [true, false, true, true, false, true] = 4

// no funny values, boolean values

function countSheeps (array) {
    // Filter the amount of sheeps present and store them in a variable
    let presentSheep = array.filter((num) => num === true)
    return presentSheep.length;
}

console.log(countSheeps([true, false, true, true, false, true]), 4);
console.log(countSheeps([true, false, true, true, false, true, false, true, true]), 6);
console.log(countSheeps([true, false, true, true, false, true, true, false]), 5);

