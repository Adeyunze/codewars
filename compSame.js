function comp(array1, array2){
    if(array1 == null|| array2 == null) return false;
    array1.sort((a, b) => a-b)
    array2.sort((a, b) => a-b)
    return array1.map(num => num*num).every((num, i) => num === array2[i])
}