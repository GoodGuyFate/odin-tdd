export function capitalize(str) {
    if (!str) return str

    let splitStr = str.split('')
    splitStr[0] = splitStr[0].toUpperCase()
    return splitStr.join('')    
}