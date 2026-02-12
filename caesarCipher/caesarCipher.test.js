import { caesarCipher } from "./caesarCipher";

test("function exists", () => {
  expect(caesarCipher("hello", 1));
});

test("shifts a single character", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test("shifts a single character", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("shifts a full string", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("shifts a full string with a space", () => {
  expect(caesarCipher("hello world", 1)).toBe("ifmmp xpsme");
});

test("punctuation", () => {
  expect(caesarCipher("hello, world!", 1)).toBe("ifmmp, xpsme!");
});

test("shifts a full string with case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
