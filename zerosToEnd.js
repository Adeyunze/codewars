function moveZeros(arr) {
  let temp;
  let newArr = [...arr]

  for(let i = arr.length; i > 0; i--){
    if(arr[i] === 0){
      temp = arr.splice(i, 1)
      newArr.push(temp[0])
    }
  }
  return newArr
}