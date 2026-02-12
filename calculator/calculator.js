export const calculator = {

    add(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 0
        }
        return Number(a) + Number(b)
    },

    subtract(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 0
        }
        return Number(a) - Number(b)
    },

    divide(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 0
        }
        return Number(a) / Number(b)
    },

    multiply(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 0
        }
        return Number(a) * Number(b)
    }

}