function solution(string) {
    let character = string.split(/(?=[A-Z])/)
    return character.join(' ')
}