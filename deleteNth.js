const deleteNth = (arr, n) => {
    // Create an empty array that'd store the new array
    let array = [];
    let tracker = {}

    arr.forEach(el => {
        tracker[el] = tracker[el] ? (tracker[el] + 1) : 1
        
        if(tracker[el] <= n){
            array.push(el)
        }
    })

    
    return array
}

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))