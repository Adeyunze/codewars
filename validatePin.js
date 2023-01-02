const validatePIN = pin => {
    let isNum = /^\d+$/.test(pin)
    return pin.length === 4 && isNum || pin.length === 6 && isNum ? true : false
}