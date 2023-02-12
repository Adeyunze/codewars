// Is to remove every vowel in the str
// No funny case
// Param  - string. No Boolean, no Number

function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = ''

    for(let i  = 0; i < str.length; i++){
        if(!vowels.includes(str[i])){
            result += str[i]
        }
    }

    return result
}

console.log(disemvowel('This website is for losers LOL!'), 'Ths wbst s fr lsrs LL')
console.log(disemvowel('What are you, a communist?'), 'Wht r y,  cmmnst?')