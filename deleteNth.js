const deleteNth = (arr, n) => {
    // Create an empty array that'd store the new array
    let tracker = {}

    arr.forEach(el => {
        tracker[el] = tracker[el] ? (tracker[el] + 1) : 1
        return tracker[el] <= n
    })
    
    // return array
}