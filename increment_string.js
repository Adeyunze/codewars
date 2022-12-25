function incrementString (strng) {
    // Get the alphabets in the string
    let strAlpha = strng.replace(/[0-9]/g, '');

    // Track the lenght of string
    let length = strng.length - strAlpha.length;

    // Get numbers in str
    let numbers = strng.slice(strAlpha.length) || '0'

    numbers = (parseInt(numbers) + 1).toString()

    
    while(numbers.length < length){
        numbers = '0' + numbers
    }
    
    strAlpha = strAlpha.concat(numbers);
    console.log(strAlpha);

}

incrementString('fooo009')