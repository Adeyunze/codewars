// Reverse every word in string
// String with letters and the tasks is to reverse every word in it
// test cases = "double  spaces"      ==> "elbuod  secaps"

// No funny characters, parameter is always gonna be a string

function reverseWords (str) {
    let reverse = str.split(' ')
    let reverseArr = []
    
    reverse.forEach((word) => {
        let words = word.split('').reverse().join('')
        reverseArr.push(words)
    })

    return reverseArr.join(' ')
}



console.log(reverseWords("double  spaces" ), "elbuod  secaps");
console.log(reverseWords("This is an example!" ), "sihT si na !elpmaxe");