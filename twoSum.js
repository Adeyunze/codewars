const twoSum = (num, target) => {
    // nums = [1,3,5,6,2] target = 4;
    // look through the array and find the indices of the sum of two numbers that they add up to target

    num.forEach((el, index) => {
        if(el + el === target){
            return index
        }else{
            return 'not found'
        }
    })
}

console.log(twoSum([2,7,11,15], 9));
