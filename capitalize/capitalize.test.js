import { capitalize } from "./capitalize.js"

test('should capitalize a string', () => {
    expect(capitalize("test")).toBe("Test")
})

test('should capitalize a string', () => {
    expect(capitalize("hello")).toBe("Hello")
})

test('should return str', () => {
    expect(capitalize("")).toBe("")
})

test('should capitalize a single character', () => {
    expect(capitalize("a")).toBe("A")
})

test('should return the same string if already capitalized', () => {
    expect(capitalize("Test")).toBe("Test")
})

test('should handle strings starting with numbers or symbols', () => {
    expect(capitalize("123test")).toBe("123test")
    expect(capitalize("!hello")).toBe("!hello")
})