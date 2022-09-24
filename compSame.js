function comp(array1, array2){
  //  Checks if array is undefined
  if(array1 == null || array2 == null) return false;
  //  Sorts array values in ascending order
  array1.sort((a, b) => a-b); array2.sort((a, b) => a-b);
  //  Maps through every number of the array, multiplies it with the number, then checks if every number in arr1 is the square of arr2
  return array1.map(num => num*num).every((num, i) => num === array2[i])
}