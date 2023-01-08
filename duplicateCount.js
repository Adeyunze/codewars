const duplicateCount = str => {
    let results = 0;

    let charCount = {}

    str.toLowerCase().split('').map(str => {
        if(!charCount.hasOwnProperty(str)){
            charCount[str] = 0
        }else if(charCount[str] === 0){
            results++
        }else{
            charCount[str]++
        }
    });
    return results;
}

console.log(duplicateCount("abcddeaa"));