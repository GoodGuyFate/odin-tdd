export function analyzeArray(arr) {
    if (!arr || arr.length === 0) return null;

    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    const length = arr.length
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    
    return {
        average: sum / length,
        min: min,
        max: max,
        length: length
    }
}