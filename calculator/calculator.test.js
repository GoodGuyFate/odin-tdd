import { calculator } from "./calculator";

describe("calculator object", () => {
  describe("add()", () => {
    test("adds two positive numbers correctly", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("adds two positive numbers correctly", () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test("adds two negative numbers correctly", () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test("returns 0 if one input is a non-numeric string", () => {
      expect(calculator.add("apple", 5)).toBe(0);
    });

    test("handles numeric strings correctly", () => {
      expect(calculator.add("10", "5")).toBe(15);
    });

    test("handles decimal (floating point) numbers", () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test("returns 0 when non-numeric strings are passed", () => {
      expect(calculator.add("hello", 5)).toBe(0);
    });
  });

  describe("subtract()", () => {
    test("subtracts two numbers correctly", () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test("subtracts two negative numbers correctly", () => {
      expect(calculator.subtract(-10, -4)).toBe(-6);
    });
  });

  describe("divide", () => {
    test("divides two numbers correctly", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test("handles division by zero", () => {
      expect(calculator.divide(10, 0)).toBe(Infinity);
    });
  });

  describe("multiply", () => {
    test("multiplies correctly", () => {
      expect(calculator.multiply(3, 3)).toBe(9);
    });

    test("returns 0 for null or undefined", () => {
      !expect(calculator.multiply(null, 5)).toBe(0);
    });
  });
});
