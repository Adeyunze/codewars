// Write a function that categorizes a new member
// it gonna take in an array of sub arrays

function openOrSenior(data) {
    let arr = []

    for(let i = 0; i < data.length; i++){
        let current = data[i]
        
        // Member's age is greater than or equals to 55 and handicap is greater than 7 -> member is a senior

        // Else member -> Open
    
        if(current[0] >= 55 && current[1] > 7){
            arr.push('Senior')
        }else{
            arr.push("Open")
        }
    }
    return arr
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]), ["Open", "Open", "Senior", "Open", "Open", "Senior"]);