const positiveSum = arr =>  arr.filter(num => num > 0).reduce((a, b) => a + b);


console.log(positiveSum([1,-4,7,12]))