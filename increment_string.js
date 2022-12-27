function incrementString (strng) {
    // Factor out the number at the end of string
    let count = strng.match(/\d*$/);

    // Check if there's a number at the end of the string if not add zero to the back of string
    if(count[0]){
        count[0]
    } else{
        strng += "0"; count[0] =  '0';
    }
    // tracks the length of the Alphabets in string
    let length = strng.length - count[0].length
    // Factor out the alphabet in string
    let string = strng.slice(0, length)
    // Add one to count and convert to string
    let result = (parseInt(count[0]) + 1).toString()

    // Makes sure 000 is not converted to 0 and add the zeros to back of string
    while(count[0].length > result.length) {
        result = "0" + result
    }

    return string.concat(result)
    
}

incrementString('foo')
incrementString('foobar000')
incrementString('foobar999')
incrementString('foobar00999')
incrementString('foobar001')
incrementString('foobar1')
incrementString('1')
incrementString('009')
incrementString('fo99obar99')