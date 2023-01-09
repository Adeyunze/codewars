var lengthOfLastWord = s => {
    s = s.trim().split(" ")
    let wordLength = s[s.length - 1].length
    return wordLength;
}

console.log(lengthOfLastWord("   fly me   to   the moon  ")) // Output 4