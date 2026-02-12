import { reverseString } from "./reverseString";

test('should reverse a string', () => {
    expect(reverseString("hello")).toBe("olleh")
})

test('should reverse a string', () => {
    expect(reverseString("goodbye")).toBe("eybdoog")
})

test('should reverse a string with a space', () => {
    expect(reverseString("hello goodbye")).toBe("eybdoog olleh")
})

test('should handle numbers', () => {
    expect(reverseString("12345")).toBe("54321")
})

test('should handle an empty string', () => {
    expect(reverseString("")).toBe("");
});

test('should handle strings with only spaces', () => {
    expect(reverseString("   ")).toBe("   ");
});